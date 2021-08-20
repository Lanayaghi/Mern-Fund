const PirateControllers = require("../controllers/pirate.controller");


module.exports = app => {
    app.get("/api/pirates", PirateControllers.getAllPirates);
    app.post("/api/pirate/new", PirateControllers.createPirate);
    app.get("/api/pirate/:id", PirateControllers.getPirate);
    app.delete("/api/pirates/:id", PirateControllers.deletePirate);
}