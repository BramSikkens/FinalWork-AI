# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import matplotlib.gridspec as gridspec

csv = csv = pd.read_csv(
    "C:/Users/Bram Sikkens/Desktop/AI-Final Work/K2_MEN_DATASET.csv")
csv = csv[["split time 1", "split time 2", "split time 3",
           "Total Time", "Final Rank", "Competition Round_FINAL A", "Time"]]
csv = csv[csv["Competition Round_FINAL A"] == True]

plt.figure()

grouped = csv.groupby("Time")

i = 1
rows = 3
cols = 1
for name, group in grouped:
    for index, row in group.iterrows():
        # style
        plt.style.use('seaborn-darkgrid')
        # create a color palette
        palette = plt.get_cmap('Set1')
        plt.margins(x=1)
        plt.subplot(rows, cols, i)
        plt.plot(["split time 1", "split time 2", "split time 3", "Total Time"], [row["split time 1"],
                                                                                  row["split time 2"], row["split time 3"], row["Total Time"]], linewidth=1, alpha=0.9, label=index)

        # Add legend
        plt.legend(loc=2, ncol=2)

    i = i + 1


plt.show()
