import * as express from "express";
const app = express();
const port = process.env.PORT || 1234;

app.get("/hola",(req, res)=> {
    res.json({
        message: "Hola soy el servidor",
    });
});

app.listen(port, ()=> {
    console.log("Hola soy express y estoy corriendo en el puerto " + port);
});