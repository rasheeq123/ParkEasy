const express=require ('express');
const Model = require('../models/slotModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        
        res.json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/getbyslot/:slot', (req,res)=>{   
    console.log(req.params.slot);
    module.findOne({slot: req.params.slot})
    .then((result)=>{
        res.json(result);
    }) .catch((err)=>{
        res.json(err);
    });
    
})

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});
