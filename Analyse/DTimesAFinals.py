# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import matplotlib.gridspec as gridspec

csv = csv = pd.read_csv(
    "C:/Users/Bram Sikkens/Desktop/AI-Final Work/K2_MEN_DATASET.csv")
csv = csv[["D0", "D1", "D2", "D3", "Final Rank",
           "Competition Round_FINAL A", "Time", "Place", "Year"]]
rank = csv['Final Rank'] == 3.0

csv = csv[csv["Competition Round_FINAL A"] == True]
df = csv[["D0", "D1", "D2", "D3", "Time", "Final Rank", "Place", "Year"]]
grouped = df.groupby("Time")

fig = plt.figure()
fig.suptitle("Times per 250m in every A Final")


i = 1
rows = 3
cols = 1
for name, group in grouped:
    for index, row in group.iterrows():
        # style
        plt.style.use('seaborn-darkgrid')
        # create a color palette
        palette = plt.get_cmap('Set1')

        plt.title("test")
        plt.ylabel("Time over 250M")
        plt.subplot(rows, cols, i)
        plt.plot(["250M", "500M", "750M", "1000M"], [row["D0"], row["D1"],
                                                     row["D2"], row["D3"]], linewidth=1, alpha=0.9, label=row["Final Rank"])

        # Add legend
        plt.legend(loc=2, ncol=2)

    i = i + 1

plt.show()
