var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
var fourGensWattage = 62;
var fourteenGensWattage = 124;

while(currentGen <=4){
  totalMW += 62
	console.log('Generator #' + currentGen + ' is on, adding ' + fourGensWattage + ' MW, for a total of ' + totalMW + ' MW!');
  currentGen++;
}

for(currentGen = 5; currentGen <=19; currentGen++){
  totalMW += 124;
  console.log('Generator #' + currentGen + ' is on, adding ' + fourteenGensWattage + ' MW, for a total of ' + totalMW + ' MW!');
}
