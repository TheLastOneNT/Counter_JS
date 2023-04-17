let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  if (count < 0) {
    count = 0;
    alert("Минимальное число - 0!");
  }
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  if (count > 15) {
    count = 15;
    alert("Максимальное число - 15!");
  }
  document.getElementById("countLabel").innerHTML = count;
};
