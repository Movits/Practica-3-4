export class Perro {
    #nombre = "def nombre";
    #hambre = false;
    #hambrePerro = 0;

    constructor(){
        this.#hambrePerro = this.getRandomInt(100)
        console.log(this.#hambrePerro);
        this.tieneHambre(this);

        setInterval(() => {
            this.#hambrePerro--;
            console.log(this.#hambrePerro);
            this.tieneHambre();
        }, 1000);
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setHambre(hambre) {
        this.#hambre = hambre;
    }
    getHambre() {
        return this.#hambre;
    }
    
    tieneHambre() {
        
        /* console.clear(); */

        if (this.#hambrePerro <= 30) {
            console.log("au au, humano quiero comida");
            this.setHambre(true);

        } else if (this.#hambrePerro > 30 && this.#hambrePerro < 60) {
            console.log("au au, en un rato tengo hambre");
            this.setHambre(false);

        } else {
            console.log("au au, estoy lleno");
            this.setHambre(false);
        }
    }

    alimentarseCon() {
        this.#hambrePerro += 50;
    }
}