// Destructure the properties from the 'car'
// object below and then log all of them

const car = {
  manufacturer: 'Nissan',
  model: 'Skyline GT-R',
  country: 'Japan',
  coupe: true,
};


const {manufacturer, model, country, coupe} = car;

const carDetails = `This is the car you will buy: ${manufacturer}, ${model}, from ${country}, coupe: ${coupe}`;
console.log(carDetails);
