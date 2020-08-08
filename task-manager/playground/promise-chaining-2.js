require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete('5f2d3f42b011f658cc19c546').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({ completed:false })
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount("5f2d3efd091d9c1038e40215").then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e)
})