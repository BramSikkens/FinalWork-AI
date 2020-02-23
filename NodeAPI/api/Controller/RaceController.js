import {} from "../../services/MqService.js";
import { executeQuery } from "../../services/MysqlService";

export async function createRace(req, res) {
  //Body
  // -> Date: R
  // -> Competition_Round: R
  // -> Competition_Id: R

  var sql =
    "INSERT INTO `Race` (`Race_ID`, `Date`, `Competition_Round`, `Competition_ID`) VALUES (NULL, '2020-02-12 05:00:00', 'HEAT', '1');";

  //Get Created Object
  try {
    var queryResult = await executeQuery(sql);
  } catch (querryError) {
    console.log(querryError);
  }

  await res.json({
    race_id: queryResult.insertId,
    competition_id: "1",
    date: "RACICICE",
    round: "HEAT"
  });
  //Create a Rabbit race.event.create message
}

export async function addRaceFromTeam(req, res) {
  //URL
  //-> :teamId
  //-> :raceId
  //BODY
  //-> Lane
  //-> FinalRank
  //-> splitTime1
  //-> splitTime2
  //-> splitTime3
  //-> TotalTime
  //Create Object
  //Return JSON
  //Send message to rabbit
}
