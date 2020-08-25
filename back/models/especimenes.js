const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const especimenSchema = new Schema(
  {
    codigoEspecimen: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    sistema: { type: String, required: true, unique: false, trim: true },
    anatomia: { type: String, required: true, unique: false, trim: true },
    especie: { type: String, required: true, unique: false, trim: true },
    tecnica: { type: String, required: true, unique: false, trim: true },
    anio: { type: Number, required: true, unique: true },
    autores: { type: String, required: true, unique: false, trim: true },
    descripcion: { type: String, required: true, unique: false, trim: true },
    notas: { type: String, required: true, unique: false, trim: true },
    patologia: { type: String, required: true, unique: false, trim: true },
    fisiologiaCuantitativa: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    objeto: { type: String, required: true, unique: false, trim: true },
  },
  {
    timestamps: true,
  }
);

const Especimen = mongoose.model("especimen", especimenSchema);

module.exports = Especimen;
