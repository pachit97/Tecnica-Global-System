const { Router } = require('express');
const express = require('express');
const router = Router();
const { Cart, Products } = require('../db');


router.post("/", async (req, res, next) => {
    const { name, difficulty, season, duration, country} = req.body;
    try {
        const [activity, wasCreated] = await Products.findOrCreate({
          where: { 
            name: name,
            difficulty: difficulty,
            season: season,
            duration: duration
          },
          defaults: {
            name: name,
            difficulty: difficulty,
            season: season,
            duration: duration
            }
        })

        console.log(activity)
        await activity.addCountries(country)
        if(wasCreated){
          res.send("the activity was created successfully")
        }else{
          res.send("this activity already exists")
        }
    } catch (error) {
        next(error)        
    }
})


module.exports = router;