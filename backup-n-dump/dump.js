const nextSlide = (x) => {
	const modalImage = document.getElementById("modal-image")
	productImages = document.getElementsByClassName('gallery-pictures')

	// HIER ZOEKEN NAAR POSITIE VAN openImage IN productImages

	// gives array where each object has its position as the first item in the array
	// then there's the 2nd array with all the values of the html element
	productImages = Object.entries(productImages)
	console.log(productImages)
	// console.log(productImages)
	const index = productImages.map(e => e.complete).indexOf(true)
	console.log(index)

	n += x
	modalImage.src = productImages[n].currentSrc

}

// DOES NOT WORK
if (n == 0) {
	n = (index) + x
	modalImage.src = productImages[n].currentSrc
} else if (n > ((productImages.length) - 2)) {
	console.log("Nu breekt het")
	n = -1
} else if (n < (productImages.length - 1) && n >= -1) {
	n++
	modalImage.src = productImages[n].currentSrc
	console.log("waarde n: " + n)
	console.log(productImages.length - 1)
}

// DOES WORK
if (n == -1) {
	n = (index) + x
	console.log(n)
	modalImage.src = productImages[n].currentSrc
} else if (n >= 0 && n <= (productImages.length - 2)) {
	n += x
	modalImage.src = productImages[n].currentSrc
} else {
	n = 0
	modalImage.src = productImages[n].currentSrc

}