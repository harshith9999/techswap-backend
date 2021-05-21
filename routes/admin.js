var express = require("express");
var router = express.Router();
var Admin = require("../models/admin");
var User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth');
const { findByIdAndDelete } = require("../models/admin");


//Admin Register(Just for initial testing)
router.post('/', async (req, res) => {
    try {
        const admin = new Admin(req.body)
        await admin.save()
        const token = await admin.generateAuthToken()
        res.status(201).send({ admin, token })

    } catch (e) {
        res.status(404).send(e.message)
    }
})
//Admin Access
router.post('/login', async (req, res) => {
    try {
        const admin = await Admin.findByCredentials(req.body.username, req.body.password)
        const token = await admin.generateAuthToken()
        res.send({ admin, token })
    }
    catch (e) {
        res.status(400).send({"error": e.message})
    }

})

//Admin logging out
router.post('/logout', auth, async (req, res) => {
    try {
        console.log(req.admin)
        req.admin.tokens = req.admin.tokens.filter((token) => token.token !== req.token)
        console.log(req.admin)
        await req.admin.save()
        res.send()
    } catch (e) {
        console.log(e.message)

    }
})


//Admin listing all users
router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)


    } catch (e) {
        res.status(404).send(e.message)
    }
})

//Admin updating users

router.patch('/:id', auth, async (req, res) => {
    const user = await User.isValidId(req.params.id)
    const updates = await User.isValidUpdates(req.body)
    try {
        updates.forEach((update) =>
            user[update] = req.body[update]
        )

        await user.save()
        res.send(user)

    }
    catch (e) {
        res.status(400).send(e.message)
    }


})

//Admin deleting users
router.delete('/:id', auth, async (req, res) => {
    const user = await User.isValidId(req.params.id)
    try {
        const user_deleted = await User.findByIdAndDelete(user._id)

        res.send(user_deleted)
    }
    catch (e) {
        res.status(400).send(e.message)
    }



})

module.exports = router