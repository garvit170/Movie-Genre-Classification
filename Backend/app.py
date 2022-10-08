# Importing essential libraries
from flask import Flask, render_template, request,jsonify
import pickle
# from flask_cors import CORS


# Load the Multinomial Naive Bayes model and CountVectorizer object from disk
filename = 'OneVsRestClassifier.pkl'
classifier = pickle.load(open(filename, 'rb'))
cv = pickle.load(open('tfidf-transform.pkl','rb'))
mlb=pickle.load(open('binarizer.pkl','rb'))

app = Flask(__name__)
# CORS(app)

@app.route('/')
def home():
	return "<h1>hello</h1>"

@app.route('/predict',methods=['POST'])
def predict():
    if request.method == 'POST':
        print(request.form)
        print(request.form['message'])
        message = request.form['message']
        data = [message]
        vect = cv.transform(data).toarray()
        my_prediction = classifier.predict(vect)
        result = mlb.inverse_transform(my_prediction)
        return jsonify(result)

@app.route('/json',methods=['POST'])
def predictjson():
    if request.method == 'POST':
        content = request.json
        print(request.headers)
        data = [content['message']]
        vect = cv.transform(data).toarray()
        my_prediction = classifier.predict(vect)
        result = mlb.inverse_transform(my_prediction)
        return jsonify(result)

if __name__ == '__main__':
	app.run(debug=True)