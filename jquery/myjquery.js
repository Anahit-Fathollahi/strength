const strength = (args) => {
  let step = 0;
  while (args >= 10) {
    const digits = args.toString().split("").map(Number);
    args = digits.reduce((acc, curr) => acc * curr);
    step += 1;
  }
  return step;
};

var showResult = () => {
  var inputValue = document.getElementById("inputNumber").value;
  var stepResult = strength(inputValue);
  document.getElementById("step").innerHTML = stepResult;
};

$(document).ready(function (event) {
  $("#inputNumber").focus();
  $("#inputNumber").keypress(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      $("#Ok-btn").click();
    }
  });
});
