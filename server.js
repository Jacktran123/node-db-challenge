const express=require('express');
const helmet=require('helmet');
const morgan=require('morgan');
const db=require('./knex-config.js');

const server=express();

server.use(express.json());
server.use(helmet());
server.use(morgan());

server.get('/resources', (req,res)=>{
    db('Resources')
    .then(re=> res.status(200).json(re))
    .catch(err=> res.status(500).json({error: 'Internal Service Error'}))
});

server.post('/resources',(req,res)=>{
    const newResource= req.body

    db('Resources').insert(newResource)
    .then(id=> res.status(201).json(`Successfully add a new resource, here is the id : ${id}`))
    .catch(err=> res.status(500).json(`Internal Service Error`))
})


server.get('/projects', (req,res)=>{
    db('Projects')
    .then(pro=> res.status(200).json(pro))
    .catch(err=> res.status(500).json(err))
});

server.post('/projects',(req,res)=>{
    const newProject= req.body

    db('Projects').insert(newProject)
    .then(id=> res.status(201).json(`Successfully add a new project, here is the id : ${id}`))
    .catch(err=> res.status(500).json(`Internal Service Error`))
})

server.get('/tasks', (req,res)=>{
    db("Projects")
    .select('Project_Name','Projects.Description','Task')
    .join('Task as T', 'T.Project_Id','id')
    .then(task=> res.status(200).json(task))
    .catch(err=> res.status(500).json(err))
})

server.post('/tasks',(req,res)=>{
    const newTask= req.body

    db('Task').insert(newTask)
    .then(id=> res.status(201).json(`Successfully add a new task, here is the id : ${id}`))
    .catch(err=> res.status(500).json(`Internal Service Error`))
})





module.exports=server;