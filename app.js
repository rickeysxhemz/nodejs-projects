var express=require('express')
var app=express();
app.get('/',function(req,res){
res.send('hello,world');
});
app.listen(3000,function(req,res){
	console.log('appp is listening at port 3000')});
