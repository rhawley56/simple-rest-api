const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

//Get all trainers
app.get('/trainers/', (req, res) => {

  //Todo request all Trainers from the DB

  //Return all trainers and info
  res.status(200).send([{
    id: 'trainer-id-000001',
    email: 'trainer1@campgladiator.com',
    phone: '5125155120',
    first_name: 'Fearless',
    last_name: 'Contender'
  },{
    id: 'trainer-id-000002',
    email: 'trainer2@campgladiator.com',
    phone: '5125155120',
    first_name: 'Fearless',
    last_name: 'Contender'
  }])
})

//Get one Trainer based on ID
app.get('/trainers/:id/', (req, res) => {
  const { id } = req.params;

  //TODO Get One Trainer based on ID from DB

  //Return info for requested Trainer based on ID if present
  res.status(200).send({
    id: `trainer-id-${id}`,
    email: 'trainer@campgladiator.com',
    phone: '5125155120',
    first_name: 'Fearless',
    last_name: 'Contender'
  })

  //Todo return error if Trainer was not found in DB
})

//Create a new Trainer
app.post('/trainers/:id/', (req, res ) => {
  const { id } = req.params;
  const { email, phone, first_name, last_name } = req.body;

  //Todo sanitize inputs and check formatting

  //Todo check for duplicate entries

  //Todo insert into DB

  //Return success message with Trainer ID or error if all info was not included
  if ( email && phone && first_name && last_name ) {
    res.send({
      trainer: `${first_name} ${last_name} created with ID of ${id}`,
    })
  } else {
    console.log(email);
    res.status(400).send({ 
      message: 'Include all trainer info!' })
  }
})

//Todo Method to Update a Trainer based on ID

//Todo Method to Delete a Trainer based on ID

app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)