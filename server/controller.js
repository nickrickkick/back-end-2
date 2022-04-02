const houses = require('./db.json')

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
      // function body here
    },
    createHouse: (req, res) => {

    },
    updateHouse: (req, res) => {

    }
  }