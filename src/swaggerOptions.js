const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Very cool App",
            version: "0.0.1",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
    },
    apis: ["./src/routes/rapidapi.js"],
};

module.exports = swaggerOptions;
