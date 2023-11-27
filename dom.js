let plusBtns = document.getElementsByClassName("plus-btn");
let minusBtns = document.getElementsByClassName("minus-btn");
let heartBtns = document.getElementsByClassName("fa-heart");
let trarshBtns = document.getElementsByClassName("fa-trash");
console.log(plusBtns);
function total() {
  let qtites = document.getElementsByClassName("qte");
  let prices = document.getElementsByClassName("unti-price");
  let total = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < qtites.length; i++) {
    sum = sum + Number(qtites[i].textContent) * Number(prices[i].textContent);
  }
  total.textContent = sum;
}
for (const btn of plusBtns) {
  btn.addEventListener("click", function () {
    btn.nextElementSibling.textContent++;
    total();
  });
}

for (const btn of minusBtns) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.textContent > 0) {
      btn.previousElementSibling.textContent--;
      total();
    }
  });
}
for (const heart of heartBtns) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("liked");
  });
}

for (const trash of trarshBtns) {
  trash.addEventListener("click", function () {
    trash.parentElement.parentElement.remove();
    total();
  });
}
