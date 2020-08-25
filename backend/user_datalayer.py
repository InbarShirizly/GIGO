import json


# from MongoDataLayer import MongoDataLayer

class DataLayer():
    # mongodb = MongoDataLayer()

    def __init__(self):
        file = "./data/users.json"
        self.big_dictionary = DataLayer.load_data(file)
        # self.__MongoDataLayer = MongoDataLayer()

    @staticmethod
    def load_data(file):
        with open(file, "r") as read_file:
            dict_from_json = json.load(read_file)
            return dict_from_json

    @staticmethod
    def add_garbage(big_dictionary, email, garbage_instance):
        big_dictionary[email] = garbage_instance
        return 'Picture uploaded with success'

    @staticmethod
    def add_garbage_string(big_dictionary, email, garbage_instance):
        garbage_string = json.dumps(garbage_instance)
        DataLayer.add_garbage(big_dictionary, email, garbage_string)
        return 'Picture uploaded with success'