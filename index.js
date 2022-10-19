const axios = require("axios");

let urlCompleted =
    "https://api.openweathermap.org/data/2.5/weather?q=Bogota, col&appid=8e6330a78aa20b41b54f3fcaa3e9994f";

let requestConfig = {
    url: urlCompleted,
};

let objPromesa = axios(requestConfig);

objPromesa
    .then((result) => {
        console.log(
            "La temperatura en Bogota es: " +
                (result.data.main.temp - 273.15) +
                " Grados celcius"
        );
    })
    .catch((err) => {
        console.log(err);
    });
