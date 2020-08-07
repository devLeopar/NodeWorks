const mongoose = require("mongoose");
const validator = require('validator');

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    validate(value) {
      if (value.includes('password')) {
        throw new Error('Password value can not contain keyword "password"')
      }
    }
  }
});

// const me = new User({
//   name: '    james    ',
//   email: 'pustingenstraize@habiredebire.com',
//   age: 32,
//   password: 'blablahabiredebireng'
// });

// me.save().then((me) => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error! ', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim:true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const routine = new Task({
    description:'     Eat lunch'
})

routine.save().then((task)=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})