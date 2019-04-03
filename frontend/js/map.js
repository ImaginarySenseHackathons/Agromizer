var width = window.innerWidth;
var height = window.innerHeight;
var data;

var req_plants = [/*41,42,43,44,45,46,47,48,49,50,51,*/52,53,54,55,56/*,57,58,59,60,61,62*/].toString();
	req_height = "80",
	req_width = "40";

var http = new XMLHttpRequest();
http.onreadystatechange = function() {
	if (http.readyState == 4) {
	console.log(http.status);
	if (http.status == 200) {
		data = JSON.parse(http.responseText);
		dataProcess(data);
	}
		else {
		console.log(http.responseText);
		alert("err: "+http.status+", res: "+http.responseText);
	}
	}
}

function getData() {
	// Get credits page.
	http.open("POST", "http://localhost:1337/optimize", true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send("plants="+req_plants+"&height="+req_height+"&width="+req_width);
}

getData();

var stage = new Konva.Stage({
	container: 'map',
	width: width,
	height: height
});

// 
var groundLayer = new Konva.Layer();
var plantsLayer = new Konva.Layer();

// Add ground
var ground = new Konva.Rect   ({
	x: 0,
	y: 0,
	width: width,
	height: height,
	fill: '00AA00',
	opacity: 0.5,
	strokeWidth: 0
});

function dataProcess(data) {
	console.log("Adding ground");
	for (var i = data.ground.length - 1; i >= 0; i--) {
		var ground = new Konva.Rect({
			x: Number(data.ground[i].x),
			y: Number(data.ground[i].y),
			width: Number(data.ground[i].width),
			height: Number(data.ground[i].height),
			fill: 'brown',
			stroke: 'black',
			strokeWidth: 2
		});
		// console.log(ground);
		// add the shape to the layer
		plantsLayer.add(ground);
	}
	
	// Add plants
	console.log("Adding plants");
	for (var i = data.plants.length - 1; i >= 0; i--) {
		var plant = new Konva.Circle({
			x: Number(data.plants[i].x),
			y: Number(data.plants[i].y),
			radius: Number(data.plants[i].trunkDiameter/2),
			fill: 'brown',//"hsl("+data.plants[i].hue+", 100, 50)", //'brown',
			stroke: 'darkbrown',
			opacity: 0.8,
			strokeWidth: 6
		});
		// console.log(plant);
		// add the shape to the layer
		plantsLayer.add(plant);
	}

	// add the layer to the stage
	stage.add(plantsLayer);
	console.log("Processing complete");
}
