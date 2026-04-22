async function loadModules() {
	function has(selector) {
		return !!document.querySelector(selector)
	}

	if (has(".splide")) {
		import("./sliders.js")
	}
	if (has(".tab-system")) {
		import("./tabs.js")
	}
	if (has(".accordions")) {
		import("./accordion.js")
	}
}

// Запускаем после загрузки DOM
document.addEventListener("DOMContentLoaded", loadModules);