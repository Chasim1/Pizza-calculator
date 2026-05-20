const TAX_RATE = 0.875; // 8.875% tax

// Get HTML DOM elements
//element with id pizzaSize
var pizzaSize = document.getElementById("pizzaSize");
//element with id quantity
var quanity = document.getElementById("quantity");
//element with id subtotal
var subtotal = document.getElementById("subtotal");
//element with id tax
var tax = document.getElementById("tax");
//element with id total
var total = document.getElementById("total");

//element with id submitBtn
var sumbitBtn = document.getElementById("submitBtn");



// Add event listeners
sumbitBtn.addEventListener("click", updatePrices)
// Calculate and update prices
function updatePrices(event) {
		event.preventDefault();
    // Get the values of the pizza size and quantity
 		const pizzaSizeVal = pizzaSize.value
    const quantityVal = quantity.value
    
    
    // Calculate subtotal
 		const subtotalVal = Number(pizzaSizeVal) * Number(quantityVal)
 console.log(pizzaSizeVal, quantityVal)
    
    // Calculate tax
    const taxVal = subtotalVal * TAX_RATE
    
    // Calculate total by adding the subtotal value and tax value
    const totalVal = subtotalVal + taxVal
    
    // Update the text of the HTML element with the id subtotal with the subtotal value 
    subtotal.textContent = subtotalVal.toFixed(2)
   // Update the text of the HTML element with the id tax with the tax value 
   //Makes the value have only 2 decimal points
    tax.textContent = taxVal.toFixed(2)
    // Update the text of the HTML element with the id total with the total value 
    total.textContent = totalVal.toFixed(2)
}

// Handle form submission
function handleSubmit(event) {

}

// Show order summary
function showOrderSummary() {

}
