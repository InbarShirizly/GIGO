class Validators():

    @staticmethod
    def basic_validation(json):
        field_types = [str, str]
        values_list = [value for value in json.values()]
        for i in range(2):
            if type(values_list[i]) != field_types[i]:
                return False
        return True

    @staticmethod
    def validate_email(big_dictionary, email):
        for key in big_dictionary:
            if key == email:
                return "exist"
        return "doesn't exist"