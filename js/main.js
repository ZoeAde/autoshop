var Car = function(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = 'off';
  this.color = color;
  this.previous_owner = [];
  this.current_owner = 'manufacturer';
  this.passengers = [];
};

Car.prototype.sale = function(current_owner, previous_owner) {
  this.current_owner = current_owner;
  this.previous_owner.push(previous_owner);
};

Car.prototype.paint = function(color) {
  this.color = color;
};

Car.prototype.start = function() {
  this.state = 'on';
};

Car.prototype.off = function() {
  this.state = 'off';
};

Car.prototype.driveTo = function(destination) {
  switch (this.state) {
    case 'on':
      return 'Driving to ' + destination;
    case 'off':
      return 'Sorry, this car is off.';
  }
};

Car.prototype.park = function() {
  switch (this.state) {
    case 'off':
      return 'Parked!';
    case 'on':
      return 'Sorry, the car is still on';
  }
};

Car.prototype.pickUp = function(name) {
  switch (this.state) {
    case 'on':
      this.passengers.push(name);
      return 'Driving to pick up ' + name;
    case 'off':
      return 'Please turn on the car first!';
  }
};

Car.prototype.dropOff = function(name) {
  switch (this.state) {
    case 'on':
      this.passengers.splice(name, 1);
      break;
    case 'off':
      return 'Please turn on the car first!';
  }
};



