import random

from flask import Flask, redirect, render_template, request, url_for

import database_methods

app = Flask(__name__)


@app.route('/', methods=["POST", "GET"])
def generator():
    if request.method == "GET":
        first = request.args.get('first')
        second = request.args.get('second')
        addedWord = request.args.get('addedWord')
        return render_template('homepage.html', first=first, second=second, addedWord=addedWord)
    if request.method == "POST":
        # Get random values and redirect with them as part of the query URL
        first = database_methods.get_random_word()
        second = database_methods.get_random_word()
        while second == first:
            second = database_methods.get_random_word()
        if random.randint(1, 20) == 1:
            second = second + "!"
        return redirect(url_for("generator") + "?first=" + first + "&second=" + second, code=303)


@app.route('/addWord', methods=["POST"])
def add_word():
    input_word = request.form.get('word')
    database_methods.add_word(input_word)
    return redirect(url_for("view_words") + "?added_word=" + input_word, code=303)
    


@app.route("/viewWords", methods=["GET"])
def view_words():
    if request.method == "GET":
        word_objects = database_methods.get_all_words()
        added_word = request.args.get('added_word')
        return render_template("manageWords.html", word_objects=word_objects, added_word=added_word)


@app.route("/removeWord", methods=["POST"])
def remove_word():
    id_to_remove = request.form.get('id_to_remove')
    database_methods.remove_word(id_to_remove)
    return redirect(url_for("view_words"), code=303)


if __name__ == '__main__':
    app.secret_key = 'pass'
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
