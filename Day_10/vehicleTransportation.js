/*const vehicles = [
  { type: 'cycle', weightCapacity: 1},
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: 'tempo', weightCapacity: 100 }
];
const parcels = [
  { location: 'velachery', weight: 30 },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 240 }
];
a. Calculate the minimum number of vehicles required to deliver the parcel for each location
b. Make the most of the weight that each vehicle can carry. There shouldn't be any wasted space in the vehicle
For example:
To deliver to velachery, we will require one auto and two bike (20 + 5(bike) + 5(bike)) = 30
We can deliver this in two auto (20 + 20) but 10 kg will be wasted in space
The logic is to find the minimum number of vehicles required to deliver the parcel without wasting space in vehicle
*/

const vehicles = [
  { type: 'cycle', weightCapacity: 1 },
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: 'tempo', weightCapacity: 100 }
];
const parcels = [
  { location: 'velachery', weight: 30 },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 240 }
];
function vehicleTransportationCapacity(parcels, vehicles) {
  parcels.forEach(parcel => {
    if (parcel.location === 'velachery') {
      for (let i = 0; i < vehicles.length; i++) {
        for (let j = i + 1; j < vehicles.length; j++) {
          if (vehicles[i].weightCapacity + vehicles[j].weightCapacity === parcel.weight) {
            console.log(`Pair found: [${vehicles[i].type}] + [${vehicles[j].type}] = ${parcel.weight}`);
          }
        }
      }
    }
    if (parcel.location === 'madipakkam') {
      for (let i = 0; i < vehicles.length; i++) {
        for (let j = i + 1; j < vehicles.length; j++) {
          if (vehicles[i].weightCapacity + vehicles[j].weightCapacity === parcel.weight) {
            console.log(`Pair found: [${vehicles[i].type}] + [${vehicles[j].type}] = ${parcel.weight}`);
          }
        }
      }
    }
    if (parcel.location === 'sholinganallur') {
      for (let i = 0; i < vehicles.length; i++) {
        for (let j = i + 1; j < vehicles.length; j++) {
          if (vehicles[i].weightCapacity + vehicles[j].weightCapacity === parcel.weight) {
            console.log(`Pair found: [${vehicles[i].type}] + [${vehicles[j].type}] = ${parcel.weight}`);
          }
        }
      }
    }
  });
}
vehicleTransportationCapacity(parcels, vehicles);