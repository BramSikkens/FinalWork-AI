# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


csv = csv = pd.read_csv(
    "C:/Users/Bram Sikkens/Desktop/AI-Final Work/K2_MEN_DATASET.csv")

csv = csv[["Country","Competition Round_FINAL A","Final Rank"]]
df = csv[ (csv["Competition Round_FINAL A"] == True) & (csv["Final Rank"] < 10)]
df = df.drop(columns="Competition Round_FINAL A")
grouped = df.groupby(["Country","Final Rank"]).size().reset_index().rename(columns={0:'count'})

print(grouped)
