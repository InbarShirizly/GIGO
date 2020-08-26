import tensorflow as tf
import os
import PIL
import numpy as np

model_path = "transfer_learning_model.h5"

final_model = tf.keras.models.load_model(model_path)

def predict(image_path, model):
    """
    get a model and the path image, return the prediction
    return: True == "dirty", False == "clean"
    """
    img = PIL.Image.open(image_path) # image extension *.png,*.jpg
    new_width, new_height  = 256, 256
    img = img.resize((new_width, new_height), PIL.Image.ANTIALIAS)
    photo_check =tf.expand_dims(np.array(img), axis=0)
    return model.predict(photo_check).round()[0] > 0.5

if predict(os.path.join("data/application_photo_examples/", "garbage4.jpeg"), final_model):
    print("photo given is dirty")
else:
    print("photo given is clean")
    