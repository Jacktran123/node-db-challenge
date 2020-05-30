const server=require('./server');
const PORT= process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`The app is up and running on ${PORT}`);
});


