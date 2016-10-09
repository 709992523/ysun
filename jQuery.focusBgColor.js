/*
 *语法
 *$('#ul').focusBgColor('#f00');
 **/
;(function($){
	$.fn.extend({
		'focusBgColor': function(focusBG){
			var that = $(this),
				li_ = new Array();
			for (var li_j = 0; li_j < $(this).children().length; li_j++)
			{
				li_[li_j] = false;
			}
			$(this).children().each(function() {
				$(this).on({
					mouseover: function() {
						$(this).css({'background': focusBG, 'cursor': 'pointer'});
					},
					mouseout: function() {
						if (li_[$(this).index()] == false)
						{
							$(this).css({'background': ''});
						}
					},
					click: function() {
						$(this).css({'background': focusBG}).siblings().css({'background': ''});
						for (var i = 0; i < that.children().length; i++)
						{
							li_[i] = false;
						}
						li_[$(this).index()] = true;
					}
				});
			});
		}
	});
})(jQuery);