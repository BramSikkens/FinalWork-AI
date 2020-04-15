import Axios from "axios";

export async function addAthleteToUser(userid, athleteName) {
  try {
    const url =
      "http://localhost:3000/user/" + userid + "/athlete/" + athleteName;
    let response = await Axios.put(url);
    return response.data;
  } catch (error) {
    alert(error.response.data.code);
    return null, error;
  }
}
