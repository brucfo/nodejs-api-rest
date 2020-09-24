var app = require('./config/custom-express')()

app.listen(3000, function () {
    console.log('The server has been running on port 3000')
});
