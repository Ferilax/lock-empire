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

	// --------------------------------------------------------------------------------------
	if (document.querySelector("#product-preview_splide")) {
		const productPreview = new Splide("#product-preview_splide", {
			type: "fade",
		})
		const productPreviewMinimap = new Splide("#product-preview-minimap_splide", {
			direction: "ttb",
			autoHeight: true,
			height: "512px",
			gap: 10,
			isNavigation: true,
			focus: "center",
			rewind: true,
			arrows: true,
			updateOnMove: true,
			drag: false,
			breakpoints: {
				1439: {
					height: "412px",
				},
				1023: {
					height: "625px",
				},
			}
		})

		productPreview.on("mounted move", (page) => {
			const lenght = productPreview.length
			const counter = document.querySelector("#product-preview_splide .counter")

			counter.innerHTML = `${(page || 0) + 1}/${lenght}`
		})

		productPreview
			.sync(productPreviewMinimap)
			.mount()

		productPreviewMinimap.mount()
	}
	// --------------------------------------------------------------------------------------

	// --------------------------------------------------------------------------------------
	const collectionSplides = document.querySelectorAll(".collection_splide")
	collectionSplides?.forEach(el => {
		new Splide(el, {
			gap: 40,
			padding: "calc((100vw - 100%) / 2)",
			autoWidth: true,
			drag: "free",

			breakpoints: {
				1023: {
					gap: 16
				}
			}
		}).mount()
	})
}())
