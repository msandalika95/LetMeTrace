const router = require("express").Router();
let Airport = require("../models/air");
let Bank = require("../models/Ban");
let Bus = require("../models/bus");
let Cafe = require("../models/caf");
let College = require("../models/college");
let Hospital = require("../models/hos");
let Mall = require("../models/mal");
let Police = require("../models/polis");
let PosOffice = require("../models/postOf");
let RailStation = require("../models/rail");

router.route('/A').get((req,res) => {
    Airport.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/Ba').get((req,res) => {
    Bank.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/Bu').get((req,res) => {
    Bus.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/C').get((req,res) => {
    Cafe.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/Co').get((req,res) => {
    College.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/H').get((req,res) => {
    Hospital.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/P').get((req,res) => {
    Police.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/Po').get((req,res) => {
    PosOffice.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/R').get((req,res) => {
    RailStation.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/').get((req,res) => {
    Mall.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;