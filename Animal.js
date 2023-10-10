export class Animal {
    #nombre = "def nombre";
    #hambre = false;
    #hambreValor = 0;

    constructor(){
        this.#hambreValor = this.getRandomInt(100)
        this.tieneHambre(this);
        console.clear();

        setInterval(() => {
            this.#hambreValor--;
            console.log(this.#hambreValor);
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

        if (this.#hambreValor <= 30) {
            console.log("au au, humano quiero comida");
            this.setHambre(true);

        } else if (this.#hambreValor > 30 && this.#hambreValor < 60) {
            console.log("au au, en un rato tengo hambre");
            this.setHambre(false);

        } else {
            console.log("au au, estoy lleno");
            this.setHambre(false);
        }
    }

    alimentarseCon() {
        this.#hambreValor += 50;
    }
}