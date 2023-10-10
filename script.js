import { Perro } from "./perro.js";
import { Persona } from "./persona.js";

const Roberto = new Persona();
const Boris = new Perro();

Roberto.setNombre("Roberto");
Boris.setNombre("Boris");

Roberto.darComida(Boris);