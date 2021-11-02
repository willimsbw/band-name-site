import random
from flask import Flask, json, redirect, render_template, request, url_for, make_response, jsonify
import database_methods

app = Flask(__name__)

@app.route("/", methods=["GET"])
def serve_app():
    return render_template('index.html', flask_token="Hello World")
    

@app.route("/makeName", methods=["POST"])
def make_name():
    sent_data = request.get_json()
    number_of_words = sent_data.get("numberOfWords")
    word_collection = []
    while len(word_collection) < number_of_words:
        if(len(word_collection) >= 1):
            word_collection.append(database_methods.get_random_word(False))
        else:
            word_collection.append(database_methods.get_random_word(True))

    response_body = {
        "bandName": " ".join(word_collection)
    }

    return make_response(jsonify(response_body), 200)


@app.route('/addWord', methods=["POST"])
def add_word():
    sent_data = request.get_json()
    input_word = sent_data.get('word')
    input_first = sent_data.get('first')
    input_second = sent_data.get('second')
    successful_add = database_methods.add_word(input_word, input_first, input_second)
    
    if successful_add:
        response_body = {
            "addedWord": input_word,
            "addedFirst": input_first,
            "message": "Successfully added word"
        }

        return make_response(jsonify(response_body), 200)
    else:
        return make_response(jsonify({"message": "failed to add word"}), 400)


@app.route("/getAllWords", methods=["POST"])
def view_words():
    word_objects = database_methods.get_all_words()
    word_list = []
    for word in word_objects:
        word_map = {
            "word": word.word,
            "first": word.first,
            "second": word.second
        }
        word_list.append(word_map)

    return make_response(jsonify(word_list), 200)
    


@app.route("/removeWord", methods=["POST"])
def remove_word():
    sent_data = request.get_json()
    id_to_remove = sent_data.get('id')
    success = database_methods.remove_word(id_to_remove)

    if success:
        return redirect(jsonify({"message": "Sucessfully removed record with id {}".format(id_to_remove)}), 200)
    else:
        return redirect(jsonify({"message": "Could not remove record with id {}".format(id_to_remove)}), 400)


@app.route("/updateWord", methods=["POST"])
def update_word():
    sent_data = request.get_json()
    success = database_methods.update_word(sent_data)

    if success:
        response_body = {
            "updatedWord": sent_data.get("word"),
            "updatedFirst": sent_data.get("first"),
            "updatedSecond": sent_data.get("second"),
            "id": sent_data.get("id"),
            "message": "Successfully updated word"
        }

        return redirect(jsonify(response_body), 200)
    else:
        return redirect(jsonify({"message": "Could not update record with id {}".format(sent_data.get("id"))}), 400)        


if __name__ == '__main__':
    app.secret_key = 'pass'
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
