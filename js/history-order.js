(function () {
	// Для страницы профиля

	const historyOrders = document.querySelector(".history-orders")
	const order = document.querySelector(".order")
	const orderHistoryTab = document.querySelector('.tab-trigger[data-tab="order_history"]')

	historyOrders.addEventListener("click", (e) => {
		if (e.target.closest(".order-preview")) {
			historyOrders.style.display = "none"
			order.style.display = "block"
		}
	})

	orderHistoryTab.addEventListener("click", () => {
		historyOrders.style.display = "block"
		order.style.display = "none"
	})
}())