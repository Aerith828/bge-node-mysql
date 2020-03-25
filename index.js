const express = require();

const app = express();

app.listen(3000, () => {
    console.log("Server started !");
});

app.get("/", (req, res) => {
    res.send({
        id:1,
        email:"marieleisie69@gmail.com",
        firstname: "Jean",
        lastname: "Dupont",
        birthdate: new Date(1996, 4, 23)
    });
});