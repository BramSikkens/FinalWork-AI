import Axios from "axios";
export async function fetchFullCompetition(competitionId) {
  const responseFromServer = await Axios.get(
    "http://localhost:3000/competition/" + competitionId + "/full/raw"
  );
  const dataFromResponse = await responseFromServer.data;
  return dataFromResponse;
}
