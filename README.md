# Movie Genre Classification

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Movie Genre Classification is a NLP Project that predicts genre of the movie from plot summary.

#### Live Demo: https://garvit170.github.io/Movie-Genre-Classification/

## Tech Stack:

For frontend, React and Material UI has been used.
Backend is build with flask and python.

## Dataset:

For training the model, CMU Movie Summary Corpus dataset has been used which is available at https://www.cs.cmu.edu/~ark/personas/
###### Total Number of Unique Genres = 363

## Model 

The model has been trained with OneVsRest classifier.
For quantifying the words TF-IDF has been utilised.

## Models Considered:

1. Naive Bayes	&emsp;&emsp; [Accuracy: 42.529]
2. OneVsRest	&emsp;&emsp;&ensp;&ensp;&ensp;[Accuracy: 46.231]
3. MultiLabel KNN &ensp; [Accuracy: 28.268]
