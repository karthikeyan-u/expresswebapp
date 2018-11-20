let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.set('view engine','ejs');
app.set(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.render('main');
});

app.get('/members',function(req,res){
    res.render('members');
});

app.get('/members/:profile_id',function(req,res){
    let name = req.params.profile_id;
    res.render('profile',{name: name});
});

app.listen(3000,function(){
    console.log('Server Started');
});