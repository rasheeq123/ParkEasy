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

router.get('/getbyfloor/:floor', (req, res) => {
    Model.find({floor: req.params.floor})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
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

router.get('/getbyvehicle/:vehicle', (req, res) => {
    Model.findOne({vehicle_no: req.params.vehicle_no})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});

router.get('/getbytime/:time', (req, res) => {
    Model.find({time: req.params.time})
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result)=>{            
        res.json(result);
    })
    
    .catch((err)=>{
        res.json(err);
    })
    
});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new:true}) // (new:true updates data dikhaega) , req,params.id islie taaki hum id se data access kr ske
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    });
});

router.delete('/delete/:id', (req, res) => {
   Model.findByIdAndDelete(req.params.id)
   .then((result)=>{
    res.json(result);
   })
   .catch((err)=>{
    res.json(err);
   });
});


module.exports = router;