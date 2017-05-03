var numbers = [];


function setup() {
  var count = 0;
  var sum = 0;
  for (var i = 0; i < 5; i++) {
    numbers[i] = floor(random(10));
    print(numbers[i]);
    sum = sum + numbers[i];
    count++;
  }
  var avg = sum/count;
  print("avg: " + avg);
}