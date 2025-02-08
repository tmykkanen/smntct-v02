window.addEventListener('load', () => {
	;(function () {
		const map = L.map('hs-grayscale-leaflet', {
			center: [44.05937461400064, -93.38859819147521],
			zoom: 9
			// Prevent dragging over the limit
			// maxBounds: [
			//   [40, -100],
			//   [60, 10],
			// ],
			// maxBoundsViscosity: 1.0,
		})

		function createPopupContent(country, city, short, current, previous) {
			const growUp = `<svg class="size-4 text-teal-500 dark:text-teal-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`
			const growDown = `<svg class="size-4 text-red-500 dark:text-red-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>`

			return `<div class="bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] w-[160px] p-3">
        <div class="flex mb-1">
          <div class="mt-0.5 me-2">
            <div class="size-4 rounded-full bg-no-repeat bg-center bg-cover" style="background-image: url('../assets/vendor/svg-country-flags/svg/${short}.svg')"></div>
          </div>
          <span class="text-sm font-medium">${city}, ${country}</span>
        </div>
        <div class="flex items-center space-x-1">
          <span class="text-sm text-gray-500 dark:text-neutral-500 ">Active:</span>
          <span class="text-sm ${current.isGrown ? 'text-teal-500 dark:text-teal-400' : 'text-red-500 dark:text-red-400'} ">${current.value}</span>
          ${current.isGrown ? growUp : growDown}
        </div>
        <div class="flex items-center space-x-1">
          <span class="text-sm text-gray-500 dark:text-neutral-500 ">New:</span>
          <span class="text-sm ${previous.isGrown ? 'text-teal-500 dark:text-teal-400' : 'text-red-500 dark:text-red-400'} ">${previous.value}</span>
          ${previous.isGrown ? growUp : growDown}
        </div>
      </div>`
		}

		function createPopupContentTMP({ name, pastor, email, url }) {
			return `
        <div>
          <h2 class='text-lg'>${name}</h2>
          <p>${pastor}</p>
          <p><a href='mailto:${email}'>${email}</a></p>
          <p><a href='${url}'>Website</a></p>
          </div>
        `
		}

		L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
			maxZoom: 19,
			minZoom: 2,
			attribution: '© <a href="https://carto.com/attributions">CARTO</a>'
		}).addTo(map)

		// Sojourners 43.644039556391355, -93.38859819147521
		// Owatonna 44.05937461400064, -93.2502878882635
		// Redemption City Church 44.043209548640746, -92.4932867351392
		// NCC 44.45266343070468, -93.15989457285775
		// Gospel Joy 44.1535996472263, -93.98025713443178
		data.forEach((item) => {
			L.marker(item.coords).bindPopup(createPopupContentTMP(item)).addTo(map)
		})

		let width = document.documentElement.clientWidth
		if (width < 768) {
			map.setZoom(8)
		} else {
			map.setZoom(9)
		}
	})()
})
