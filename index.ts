import * as express from "express";
const app = express();
const port = process.env.PORT || 1234;
// Para futuros usos
// const dev = process.env.NODE_ENV == "development";

console.log(process.env.NODE_ENV)
console.log(process.env.DB_HOST)

app.get("/env",(req, res)=> {
    res.json({
        environment: process.env.NODE_ENV,
    });
});

app.get("/hola",(req, res)=> {
    res.json({
        message: "Hola soy el servidor, heroku",
    });
});

app.listen(port, ()=> {
    console.log("Hola soy express y estoy corriendo en el puerto " + port);
});