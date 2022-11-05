const editQuantity = (state) => {
  var quantEl = document.getElementById("quantity-display");
  var quant = parseInt(quantEl.innerHTML);

  if (state === "-") {
    quant--;
    if (quant === 0) quant = 1;
    quantEl.innerHTML = quant;
  } else if (state === "+") {
    quant++;
    if (quant === 11) quant = 10;
    quantEl.innerHTML = quant;
  }
};
