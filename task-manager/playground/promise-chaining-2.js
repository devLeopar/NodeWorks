require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete('5f2d3f42b011f658cc19c546').then((task)=>{
    console.log(task)
    return Task.countDocuments({ completed:false })
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})