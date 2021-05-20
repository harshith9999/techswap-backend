var express = require("express");
var router = express.Router();
var Admin = require("../models/admin");
var User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth=require('../middleware/auth')


//Admin Register(Just for initial testing)
router.post('/', async (req, res) => {
    try {
        const admin = new Admin(req.body)
        await admin.save()
        // const token=await admin.generateAuthToken()
        const token = jwt.sign({
            username: admin.username,
            email: admin.email,
            mobile: admin.mobile

        }, 'techswapproject')
        admin.tokens = admin.tokens.concat({ token })
        await admin.save()
        res.send({ admin, token })

    } catch (e) {
        res.status(404).send(e)
    }
})
//Admin Access
router.post('/login', async (req, res) => {
    try {
        const username = req.body.username
        const admin = await Admin.findOne({ username })
        if (!admin) {
            res.send("Invalid Login Credentials")
        }
        const isMatch = await bcrypt.compare(req.body.password, admin.password)
        if (!isMatch) {
            res.send("Invalid Login Credentials")
        }

        const token = jwt.sign({
            username: admin.username,
            email: admin.email,
            mobile: admin.mobile

        }, 'techswapproject')
        admin.tokens = admin.tokens.concat({ token })
        await admin.save()
        res.send({ admin, token })
    }
    // try{
    //     const admin=await Admin.findByCredentials(req.body.username,req.body.password)
    //     const token=await admin.generateAuthToken()
    //     res.send(admin)
    // }
    catch (e) {
        res.status(400).send()
    }

})

//Admin logging out


//Admin listing all users
router.get('/users', auth,async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)


    } catch (e) {
        res.status(404).send(e)
    }
})

//Admin updating users

router.patch('/:id',auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'institute', 'department', 'date', 'state', 'mobile']
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    )
    if (!isValidOperation) {
        res.status(404).send('Invalid updates')
    }
    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) =>
            user[update] = req.body[update]
        )

        await user.save()
        res.send(user)

    }
    catch (e) {
        res.status(400).send(e)
    }


})

//Admin deleting users
router.delete('/:id',auth, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        res.send(user)
    }
    catch (e) {
        res.status(400).send(e)
    }



})

module.exports = router