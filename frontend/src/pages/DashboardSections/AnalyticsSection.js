import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";

import { getResultsOfAthleteFromAnalyticServer } from "../../services/UserService";

export default class AnalyticSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteResults: new Map(),
    };
  }

  async componentDidMount() {
    try {
      let athleteresults = await getResultsOfAthleteFromAnalyticServer(
        "ALEXEYEV YEVGENIY"
      );

      let results = new Map();
      athleteresults.forEach((element) => {
        const result = element.result;
        if (!results.has(result.RaceType)) {
          results.set(result.RaceType, []);
        }
        results.get(result.RaceType).push({
          day: result.race_Date,
          time: result.result_totalTime,
        });
      });

      this.setState({ athleteResults: results });
    } catch (error) {
      console.log("error");
    }
  }

  render() {
    return (
      <div class="col-md-9">
        <div class="dashboard-title   fl-wrap">
          <h3>Analytics</h3>
        </div>
        <div className="profile-edit-container fl-wrap block_box">
          <div
            className="line-chart-wrapper"
            style={{ width: "100%", height: 300 }}
          >
            <ResponsiveContainer>
              <LineChart
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
                data={this.state.athleteResults.get("K2-MALE-1000M")}
              >
                <XAxis dataKey="day" />
                <YAxis type="number" domain={[200, 230]} />
                <Tooltip />
                <Line type="monotone" dataKey="time" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="profile-edit-container fl-wrap block_box">
          <div
            className="line-chart-wrapper"
            style={{ width: "100%", height: 300 }}
          >
            <ResponsiveContainer>
              <BarChart
                data={[
                  {
                    name: "2014",
                    gold: 4000,
                    silver: 2400,
                    bronze: 2400,
                  },
                  {
                    name: "2015",
                    gold: 3000,
                    silver: 1398,
                    bronze: 2210,
                  },
                  {
                    name: "2016",
                    gold: 2000,
                    silver: 9800,
                    bronze: 2290,
                  },
                  {
                    name: "2017",
                    gold: 2780,
                    silver: 3908,
                    bronze: 2000,
                  },
                  {
                    name: "2018",
                    gold: 1890,
                    silver: 4800,
                    bronze: 2181,
                  },
                  {
                    name: "2019",
                    gold: 2390,
                    silver: 3800,
                    bronze: 2500,
                  },
                  {
                    name: "2020",
                    gold: 3490,
                    silver: 4300,
                    bronze: 2100,
                  },
                ]}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="gold" stackId="a" fill="gold" />
                <Bar dataKey="silver" stackId="a" fill="silver" />
                <Bar dataKey="bronze" stackId="a" fill="brown" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}
