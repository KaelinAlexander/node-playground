const express = require('express')

// express app

const app = express();

// register view engine; requires app having been made with express

app.set('view engine', 'ejs')
// app.set('views', 'myviews')

// listen for requests

app.listen(3000)

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