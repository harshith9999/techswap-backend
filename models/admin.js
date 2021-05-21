const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config=require('config')

const schema = mongoose.Schema
const adminSchema = new schema({
    username: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!value) {
                throw new Error('username is required')
            }
        }


    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')

            }
        }

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error('Password should not be guessable')

            }
        }

    },
    mobile: {
        type: Number,
        unique: true,
        validate(value) {
            if (value.toString().length != 10) {
                throw new Error('Phone number must be of 10 digits')
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

// Generating JSON Webtokens
adminSchema.methods.generateAuthToken = async function () {
    const admin = this
    const token = jwt.sign({
        username: admin.username,
        email: admin.email,
        mobile: admin.mobile

    }, config.get('secret'))
    admin.tokens=admin.tokens.concat({token})
    await admin.save()
    return token

}

//Login request
adminSchema.statics.findByCredentials = async (username, password) => {
    const admin = await Admin.findOne({ username })
        if (!admin) {
            throw new Error ("Invalid Login Credentials")
        }
        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            throw new Error ("Invalid Login Credentials")
        }
        return admin
    

}


//Hashing the password

adminSchema.pre('save', async function (next) {
    const admin = this

    if (admin.isModified('password')) {
        admin.password = await bcrypt.hash(admin.password, 8)
        console.log(admin.password)

    }

    next()


})


const Admin=mongoose.model("Admin", adminSchema)
module.exports = Admin