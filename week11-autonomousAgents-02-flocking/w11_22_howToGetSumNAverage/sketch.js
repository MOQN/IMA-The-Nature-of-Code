var numbers = [1, 2, 3, 4, 5, 10, 15, 20, 34, 50, 32];


function setup() {
  var sum = 0;
  var count = 0;
  var avg = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      sum += numbers[i];
      count++;
    }
  }
  if (count > 0) {
    avg = sum / count;
  }

  print(sum + "   " + avg);
}