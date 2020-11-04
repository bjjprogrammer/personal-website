const express =require('express'),
      app = express(),
      hbs = require('hbs'),
      port = process.env.PORT || 3000;
const data = require('./db/data.json');


//Config middleware
app.use( express.static( __dirname + '/public' ) )

//Config hbs
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');


app
    .get('/', (req, res) => {
        res.render('home', { 
            language : data.language[0], 
            frameworks :data.FrameWorks[0],
            db : data.DB[0],
            exp: data.exp[0]
        });
    })
    .listen(port, () => {
        console.log(`Server on port ${port}`);
    })