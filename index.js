// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock) {
  let distFromHQ = Math.abs(42 - pickupBlock);
  return distFromHQ;
}

function distanceFromHqInFeet(pickupBlock) {
  let result = distanceFromHqInBlocks(pickupBlock);
  return result * 264;
}

function distanceTravelledInFeet(start, destination) {
  let distTraveled = Math.abs(start - destination);
  return distTraveled * 264;
}

function calculatesFarePrice(start, destination) {
  let dist = distanceTravelledInFeet(start, destination);
  if (dist < 400) {
    return 0;
  } else if (dist >= 400 && dist < 2000) {
    return (dist - 400) * .02;
  } else if (dist >= 2000 && dist < 2500) {
    return 25;
  } else if (dist >= 2500) {
    return 'cannot travel that far';
  }
}