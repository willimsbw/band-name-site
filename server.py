from database_setup import Base, Restaurant, MenuItem, User
from flask import Flask, redirect, render_template, request, url_for
from oauth2client.client import flow_from_clientsecrets
from oauth2client.client import FlowExchangeError
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import random, string

engine = create_engine('sqlite:///words.db', connect_args={'check_same_thread': False}, echo=True)
Base.metadata.bind = engine
DBSession = sessionmaker(bind = engine)
session = DBSession()
app = Flask(__name__)

@app.route('/' methods=["POST", "GET"])
def generator():
    if request.method == "GET":
        # Show button with band name over it
        # Get band name from URL and pass them to render template
        first = request.args.get('first')
        second = request.args.get('second')
        return render_template('homepage.html', first=first, second=second)
    if request.method == "POST":
        # Get random values and redirect with them as part of the query URL
        # first =
        # second =
        return redirect(url_for("generator") + "?first=" + first + "&second=" + second, code=303)

if __name__ == '__main__':
    app.secret_key = 'pass'
    app.debug = True
    app.run(host = '0.0.0.0', port = 5000)
