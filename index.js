const express = require(`express`)
const logger =require(`./middleware/logger`);
const route= require(`./routes/authorRoute`)

const app=express()
const port= 4000;

app.use(logger);
app.use(express.json());
app.use(`/authors`, route);


app.listen(port,()=>{
    console.log(`server has started on port: ${port}`)
})