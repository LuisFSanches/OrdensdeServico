const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicles");

//ALL VEHICULES
router.get("/vehicles", async (req, res) => {
  let searchOptions = {};
  if (req.query.serie != null && req.query.serie !== "") {
    searchOptions.serie = req.query.serie;
  }
  try {
    const vehicles = await Vehicle.find(searchOptions);
    res.render("vehicles/index", {
      vehicles: vehicles,
      searchOptions: req.query
    });
  } catch {
    res.redirect("/vehicles", {
      vehicles: vehicles,
      errorMessage: "Veiculo Não Encontrado"
    });
  }
});

//ADD A  NEW VEHICULE
router.get("/vehicles/new", (req, res) => {
  res.render("vehicles/new", { vehicle: new Vehicle() });
});

// CREATE A NEW VEHICLE
router.post("/vehicles", async (req, res) => {
  const vehicle = new Vehicle({
    name: req.body.name,
    serie: req.body.serie,
    prefixo: req.body.prefixo
  });
  try {
    const newVechicle = await vehicle.save();
    res.redirect("vehicles");
  } catch {
    res.render("vehicles/new", {
      vehicle: vehicle,
      errorMessage: "Erro ao salvar veículo"
    });
  }
});

module.exports = router;
