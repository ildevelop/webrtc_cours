let express = require('express');
let app = express();
console.log('server started on port 3000');

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    res.render('index.ejs');
});

app.listen(3000)
