(function () {
	const categoryList = document.querySelector(".category")
	const title = document.querySelector("h1")

	const url = new URL(window.location.href)
	const params = new URLSearchParams()

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
}())