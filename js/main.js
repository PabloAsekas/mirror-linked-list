$(function() {
	$("#simpleSortable1").sortable({
		placeholder: "sortable-placeholder",
		start: function(event, ui) {
			var startPosition = ui.item.index();
		},
		stop: function(event, ui) {
			var object = $("#simpleSortable1").clone();
			$(object).attr("id", "simpleSortable2");
			$("#simpleSortable2").replaceWith(object);
			var endPosition = ui.item.index();
		}
	});
	$(".withChildren").each(function() {
		$(this).sortable({
			connectWith: ".connectedSortable",
			placeholder: "sortable-placeholder",
			active: function(event, ui) {
				$(".connectedSortable li").css("margin-top", "20px");
				$(".connectedSortable li").css("margin-bottom", "20px");
			},
			start: function(event, ui) {
				var startPosition = ui.item.index();
			},
			stop: function(event, ui) {
				var object = $("#sortable1").clone();
				$(object).attr("id", "sortable2");
				$("#sortable2").replaceWith(object);
				var endPosition = ui.item.index();
			}
		});
	});
});