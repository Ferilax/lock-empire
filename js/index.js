async function loadModules() {
	function has(selector) {
		return !!document.querySelector(selector)
	}

	if (has(".splide")) {
		import("./sliders.js")
	}
}

// Запускаем после загрузки DOM
document.addEventListener("DOMContentLoaded", loadModules);