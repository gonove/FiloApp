const app = require("../config/server");

module.exports = app => {
    app.get( '/', ( req, res ) => {
        res.send('Hola Mundo <3')
    });
}