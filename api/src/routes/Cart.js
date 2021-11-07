const { Router } = require('express');
const express = require('express');
const router = Router();
const { Cart , Porducts } = require('../db.js');
const axios = require('axios')



router.get("/", async(req, res) => {
    const {name} = req.query
    const myCountries = await Cart.findAll({
      include: Activity
    }) 
    if (name) {
        var filtered = await myCountries.filter((country) =>
          country.name.toLowerCase().includes(name.toLowerCase())
        )
        if (filtered.length > 0) {
            return res.json(filtered)
        }else{
            return res.status(404).send( "Country not found" );
        }
      } 
    if(myCountries.length > 10){ 
        return res.json(myCountries).status(200);
    }else{
        let apiCountries = await axios.get('https://restcountries.com/v3/all')
        apiCountriesMap = apiCountries.data.map(country =>{
          return{
            id: country.cca3,
            name:country.name.common,
            image:country.flags[0],
            continent:country.region,
            capital:country.capital,
            area:country.area,
            population:country.population
          }
        })
        await Country.bulkCreate(apiCountriesMap) 
        const myCountriesCreate = await Country.findAll()
        return res.json(myCountriesCreate).status(200);
    }
})

router.get("/:id", async (req, res) => {
    let { id } = req.params
    const myId = await Country.findOne({ where: {id} ,  
        include: Activity
    });
if (myId === null) {
  res.send('Not found!');
} else {
  res.json(myId)
}
})





module.exports = router;