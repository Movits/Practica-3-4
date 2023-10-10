import { Perro } from "./Perro.js";
import { Persona } from "./Persona.js";

const Roberto = new Persona();
const Boris = new Perro();

Roberto.setNombre("Roberto");
Boris.setNombre("Boris");

Roberto.darComida(Boris);