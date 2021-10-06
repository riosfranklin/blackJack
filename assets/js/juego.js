let desk = [];
let cartas = ['C', 'D', 'H', 'S'];
let cartasEspeciales = ['A', 'J', 'Q', 'K'];

const crearDesk = () => {
    for (let i = 2; i <= 10; i++) {
        for (let carta of cartas) {
            desk.push(i + carta);
        }
    }
    for (let carta of cartas) {
        for (let especiales of cartasEspeciales) {
            desk.push(especiales + carta);
        }
    }
    console.log(desk);

    desk = _.shuffle(desk);
    console.log(desk);
}

crearDesk();