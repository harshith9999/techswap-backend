var mongoose = require("mongoose");
var validator = require('validator');
var schema = mongoose.Schema;
var userSchema = new schema({
  institute: {
    type: String,
    trim: true,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error('This field is required')
      }
    }
  },
  name: {
    type: String,
    trim: true,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error('This field is required')
      }
    }
  },

  mobile: {
    type: Number,
    // default: null,
    required: true,
    unique: true,
    validate(value) {
      if (value.toString().length != 10) {
        throw new Error('Phone number must be of 10 digits')
      }
    }
  },
  department: {
    type: String,
    trim: true,
    // default: null,
    validate(value) {
      if (!value) {
        throw new Error('This field is required')
      }
    }
  },
  date: {
    type: Date,
    trim: true,
    // default: null,
    validate(value) {
      if (!value) {
        throw new Error('This field is required')
      }
    }
  },
  state: {
    type: String,
    trim: true,
    default: null,
  },
});

// Validating id for Patch and Delete 
userSchema.statics.isValidId = async (id) => {
  const user = await User.findById(id)
  if (!user) {
    throw new Error ('User not found')
  }
  return user
}

//Validating Updates for Update operation
userSchema.statics.isValidUpdates = async (input) => {
  const updates = Object.keys(input)
  const allowedUpdates = ['name', 'institute', 'department', 'date', 'state', 'mobile']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) {
    throw new Error("Invalid Updates")
  }
  return updates

}

const User = mongoose.model("User", userSchema)

module.exports = User
