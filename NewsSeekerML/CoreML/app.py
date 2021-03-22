import json
import re
import string

import pandas as pd
from flask import Flask
from flask import request
# from sklearn.ensemble import GradientBoostingClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from flask import Response
from time import sleep

# from search import manual_testing

app = Flask(__name__)

@app.route("/")
def home():
    return 'Hello, World!'

@app.route("/checkcon")
def test():
    sleep(3.0)  # Time in seconds
    return 'Connection Successful!'

@app.route("/api/v1", methods=['GET', 'POST'])
def api():
    data = request.json["value"]

    print(data)
    df_fake = pd.read_csv("Fake.csv")
    df_true = pd.read_csv("True.csv")

    df_fake["class"] = 0
    df_true["class"] = 1

    df_marge = pd.concat([df_fake, df_true], axis=0)

    df = df_marge.drop(["title", "subject", "date"], axis=1)

    df.isnull().sum()

    df = df.sample(frac=1)

    def drop_text(text):
        text = text.lower()
        text = re.sub('\[.*?\]', '', text)
        text = re.sub("\\W", " ", text)
        text = re.sub('https?://\S+|www\.\S+', '', text)
        text = re.sub('<.*?>+', '', text)
        text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
        text = re.sub('\n', '', text)
        text = re.sub('\w*\d\w*', '', text)
        return text

    df["text"] = df["text"].apply(drop_text)

    x = df["text"]
    y = df["class"]

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.25)

    vectorization = TfidfVectorizer()
    xv_train = vectorization.fit_transform(x_train)
    # xv_test = vectorization.transform(x_test)

    DT = DecisionTreeClassifier()
    DT.fit(xv_train, y_train)

    def output_lable(n):
        if n == 0:
            return "Fake News"
        elif n == 1:
            return "Real News"

    def manual_testing(news):
        testing_news = {"text": [news]}
        print(testing_news)
        new_def_test = pd.DataFrame(testing_news)
        new_def_test["text"] = new_def_test["text"].apply(drop_text)
        new_x_test = new_def_test["text"]
        new_xv_test = vectorization.transform(new_x_test)
        pred_DT = DT.predict(new_xv_test)

        # return print("\n \nGBC Prediction: {} ".format(output_lable(pred_GBC[0])))
        return output_lable(pred_DT[0])
    result = manual_testing(data)
    return Response(status=200, response=json.dumps({"result": result}), mimetype='application/json')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8001, debug=True)