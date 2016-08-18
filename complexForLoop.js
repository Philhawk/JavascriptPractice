var totalGen = 19;
var totalMW = 0;
var fourGensWattage = 62;
var fourteenGenWattage = 124;
var currentGen = 1

for(currentGen; currentGen <= totalGen ; currentGen++){
  if(currentGen % 2 != 0){
    console.log('Generator #' + currentGen + ' is off.');
  } else if(currentGen < 5) {
    totalMW += 62;
		console.log('Generator #' + currentGen + ' is on, adding ' + fourGensWattage + ' MW, for a total of ' + totalMW + ' MW!');
	} else {
	  totalMW += 124;
		console.log('Generator #' + currentGen + ' is on, adding ' + fourteenGenWattage + ' MW, for a total of ' + totalMW + ' MW!');
  }
}
