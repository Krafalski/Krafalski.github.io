var path = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'black',
  fillColor: 'steelblue'
});

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}

var path = new Path.Rectangle({
	point: [75, 75],
	size: [75, 75],
	strokeColor: 'black'
});

var destination = Point.random() * view.size;

function onFrame(event) {
	// Each frame, rotate the path by 3 degrees:
	path.rotate(3);
}
