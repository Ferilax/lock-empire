(function () {
	const categoryList = document.querySelector(".category")
	const title = document.querySelector("h1")

	const url = new URL(window.location.href)

	categoryList.addEventListener("click", (e) => {
		const clickedOption = e.target.closest(".option")
		const options = categoryList.querySelectorAll(".option")

		if (clickedOption) {
			url.searchParams.set("search", clickedOption.innerText)
			window.history.pushState({}, "", url)
			options.forEach(el => el.classList.remove("_active"))
			clickedOption.classList.add("_active")
			title.innerText = clickedOption.innerText
		}
	})

	document.addEventListener("click", (e) => {
		if (!e.target.closest(".filter-trigger") && !e.target.closest(".filter-menu")) {
			const trigger = document.querySelector(".filter-trigger input")
			trigger.checked = false
		}
		if (!e.target.closest(".sidebar-trigger") && !e.target.closest(".category")) {
			const trigger = document.querySelector(".sidebar-trigger input")
			trigger.checked = false
		}
	})
}())