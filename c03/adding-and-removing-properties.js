var hotel = {
  name: 'Park',
  rooms: 120,
  booked: 77,
};

// Add a property to an object, and assign it an initial vaklue
hotel.gym = true;
hotel.pool = false;
console.log(hotel);

// Delete a property from an object
delete hotel.booked;
console.log(hotel);

// Display some info to the client
var elName = document.getElementById('hotelName');
elName.textContent = `Hotel: ${hotel.name}`;

var elPool = document.getElementById('pool');
elPool.textContent = `Pool: ${hotel.pool}`;

var elGym = document.getElementById('gym');
elGym.textContent = `Gym: ${hotel.gym}`;

// If an object is created using a constructor function,
// this syntax only adds or removes the properties from one
// instance of the object (not all objects created with that function)

// CREATE THE OBJECT, THEN ADD PROPERTIES & METHODS
// CREATING AN OBJECT WITH PROPERTIES & METHODS