const getSumBtn = document.createElement("button")
getSumBtn.append("Get Total Price")
document.body.appendChild(getSumBtn);
const table = document.querySelector("table");

const getSum = () => {
	let prices = document.querySelectorAll(".price")
	let total = 0;
	prices.forEach(price => {
		total += Number(price.textContent) || 0;
	})
	const existingTotal = document.getElementById("total-row")
	if(existingTotal) {
		existingTotal.remove()
	}
	
	const tr = document.createElement("tr")
	tr.id = "ans"
	
	const td = document.createElement("td")
	td.colSpan = 2;
	td.textContent = `Total Value: ${total}`
	
	tr.appendChild(td)
	table.appendChild(tr)
};
getSumBtn.addEventListener("click", getSum)






