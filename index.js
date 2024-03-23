// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const headquartersStreet = 42;
    return Math.abs(street - headquartersStreet);
}



function distanceFromHqInFeet(street) {
    const blockInFeet = 264; 
    const headquartersStreet = 42;
    return Math.abs(street - headquartersStreet) * blockInFeet;
}

function distanceTravelledInFeet(start, end) {
    const blockInFeet = 264; 
    return Math.abs(start - end) * blockInFeet;
}

function calculatesFarePrice(start, destination) {
    const blockInFeet = 264; 
    const first400FeetFree = 400;
    const baseFare = 0;
    const farePerFootAfter400Feet = 0.02; 
    const maxDistance = 2500;
    const fareOver2000Feet = 25;


    const distance = Math.abs(start - destination) * blockInFeet;


    if (distance <= first400FeetFree) {

        return baseFare;
    } else if (distance <= 2000) {
        return (distance - first400FeetFree) * farePerFootAfter400Feet;
    } else if (distance > 2000 && distance <= maxDistance) {
        return fareOver2000Feet;
    } else {
        return 'cannot travel that far';
    }
}
