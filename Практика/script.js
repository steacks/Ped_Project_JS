let cars = [];

function addCar(carName) {

    cars.push(carName);

}

function removeCar(carName) {

    const index = cars.indexOf(carName);

    if (index !== -1) {

        cars.splice(index, 1);

    }

}

function showCars() {

    document.write('<p>Список машин: ' + cars.join(',') + '</p>')

}

function findCar(carName) {

    return cars.includes(carName);

}

function countCars() {

    return cars.length;

}

function clearCars() {

    cars.length = 0;

}

function updateCar(oldName, newName) {

    const index = cars.indexOf(oldName);
    if (index !== -1) {

        cars[index] = newName;

    }

}

addCar('Toyota');
addCar('Honda');
showCars();
removeCar('Toyota');
showCars();
document.write('<p>Машина Honda в списке: ' + findCar('Honda') + '</p>');
document.write('<p>Количество машин в списке: ' + countCars() + '</p>')
clearCars();
document.write('<p>Список машин очищен</p>')
showCars();