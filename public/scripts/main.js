var main = function () {
	window.client = io.connect(window.location.href);
	client.on('tweet', function (data) {		
		$("section figure img").attr({'src':data.image});
		$("section figure figcaption").html("@"+data.name);
		$("section article").html(data.text);		
	});
}

$(document).on('ready', main);