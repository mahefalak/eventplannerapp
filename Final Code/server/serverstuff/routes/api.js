const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const mongoose = require("mongoose");
const EventType = require("../models/EventType");
const cRegistration = require("../models/registration");
const cReservation = require("../models/Reservation");
const cPortfolio = require("../models/portfolio");
const db= "mongodb://mahefalak:ep1550022@ds159866.mlab.com:59866/eventplanner";
const auth_key = '123';
const multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/images/')
    },
    filename: function (req, file, cb) {
        console.log('storingimage');
      cb(null, file.fieldname + '-' + Date.now()+'.jpg')
    }
  });
  
  var upload = multer({ storage: storage }).single('profileImage'); 
  router.post('/uploadImage',multer(storage).single('profileImage') ,
  function (req, res) {
      console.log('uploadingimage');
  }); 
  router.post('/uploadPortfolio', function (req, res) {
    
    upload(req, res, function (err) {
      if (err) {
        // An error occurred when uploading
        return
      }
      console.log(req.file.filename);

      //save om  data ase

      var newPortfolio=new cPortfolio();
      newPortfolio.path=req.file.filename;
      newPortfolio.save(function(err,insertedPortfolio)
      {
  
      });

      res.json({success:true,message:'image uploaded'});
      // Everything went fine
    })
  });

  
router.get('/GetPortfolio',function(req,res){  
    
        cPortfolio.find({
             }).exec(function(err,Portfolios){
                 if(err)
                 res.status(500).json({error:"Something went wrong. Please try again later."});
                 else
                 {
                         res.status(200).json(Portfolios);
                 }
             });         
 });

mongoose.Promise=global.Promise;

var options = {
    useMongoClient: true,
    autoIndex: false, 
    reconnectTries: Number.MAX_VALUE, 
    reconnectInterval: 500, 
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
  mongoose.connect(db,options,function(err){
       if(err)
       {
           console.error("Error! "+err);
       }
    });

router.get('/',function(req,res){
    res.send("api Working");
});

router.post('/Login',function(req,res){
     console.log(req.body);
   // if(req.get('auth_key')==null)
    //{
    //    res.status(401).json({error:"API key is missing"});
    //}
    //else 
    if(req.body.userName==null)
    {
        res.status(400).json({success:false,error:"Please provide username"});
    }
    else if(req.body.password==null)
    {
        res.status(400).json({success:false,error:"Please provide password"});
    }
    else
    {
        cRegistration.find({userName:req.body.userName,
        password:req.body.password
        }).exec(function(err,registrations){
            if(err)
            res.status(500).json({success:false,error:"Something went wrong. Please try again later."});
            else
            {
                if(registrations.length>0)
                {
                    //const token = jwt.sign({registrations},auth_key);
                   
                    //res.json({success:true,record:registrations[0]});
              
                    res.json({success:true,record:registrations[0]});
                }
                else
                  res.status(401).json({success:false,error:"Incorrect username or password."});
            }
              
         });
    }
   
});
router.post('/UpdateUserEmail/:id',ensureToken,function(req,res){

   jwt.verify(req.token,auth_key,function(err,data)
   {
       if(err)
           res.status(401).json({error:"Invalid Auth key."}); 
       else
        {
            cRegistration.find({userName:req.params.id
                }).exec(function(err,registrations){
                    if(err)
                    res.status(500).json({error:"Something went wrong. Please try again later."});
                    else
                    {
                        if(registrations.length>0)
                        {
                            //Update Start
                            cRegistration.findByIdAndUpdate(registrations[0]._id,
                                {
                                    $set:{emailAddress:req.body.emailAddress}
                                },
                                {new : true},
                                function(err,updatedRecord)
                                {
                                        if(err)
                                        {
                                            res.status(500).json({error:"Something went wrong. Please try again later."});
                                        }
                                        else
                                        {
                                            res.status(200).json(updatedRecord);
                                        }
                                }
                            );
                            //Update End
                        }
                        else
                          res.status(401).json({error:"Incorrect username"});
                    }                      
                 });
           }
    });
});

router.get('/GetUserEmail/:id',ensureToken,function(req,res){
   
   
    jwt.verify(req.token,auth_key,function(err,data)
    {
       
        if(err)
            res.status(401).json({error:"Invalid Auth key."}); 
        else if(req.params.id==null)
        {
            res.status(400).json({error:"Please provide user name."});
        }
        else
        {
            cRegistration.find({userName:req.params.id
            }).exec(function(err,registrations){
                if(err)
                res.status(500).json({error:"Something went wrong. Please try again later."});
                else
                {
                    if(registrations.length>0)
                    {
                        res.status(200).json({email:registrations[0].emailAddress});
                    }
                    else
                        res.status(401).json({error:"Invalid User name"});
                }
                  
             });
           }
    });
});

router.get('/GetRegisterUsers',function(req,res){  
    
             cRegistration.find({
             }).exec(function(err,registrations){
                 if(err)
                 res.status(500).json({error:"Something went wrong. Please try again later."});
                 else
                 {
                         res.status(200).json(registrations);
                 }
             });         
 });

router.post('/CreateUser',function(req,res)
{
    console.log('Post Data');
    var newUser=new cRegistration();
    newUser.userName=req.body.userName;
    newUser.password=req.body.password;
    newUser.emailAddress=req.body.emailAddress;
    newUser.name=req.body.name;
    newUser.isAdmin='N';
    newUser.save(function(err,insertedUser)
    {
        if(err)
        {
            res.status(500).json({error:"Something went wrong. Please try again later."});
        }
        else
        {
            res.json({error:"Something went wrong. Please try again later."});
        }
    });

    //res.json({message:req.body.userName});
});
//All Reservation Code
router.post('/NewReservation',function(req,res)
{
    console.log('PostReservationn');
    var newReservation=new cReservation();
    newReservation.name=req.body.name;
    newReservation.email=req.body.email;
    newReservation.phone=req.body.phone;
    newReservation.address=req.body.address;
    newReservation.city=req.body.city;
    newReservation.description=req.body.description;
    newReservation.eventType=req.body.eventType;
    newReservation.isCateringService=req.body.isCateringService;
    
    
    newReservation.save(function(err,insertedReservation)
    {
        if(err)
        {
            res.status(500).json({success:true, message:"Something went wrong. Please try again later."});
        }
        else
        {
            res.json({success:true,message:"Thanks"});
        }

    });

});


router.get('/GetAllReservation',function(req,res){
    
    
     
    cReservation.find({
             }).exec(function(err,reservations){
                 if(err)
                 res.status(500).json({error:"Something went wrong. Please try again later."});
                 else
                 {
                         res.status(200).json(reservations);
                 }
                   
              });
          
     
 });

 
function ensureToken(req,res,next)
{
    const headerKey=req.headers["auth_key"];
   
    const tokens = headerKey.split(" ");
    const token  = tokens[0];
    

    req.token = token;
    next();

}
module.exports = router;