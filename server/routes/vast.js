const express = require('express');
const router = express.Router();
const Joi = require('joi');
const xml = require('xml');

const db = require("../db")
const generateCustomXML = require("../utils/generateCustomXML");

// @SCHEMAS
const vastSchema = require("../validationSchemas/createVastSchema");

/* POST /create_vast */
router.post('/create_vast', (req, res) => {

    let vastObject = { 
      vast_url: req.body.vast_url, 
      position: req.body.position ,
      hide_ui: req.body.hide_ui 
    }

    const validationObject = Joi.validate(vastObject, vastSchema);

    if (validationObject.error) {
      res.json(validationObject.error);
      return;
    }

    let sql = 'INSERT INTO vasts SET ?';
    let query = db.query(sql, vastObject, (err, result) => {

      if (err) throw err;
     
      res.json({status: 200, data: vastObject });
    });
});


/* API:GET - FETCH_VAST by ID */
router.get('/fetch_vast/:id', (req, res) => {

  let sql = `SELECT * FROM vasts WHERE id='${req.params.id}'`;
  let query = db.query(sql, (err, result) => {

    if (err) throw err;

    if (result.length <= 0) {
      res.send({
      xml: "<VAST version='2.0'></VAST>",
      json: null,
      info_message: `Can\'t find video with id: ${req.params.id}`
      });
    } else {
      res.json({
        xml: generateCustomXML(result),
        json: result,
        info_message: null
      });
    }

  });
});


/* API:GET - FETCH_ALL_VASTS by ID */
router.get('/fetch_all_vasts', (req, res) => {

  let sql = `SELECT * FROM vasts`;
  let query = db.query(sql, (err, result) => {

    if (err) throw err;

    res.json({ json: result });

  });
});

module.exports = router;
