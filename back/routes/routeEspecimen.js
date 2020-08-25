const express = require("express");
const router = express.Router();

// Especimen Model
const Especimen = require("../models/especimenes");

// GET all Especimen
router.get("/", async (req, res) => {
  const especimen = await Especimen.find().catch((err) =>
    res.status(400).json("Error: " + err)
  );
  console.log("<--- GET ALL --->");
  console.log(especimen);
  res.json(especimen);
});

// GET by ID
router.get("/:id", async (req, res) => {
  const especimen = await Especimen.findById(req.params.id).catch((err) =>
    res.status(400).json("Error: " + err)
  );
  console.log("<--- GET by ID --->");
  console.log(especimen);
  res.json(especimen);
});

// GET by sistema
router.get("/sistema/:id", async (req, res) => {
  const especimen = await Especimen.find({
    sistema: req.params.id,
  }).catch((err) => res.status(400).json("Error: " + err));
  console.log("<--- GET by Sistema --->");
  console.log(especimen);
  res.json(especimen);
});

// ADD a new Especimen
router.post("/", async (req, res) => {
  console.log(req.body);

  const {
    codigoEspecimen,
    sistema,
    anatomia,
    especie,
    tecnica,
    anio,
    autores,
    descripcion,
    notas,
    patologia,
    fisiologiaCuantitativa,
    objeto,
  } = req.body;
  const especimen = new Especimen({
    codigoEspecimen,
    sistema,
    anatomia,
    especie,
    tecnica,
    anio,
    autores,
    descripcion,
    notas,
    patologia,
    fisiologiaCuantitativa,
    objeto,
  });
  await especimen.save().catch((err) => console.log(err));
  res.json({ status: "Especimen Saved" });
});

// UPDATE a new Especimen
router.put("/:id", async (req, res) => {
  const {
    codigoEspecimen,
    anatomia,
    especie,
    tecnica,
    anio,
    autores,
    descripcion,
    notas,
    patologias,
    fisiologiaCuantitativa,
  } = req.body;
  const newEspecimen = {
    codigoEspecimen,
    anatomia,
    especie,
    tecnica,
    anio,
    autores,
    descripcion,
    notas,
    patologias,
    fisiologiaCuantitativa,
  };
  await Especimen.findByIdAndUpdate(req.params.id, newEspecimen).catch((err) =>
    res.status(400).json("Error: " + err)
  );
  res.json({ status: "Especimen Updated" });
});

router.delete("/:id", async (req, res) => {
  await Especimen.findByIdAndRemove(req.params.id).catch((err) =>
    res.status(400).json("Error: " + err)
  );
  res.json({ status: "Especimen Deleted" });
});

module.exports = router;
