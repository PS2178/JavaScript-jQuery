function Hotel(name, rooms, booked){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function(){
    return this.rooms - this.booked;
  };
};

// Create two hotel objects using the new keyword
var cooperHotel = new Hotel('CooperSquare', 798, 654);
var spencerHotel = new Hotel('SpencerCircle', 68, 30);

// Create a details string to display hotel rooms available
var details1 = `${cooperHotel.name} has ${cooperHotel.checkAvailability()} rooms available`;

var details2 = `${spencerHotel.name} has ${spencerHotel.checkAvailability()} rooms available`;

// Display the values to the page
var elName = document.getElementById('info');
elName.textContent = `${details1} and ${details2}`;