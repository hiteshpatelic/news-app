const express = require('express');
const router = require('express').Router();
const Users = require('../models/UserModel');

// * get all user
router.get('/', async (req, res) => {
    try {
        const posts = await Users.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});



// * submit   create user
router.post('/', async (req, res) => {
    const user = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const createUser = await user.save()
        res.json(createUser);
    } catch (err) {
        res.json({ message: err })
    }
});

// * specificpost
router.get('/:postid', async (req, res) => {
    try {
        const user = await Users.findById(req.params.postid);
        res.json(user)
    } catch (err) {
        res.json({ message: err })
    }
});

//delete Post
router.delete('/:postid', async (req, res) => {
    try {
        const removedUser = await Users.remove({ email: req.params.postid })
        res.json(removedUser)
    } catch (err) {
        res.json({ message: err })
    }
});

//Update a  post

router.patch('/:postid', async (req, res) => {
    try {
        const updateUser = Users.updateOne({ email: req.params.postid }, { $set: { title: req.body.title } })
        res.json(updateUser)
    } catch (err) {
        res.json({ message: err })
    }
})


module.exports = router;