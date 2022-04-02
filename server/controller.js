const houses = require('./db.json');
let houseId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(house => house.id === +req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);            
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body;
        let newHouse = {
            id: houseId,
            address,
            price,
            imageURL
        };
        houses.push(newHouse);
        houseId++;  
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        let { id } = req.params;
        let { type } = req.body;
        let index = houses.findIndex(house => +house.id === +id);

         if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else {
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
    }
  }