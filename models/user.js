var mongoose = require("mongoose");
var validator=require('validator');
var schema = mongoose.Schema;
var UserSchema = new schema({
  institute: {
    type: String,
    trim: true,
    required:true,
    validate(value){
      if(!value){
        throw new Error('This field is required')
      }
    }
  },
  name: {
    type: String,
    trim: true,
    required:true,
    validate(value){
      if(!value){
        throw new Error('This field is required')
      }
    }
  },

  mobile: {
    type: Number,
    // default: null,
    required: true,
    unique: true,
    validate(value){
      if(value.toString().length != 10){
        throw new Error('Phone number must be of 10 digits')
      }
    }
  },
  department: {
    type: String,
    trim: true,
    // default: null,
    validate(value){
      if(!value){
        throw new Error('This field is required')
      }
    }
  },
  date: {
    type: Date,
    trim: true,
    // default: null,
    validate(value){
      if(!value){
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
module.exports = mongoose.model("User", UserSchema);
