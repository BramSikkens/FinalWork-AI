import { publishToCompetitionExchange } from "../../services/MqService.js";
import { executePOSTQuery, executeQuery } from "../../services/MysqlService";

export async function createCompetition(req, res) {
  var values = [];
  var sql = "INSERT INTO Competition (Place, Type, Year) VALUES ?";
  var returnObjectArray = [];

  //Get data from request
  req.body.map(singleCompetition => {
    values.push([
      singleCompetition.place,
      singleCompetition.type,
      singleCompetition.year
    ]);
  });

  //Adda Data to db
  executePOSTQuery(sql, values, function(result) {
    values
      .slice(0)
      .reverse()
      .map((row, i) => {
        var singleObject = {
          id: result.insertId - i,
          place: row[0],
          type: row[1],
          year: row[2]
        };

        returnObjectArray.push(singleObject);
      });

    //Create a Rabbit competition.event.create message
    publishToCompetitionExchange(
      "event.competition.created",
      JSON.stringify(returnObjectArray)
    );
    res.status(201);
    res.json(returnObjectArray);
  });
}

export function getSingleCompetition(req, res) {
  //Get url Id param
  var competitionId = req.params.competitionId;
  //Create SQL Query
  var sql = "SELECT * FROM Competition WHERE Competition_ID = " + competitionId;
  //Execute query
  executeQuery(sql, function(result) {
    res.status(200);
    res.json(result);
  });
}

export function deleteSingleCompetition(req, res) {
  //Get url Id param
  var competitionId = req.params.competitionId;
  //Create SQL Query
  var sql = "DELETE  FROM Competition WHERE Competition_ID = " + competitionId;
  //Execute query
  executeQuery(sql, function(result) {
    res.status(204);
  });
}
