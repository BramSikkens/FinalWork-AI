import numpy as np 
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

csv = pd.read_csv('K2_MEN_DATASET.csv')
df = csv[["Total Time","Day", "Month", "Year", "Time","Place"]]
df = df.groupby(["Day", "Month", "Year", "Time", "Final Rank"]).mean().reset_index()
print(df)

