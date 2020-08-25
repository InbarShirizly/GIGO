import pymongo
from flask import Flask
import json
from flask_cors import CORS
from flask import request


app = Flask(__name__)
cors = CORS(app)
x = ''
gigo_DB = []


@app.before_first_request
def before_first_request():
    global x
    mongo = pymongo.MongoClient(
        "mongodb+srv://gigoAdmin:gigo1234@gigo.azdaq.mongodb.net/gigo?retryWrites=true&w=majority")
    gigo_DB = mongo["gigo"]
    gigo_COL = gigo_DB["locations"]
    x = gigo_COL.find_one()


@app.route('/')
def hello_world():
    print(x)

    resp = app.response_class(response=json.dumps({"dict":x['test']}), status=200, mimetype="application/json")
    return resp


@app.route("/locations/add", methods=["POST"])
def add_location():
    print("adding a location api")
    posted_data = request.json
    gigo_DB.gigo_COL.insert_one(posted_data)
    return "saved"


if __name__ == "__main__":
    app.run()