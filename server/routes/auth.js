const router = require('express').Router();
const express = require('express');
const Users = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();


//validation
const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});



router.post('/register', async(req, res) => {

    //validation part
    try{
        const {error} = registerSchema.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
    }catch{}
    //checking user in db
    const emailExist = await Users.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send("Email alredy exists")
    
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt);

    //create user
    const user = new Users({
        username: req.body.username,
        email: req.body.email,
        password: hashpassword
    });

    try {
        const createUser = await user.save()
        res.send({user : createUser.username, userid: createUser._id});
    } catch (err) {
        res.status(400).send(err)
    }
});



//login 

const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});


router.post('/login', async (req, res) => {

    
    //validation part
    
    const {error} = await loginSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

        //checking user email in db
        const user = await Users.findOne({email:req.body.email});
        if(!user) return res.status(404).send("Email not exists");
        
        //password correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send("Invalid Password");

    //create ad asign a token
    const token = jwt.sign({userId : user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;