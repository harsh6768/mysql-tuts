const express=require('express');
const bodyParser=require('body-parser');

const app=express();
const routes=require('./routes/main-routes');


const PORT=process.env.PORT||8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',routes);

app.listen(PORT,()=>console.log(`Server is up and running on port ${PORT}`));
