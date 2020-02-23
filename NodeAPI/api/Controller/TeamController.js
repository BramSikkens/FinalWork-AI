import {} from "../../services/MqService.js";
import { executeQuery, executePOSTQuery } from "../../services/MysqlService";

export async function createTeam(req, res) {
  var values = [];
  var sql = "INSERT INTO Team (Country, Person1, Person2) VALUES ?";
  var returnObjectArray = [];
  //Body
  // -> Country: R
  // -> Person1: R
  // -> Person2: R
  //Get data from request
  req.body.map(singleTeam => {
    values.push([singleTeam.country, singleTeam.person1, singleTeam.person2]);
  });

  //Adda Data to db
  executePOSTQuery(sql, values, function(result) {
    values
      .slice(0)
      .reverse()
      .map((row, i) => {
        var singleObject = {
          id: result.insertId - i,
          country: row[0],
          person1: row[1],
          person2: row[2]
        };

        returnObjectArray.push(singleObject);
      });
    res.status(201);
    res.json(returnObjectArray);
    //Create a Rabbit team.event.create message
  });
}

export function getSingleTeam(req, res) {
  //Get url Id param
  var teamId = req.params.teamId;
  //Create SQL Query
  var sql = "SELECT * FROM Team WHERE Team_ID = " + teamId;
  //Execute query
  executeQuery(sql, function(result) {
    res.status(200);
    res.json(result);
  });
}

export function deleteSingleTeam(req, res) {
  //Get url Id param
  var teamId = req.params.teamId;
  //Create SQL Query
  var sql = "DELETE  FROM Team WHERE Team_ID = " + teamId;
  //Execute query
  executeQuery(sql, function(result) {
    res.json(result);
    res.status(204);
  });
}
