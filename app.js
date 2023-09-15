const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use (express.static(/public/styles.css));

app.listen(PORT,()=>{
    console.log('server is running',PORT);
});

app.get('/', (req, res)=>{
    res.render('index', {text:})
})

let tasks = [];

app.post('/addTask', (req, res)=> {
    const newTask = req.body.task;
    tasks.push({id: Date.now(), text: newTask});
    res.redirect('/');
    console.log(tasks);
    

});

app.get('/edit/:is', (req, res) =>{
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    res,render('edit', {task});
});

app.post('/edit/:is', (req, res) =>{
    const taskId = parseInt(req.params.id);
    const updatedText = req.body.task;
    const task = tasks.find(task => task.id === taskId);
    if(task) {
        task.text = updatedText;
    }
    res.redirect('/');
});
