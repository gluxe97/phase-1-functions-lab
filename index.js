// Code your solution in this file!
function distanceFromHqInBlocks(customerloc){
    return Math.abs(42-customerloc);
}
function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks)*264;
}
function distanceTravelledInFeet(start, stop) {
    const travel = (stop-start);
    return distanceFromHqInFeet(distanceFromHqInBlocks(travel));
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination)>2500) {
        return "cannot travel that far";
    }
    if (distanceTravelledInFeet(start, destination)>2000) {
        return 25;
    }
    if (distanceTravelledInFeet(start, destination)>400) {
        return (distanceTravelledInFeet(start, destination)-400) * .02;
    }
    else {
        return 0
    }
}
