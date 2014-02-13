$(document).ready(function() {
	$("#nav").delegate("li", "click", function(event) {
		if(!$(this).hasClass("highlight")) {
			$(this).addClass("highlight");
			$(this).siblings().removeClass("highlight")
		}

		var tab = $(this).data("tab-tab");
		// $("main[data-tab-tab='" + tab +"']").show().siblings("main").hide();
		$("main:nth-child(" + tab + ")").show().siblings("main").hide();
    });
});