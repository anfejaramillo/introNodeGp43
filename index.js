const axios = require("axios");

let urlCompleted =
    "https://api.openweathermap.org/data/2.5/weather?q=Bogota, col&appid=8e6330a78aa20b41b54f3fcaa3e9994f";

let url2 = "https://catfact.ninja/fact";

let requestConfig = {
    url: urlCompleted,
};

let requestConfig2 = {
    url: url2,
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

let requestPromise2 = axios(requestConfig2);

requestPromise2
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (err) {
        console.log(err);
    });
