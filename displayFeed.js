class ImageNode {
	constructor(url) {
		this.url = url;
	}
}

class ImageQueue {

	// circular, last element connected to front

	constructor(url_array) {
		let first;
		let current;
		let that = this;
		url_array.forEach((url) => {
			let node = new ImageNode(url); 	 
			if (first === undefined) {
				first = node;
			} else {
				current.next = node;
				node.prev = current;
			}
			current = node;
		});
		current.next = first;
		first.prev = current;

		this.current = current;
	}

	get next() {
		this.current = this.current.next;
		return this.current.url;
	}
}

function displayImages(images) {
	let $stageOne = $('#image-stage-one');
	let $stageTwo = $('#image-stage-two');
	const fadeSpeed = 500;

	let stageOneActive;
	queue = new ImageQueue(images);

	$stageOne.attr('src', queue.next);
	$stageTwo.hide();
	stageOneActive = true;

	setInterval(() => {
		let $current = stageOneActive ? $stageOne : $stageTwo;
		let $next = stageOneActive ? $stageTwo : $stageOne;
		let nextImage = queue.next;
		$next.attr('src', nextImage);
		$current.fadeOut(fadeSpeed);
		setTimeout(() => { $next.fadeIn(fadeSpeed) }, fadeSpeed);
		stageOneActive = !stageOneActive;
	}, fadeSpeed * 6);
}