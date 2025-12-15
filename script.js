const getSumBtn = document.createElement("button")
getSumBtn.append("Get Total Price")
document.body.appendChild(getSumBtn);
const table = document.querySelector("table")
const newRow  = document.createElement("tr")

const getSum = () => {
	let prices = document.querySelectorAll(".prices")
	let sum = 0;
	for(let price of prices) {
	  sum+=parseFloat(price.textContent) || 0;
	}
	newRow.innerHTML = `<td>Total Price: ${sum}</td>`
	table.appendChild(newRow)
};

getSumBtn.addEventListener("click", getSum)