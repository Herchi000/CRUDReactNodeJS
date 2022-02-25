import express from 'express';
import path from 'path';
import users from '../routes/routes.js';
const app = express();

app.set('title', 'CRUD APP con React y NodeJS');
app.set('port', 8000);



app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/users', users);

app.listen(app.get('port'), () => {
    console.log('La ' + app.get('title') + ' esta corriendo en el puerto ' + app.get('port'));
});