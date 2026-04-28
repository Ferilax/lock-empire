import "./libs/splide.min.js"

(function () {
	Splide.defaults = {
		pagination: false,
		arrows: false,
	}

	function createSwiper(swiperSelector, options) {
		const hasSwiper = !!document.querySelector(swiperSelector);
		if (hasSwiper) {
			let splide = new Splide(swiperSelector, options);
			splide.mount();

			return splide;
		}
	}

	createSwiper("#start_splide", {
		arrows: true,
		perPage: 1
	})
	createSwiper("#start-catalog_splide", {
		drag: false,
		gap: 24,
		perPage: 4,
		padding: "calc((100vw - 100%) / 2)",

		breakpoints: {
			1439: {
				gap: 12,
				perPage: 3,
				drag: true,
			},
			1023: {
				perPage: 2,
			},
			767: {
				gap: 8,
			},
		}
	})
}())
