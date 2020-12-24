const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog');
const { render } = require('ejs');

// express app

const app = express();

// connect to mongodb

const dbURI = 'mongodb+srv://kaelintest:testerclef@cluster0.m1lko.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine; requires app having been made with express

app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog',
        snippet: 'About my new blog...',
        body: 'More about my new blog'
    });
    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('5fe3844591f588056dc9c20a')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    // res.send('<p>about page!</p>');
    res.render('about', { title: 'About' });
});

// blog routes

app.get('/blogs', (req, res) => {
    Blog.find().sort( { createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', { title: 'Blog Details', blog: result}) 
    })
    .catch((err) => {
        console.log(err);
    })
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blogs' })
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

// 404 page

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})