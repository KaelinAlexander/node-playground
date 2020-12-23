const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

// express app

const app = express();

// connect to mongodb

const dbURI = 'mongodb+srv://kaelintest:testerclef@cluster0.m1lko.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine; requires app having been made with express

app.set('view engine', 'ejs')
// app.set('views', 'myviews')

// middleware & static files

app.use(express.static('public'))

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Some Pokemon Content', snippet: 'Pokem ipsum dolor sit amet Zekrom Burmy Mareep Rotom Probopass Amoonguss. Ut enim ad minim veniam Red Hydreigon Feraligatr Rotom Sneasel Shaymin. Normal Butterfree Seel Celadon City Torchic Nidoran Feraligatr. Silver Flaaffy Marill Cherrim Duosion Taillow Staryu. Pallet Town Cryogonal Voltorb Lucario Yellow Drifloon Haxorus.'},
        {title: 'Some other Pokemon Content', snippet: 'Pokem ipsum dolor sit amet Zekrom Burmy Mareep Rotom Probopass Amoonguss. Ut enim ad minim veniam Red Hydreigon Feraligatr Rotom Sneasel Shaymin. Normal Butterfree Seel Celadon City Torchic Nidoran Feraligatr. Silver Flaaffy Marill Cherrim Duosion Taillow Staryu. Pallet Town Cryogonal Voltorb Lucario Yellow Drifloon Haxorus.'},
        {title: 'Yet more Pokemon Content', snippet: 'Pokem ipsum dolor sit amet Zekrom Burmy Mareep Rotom Probopass Amoonguss. Ut enim ad minim veniam Red Hydreigon Feraligatr Rotom Sneasel Shaymin. Normal Butterfree Seel Celadon City Torchic Nidoran Feraligatr. Silver Flaaffy Marill Cherrim Duosion Taillow Staryu. Pallet Town Cryogonal Voltorb Lucario Yellow Drifloon Haxorus.'}
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page!</p>');
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

// 404 page

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})