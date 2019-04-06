var width = window.innerWidth;
var height = window.innerHeight;
var data;

var req_plants = [/*16,17,18,*/19,20,21,22,23/*,24,25,26,27,28,29*/].toString();
	req_height = "65",
	req_width = "30",
	req_scale = 23,
	debugTrunkScale = 2;

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
	http.send("scale="+req_scale+"&plants="+req_plants+"&height="+req_height+"&width="+req_width);
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
	for (var i=0; i<data.plants.length; i++) {
		var plant = new Konva.Circle({
			x: Number(data.plants[i].x),
			y: Number(data.plants[i].y),
			radius: Number(data.plants[i].trunkDiameter/2*debugTrunkScale),
			fill: 'hsl('+data.plants[i].hue+', 100%, 50%)', //'brown',
			stroke: '#442222',
			opacity: 0.8,
			strokeWidth: 0.07*req_scale
		});
		console.log(data.plants[i].hue);
		// add the shape to the layer
		plantsLayer.add(plant);
	}

	// add the layer to the stage
	stage.add(plantsLayer);
	console.log("Processing complete");
}
