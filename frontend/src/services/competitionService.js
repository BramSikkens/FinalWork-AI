const axios = require("axios");

export async function fetchAllCompetitions(filterObj) {
  try {
    let response = await axios.get("http://localhost:3000/competition", {
      body: {
        filterObj,
      },
    });
    return response.data;
  } catch (error) {
    return null, error;
  }
}

export async function fetchSingleCompetition(competitionId) {
  try {
    const url = "http://localhost:3000/competition/" + competitionId + "/races";
    console.log(url);
    let response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null, error;
  }
}

export async function fetchResultsFromUser(username) {
  try {
    const url = "http://localhost:3000/race/athlete/1";
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null, error;
  }
}
