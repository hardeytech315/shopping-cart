// SELECT ALL BUTTONS
let plusBtns = document.querySelectorAll(".fa-plus-circle");
let minusBtns = document.querySelectorAll(".fa-minus-circle");
let deleteBtns = document.querySelectorAll(".fa-trash-alt");
let likeBtns = document.querySelectorAll(".fa-heart");


// ===========================
// UPDATE TOTAL FUNCTION
// ===========================
function updateTotal() {
  let total = 0;

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let price = parseFloat(
      card.querySelector(".unit-price").innerText
    );

    let quantity = parseInt(
      card.querySelector(".quantity").innerText
    );

    total += price * quantity;
  });

  document.querySelector(".total").innerText = total + " $";
}


// ===========================
// PLUS BUTTON
// ===========================
plusBtns.forEach(btn => {
  btn.addEventListener("click", function () {

    let quantitySpan =
      this.parentElement.querySelector(".quantity");

    let quantity = parseInt(quantitySpan.innerText);
    quantity++;

    quantitySpan.innerText = quantity;

    updateTotal();
  });
});


// ===========================
// MINUS BUTTON
// ===========================
minusBtns.forEach(btn => {
  btn.addEventListener("click", function () {

    let quantitySpan =
      this.parentElement.querySelector(".quantity");

    let quantity = parseInt(quantitySpan.innerText);

    if (quantity > 0) {
      quantity--;
    }

    quantitySpan.innerText = quantity;

    updateTotal();
  });
});


// ===========================
// DELETE ITEM
// ===========================
deleteBtns.forEach(btn => {
  btn.addEventListener("click", function () {

    this.closest(".card").remove();
    updateTotal();
  });
});


// ===========================
// LIKE BUTTON
// ===========================
likeBtns.forEach(btn => {
  btn.addEventListener("click", function () {

    this.classList.toggle("liked");
  });
});


// INITIAL TOTAL
updateTotal();
