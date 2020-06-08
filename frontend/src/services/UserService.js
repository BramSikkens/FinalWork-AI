import Axios from "axios";

export async function addAthleteToUser(userid, athleteName) {
  try {
    const url =
      "http://localhost:3000/user/" + userid + "/athlete/" + athleteName;
    let response = await Axios.put(url);
    return response.data;
  } catch (error) {
    return null, error;
  }
}

export async function getResultsOfAthleteFromAnalyticServer(athleteName) {
  try {
    const url = "http://localhost:3003/athlete/" + athleteName + "/results";
    let response = await Axios.get(url);
    let responseObject = await response.data;
    return responseObject;
  } catch (error) {}
}

export async function updateUser(id, updateObject) {
  try {
    const result = await Axios.put(
      "http://localhost:3000/user/" + id,
      updateObject
    );

    return result;
  } catch (error) {}
}
