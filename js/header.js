(function () {
	const header = document.querySelector("header")
	const mobileNavTrigger = header.querySelector(".mobile-nav-trigger")
	const nav = header.querySelector(".nav")
	mobileNavTrigger.addEventListener("click", (e) => {
		nav.classList.toggle("_open")
		mobileNavTrigger.classList.toggle("_open")
		document.documentElement.classList.toggle("_lock-scroll")
	})

	const searchTrigger = document.querySelector(".search-trigger")
	const search = document.querySelector(".component_search")


	searchTrigger.addEventListener("click", () => {
		header.classList.add("_searching")
	})

	document.addEventListener("click", (e) => {
		if (!e.target.closest("header")) {
			header.classList.remove("_searching")
		}
	})
}())