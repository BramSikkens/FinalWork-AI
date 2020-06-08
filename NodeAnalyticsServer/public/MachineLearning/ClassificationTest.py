# Begin by importing all necessary libraries
import pandas as pd
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn import datasets
from sklearn.model_selection import train_test_split
from joblib import dump, load

# import some data to play with
data = pd.read_csv("./public/MachineLearning/Iris.csv")

data.drop("Id", axis=1, inplace=True)

# Pandas ".iloc" expects row_indexer, column_indexer
X = data.iloc[:, :-1].values
# Now let's tell the dataframe which column we want for the target/labels.
y = data["Species"]

# Test size specifies how much of the data you want to set aside for the testing set.
# Random_state parameter is just a random seed we can use.
# You can use it if you'd like to reproduce these specific results.
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=27
)

KNN_model = KNeighborsClassifier(n_neighbors=5)
KNN_model.fit(X_train, y_train)

KNN_prediction = KNN_model.predict(X_test)
print(accuracy_score(KNN_prediction, y_test))
dump(KNN_model, "KNNTest.joblib")
