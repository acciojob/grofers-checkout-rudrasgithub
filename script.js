const getSumBtn = document.createElement("button")
getSumBtn.append("Get Total Price")
document.body.appendChild(getSumBtn);

const getSum = () => {
	let prices = document.querySelectorAll(".prices")
	let sum = 0;
	for(let price of prices) {
	  sum+=parseFloat(price.textContent) || 0;
	}
	const table = document.querySelector("table")
	const newRow  = document.createElement("tr")
	const newCell = document.createElement("td")
	newCell.textContent = `Total Price: ${sum}`
	newRow.appendChild(newCell)
	table.appendChild(newRow)
};

getSumBtn.addEventListener("click", getSum)