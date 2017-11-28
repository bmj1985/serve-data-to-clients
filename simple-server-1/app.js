const cohorts = require('./data/cohorts')
const express = require('express')
const app = express()
const cors = require('cors')


app.get('/', (req, res) => res.json(cohorts))

function findById(cohorts, id) {
  for (let i = 0; i < cohorts.length; i++) {
    for (var j = 0; j < cohorts..length; i++) {
      array[i]
    }
    if (cohorts[i].id == id) {
      return cohorts[i];
      console.log(cohortData, cohorts[i])
    }
  }
  return null;
}

app.get("/", function(request, response) {
  response.json({
    data: cohorts
  });
});

app.get("/:id", function(request, response) {
  let specificCohort = findById("id");
  response.json({
    data: specificCohort
  })
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
