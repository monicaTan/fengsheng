$(function(){

	//right-ol
	function olHover(){
		$('.right-ol li').hover(function(){
			$(this)
			.css({"border-color":"#ddd","background-color":"#f9f9f9"})
			.find('.ol-content').show();
		},function(){
			$(this)
			.css({"border-color":"#fff","background-color":"#fff"})
			.find('.ol-content').hide();
		})
	}
	olHover();

	//tab

	function tadChangeClick(obj,classobj,box){
		var tabLi = obj,
			classChange = classobj,
			divBox = box;
		$(tabLi).click(function(){
	        $(tabLi).eq($(this).index()).addClass(classChange).siblings().removeClass(classChange);
			$(divBox).hide().eq($(this).index()).show();
		});
	};
	tadChangeClick('.tab li','cur','div');

})