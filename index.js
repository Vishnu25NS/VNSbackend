const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const { MongoClient } = require('mongodb');

async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://anshif:nesRoWgW5SqAD0yF@cluster0.8dtglzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('test');
   ;
 }

 app.get('/user', async function (req, res) {
    let output = await db.collection('user').find({ "userName": "human"}).toArray();
    res.json(output);
});
 


app.post('/calculate',function(req,res){
    let num1=req.body.num1;
    let num2=req.body.num2;
    let operator=req.body.operator;
    let result;
    let username;
    if( operator == '+') {
        result=num1+num2;
    } else if(operator == '-') {
        result=num1-num2
    }else if(operator == '*') {
        result=num1*num2
    }else if(operator == '/') {
        result=num1/num2
    }
    res.json(result);
});

app.post('/register',function(req,res){
    let name=req.body.name;
    let status;
    let i;
    if(name != NULL)
    {
        for(i=0;i<100;i++)
        {
        username.push(name)
        status=1;
        }
    }
res.json(status);
});
app.listen(3500,function(){
    mongoConnect();
    console.log('server ready')
})
