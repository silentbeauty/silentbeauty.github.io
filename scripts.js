function styleChangeSerif() {
	console.log("font change serif");
	$("#text-change1").css("color","#feffff");
	$("#text-change1").css("background-color", "#fa8bf2");
	$("body").css("font-family","'Josefin Slab', serif");
	$("h1").css("font-family","'Vollkorn', serif");
	$(".nav-primary").css("font-family","'Josefin Slab', serif");
	$("#text-change2").css("color","#f9a620");
	$("#text-change2").css("background-color", "#feffff");
	$("#text-change3").css("color","#f9a620");
	$("#text-change3").css("background-color", "#feffff");
};

function styleChangeSansSerif() {
	console.log("font change sans serif");
	$("#text-change2").css("color","#feffff");
	$("#text-change2").css("background-color", "#fa8bf2");
	$("body").css("font-family","'Open Sans', sans-serif");
	$("h1").css("font-family","'Montserrat', sans-serif");
	$(".nav-primary").css("font-family","'Open Sans', sans-serif");
	$("#text-change1").css("color","#f9a620");
	$("#text-change1").css("background-color", "#feffff");
	$("#text-change3").css("color","#f9a620");
	$("#text-change3").css("background-color", "#feffff");
};

function styleChangeScript() {
	console.log("font change script");
	$("#text-change3").css("color","#feffff");
	$("#text-change3").css("background-color", "#fa8bf2");
	$("body").css("font-family","'Covered By Your Grace', cursive");
	$("h1").css("font-family","'Leckerli One', cursive");
	$(".nav-primary").css("font-family","'Covered By Your Grace', cursive");
	$("#text-change1").css("color","#f9a620");
	$("#text-change1").css("background-color", "#feffff");
	$("#text-change2").css("color","#f9a620");
	$("#text-change2").css("background-color", "#feffff");
};


function textSmall () {
	console.log("font size small");
	$("#text-change4").css("color", "#feffff");
	$("#text-change4").css("background-color", "#fa8bf2");
	$("body").css("font-size","16px");
	$("h1").css("font-size","28px");
	$("#text-change5").css("color","#f9a620");
	$("#text-change5").css("background-color", "#feffff");
	$("#text-change6").css("color","#f9a620");
	$("#text-change6").css("background-color", "#feffff");
};

function textMedium() {
	console.log("font size medium");
	$("#text-change5").css("color", "#feffff");
	$("#text-change5").css("background-color", "#fa8bf2");
	$("body").css("font-size","24px");
	$("h1").css("font-size","36px");
	$("#text-change4").css("color","#f9a620");
	$("#text-change4").css("background-color", "#feffff");
	$("#text-change6").css("color","#f9a620");
	$("#text-change6").css("background-color", "#feffff");
};

function textLarge() {
	console.log("font size large");
	$("#text-change6").css("color", "#feffff");
	$("#text-change6").css("background-color", "#fa8bf2");
	$("body").css("font-size","32px");
	$("h1").css("font-size","54px");
	$("#text-change4").css("color","#f9a620");
	$("#text-change4").css("background-color", "#feffff");
	$("#text-change5").css("color","#f9a620");
	$("#text-change5").css("background-color", "#feffff");
};

function textBlack() {
	console.log("black text");
	$("#text-change7").css("background-color", "#000000");
	$("#text-change7").css("color", "#feffff");
	$("body").css("color","#000000");
	$("#text-change8").css("background-color", "#feffff");
	$("#text-change8").css("color", "#f9a620");
};
	
function textOrange() {
	console.log("orange text");
	$("#text-change8").css("background-color", "#f9a620");
	$("#text-change8").css("color", "#feffff");
	$("body").css("color", "#f9a620");
	$("#text-change7").css("background-color", "#feffff");
	$("#text-change7").css("color", "#000000");
};

function smallGallery() {
	console.log("small gallery");
	$("img").css("max-width", "24%");
	$("#small-gallery").css("background-color", "#fa8bf2");
	$("#small-gallery").css("color", "#feffff");
	$("#large-gallery").css("color","#f9a620");
	$("#large-gallery").css("background-color", "#feffff");
	$("#full-width").css("color","#f9a620");
	$("#full-width").css("background-color", "#feffff");
};

function largeGallery() {
	console.log("large gallery");
	$("img").css("max-width", "49%");
	$("#large-gallery").css("background-color", "#fa8bf2");
	$("#large-gallery").css("color", "#feffff");
	$("#small-gallery").css("color","#f9a620");
	$("#small-gallery").css("background-color", "#feffff");
	$("#full-width").css("color","#f9a620");
	$("#full-width").css("background-color", "#feffff");
}

function fullWidth() {
	console.log("full width");
	$("img").css("max-width", "99%");
	$("#full-width").css("background-color", "#fa8bf2");
	$("#full-width").css("color", "#feffff");
	$("#large-gallery").css("color","#f9a620");
	$("#large-gallery").css("background-color", "#feffff");
	$("#small-gallery").css("color","#f9a620");
	$("#small-gallery").css("background-color", "#feffff");
}