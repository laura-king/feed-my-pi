let $stageOne = $('#image-stage-one');
let $stageTwo = $('#image-stage-two');

const fadeSpeed = 1500;
const imageOne = 'https://i.redd.it/dzoxuklwku001.jpg';
const imageTwo = 'https://i.redd.it/dz8koy04bp001.jpg';

let stageOneActive;

function cycleImages() {
	current = stageOneActive ? $stageOne : $stageTwo;
	next = stageOneActive ? $stageTwo : $stageOne;
	current.fadeOut(fadeSpeed);
	setTimeout(() => { next.fadeIn(fadeSpeed) }, fadeSpeed);
	stageOneActive = !stageOneActive;
}

$stageOne.attr('src', imageOne);
$stageTwo.attr('src', imageTwo);
$stageTwo.hide();
stageOneActive = true;

setInterval(cycleImages, fadeSpeed * 6);