from database_setup import Base, Words
from flask import Flask, redirect, render_template, request, url_for
from sqlalchemy import create_engine
from sqlalchemy.sql.expression import func, select
from sqlalchemy.orm import sessionmaker
import random, string

engine = create_engine('sqlite:///words.db', connect_args={'check_same_thread': False}, echo=True)
Base.metadata.bind = engine
DBSession = sessionmaker(bind = engine)
session = DBSession()
app = Flask(__name__)

@app.route('/', methods=["POST", "GET"])
def generator():
    if request.method == "GET":
        first = request.args.get('first')
        second = request.args.get('second')
        return render_template('homepage.html', first=first, second=second)
    if request.method == "POST":
        # Get random values and redirect with them as part of the query URL
        first = session.query(Words).order_by(func.random()).first().word
        second = session.query(Words).order_by(func.random()).first().word
        while second == first:
            second = session.query(Words).order_by(func.random()).first().word
        if random.randint(1, 20) == 1:
            second = second + "!"
        return redirect(url_for("generator") + "?first=" + first + "&second=" + second, code=303)

if __name__ == '__main__':
    app.secret_key = 'pass'
    app.debug = True
    app.run(host = '0.0.0.0', port = 5000)
