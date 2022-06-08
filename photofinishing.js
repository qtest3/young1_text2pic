function convert(option) {
	var backsheet = document.querySelector("#backsheet");
	backsheet.innerHTML = document.querySelector("#shot").value.replace(/ /g, "&nbsp;").replace(/\n/g, "<br />");

	backsheet.style.display = "block";
	if(option && option["b-bg"]) {
		backsheet.style.background = "#000";
		backsheet.style.color = "#fff";
	}
	else {
		backsheet.style.background = "#fff";
		backsheet.style.color = "#000";
	}

	html2canvas(backsheet, {
		onrendered: function(canvas) {
			var div = document.querySelector("#photo");
			div.innerHTML = "";
			var img = document.createElement("img");
			img.src = canvas.toDataURL("image/png");
			img.width = 600;
			div.appendChild(img);
			backsheet.style.display = "none";
		}
	});
}

