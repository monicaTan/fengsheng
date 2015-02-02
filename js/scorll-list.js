
$(function(){
	var $leftScoll = $('.scorll-left');
	var $rightScoll = $('.scorll-right');
	scorllFirst($leftScoll);
	scorllFirst($rightScoll);
});

function scorllFirst(obj2){
	var $this = $(obj2);
	var scrollTimer;
	$this.hover(function(){
		clearInterval(scrollTimer);
	},function(){
		scrollTimer = setInterval(function(){
		scrollNews($this);
		}, 2000 );
	}).trigger("mouseout");
};
function scrollNews(obj){
	var $self = obj.find("ul:first");
	var lineHeight = $self.find("li:first").height();
	$self.animate({ "margin-top" : -lineHeight +"px" },600 ,
	function(){
		$self.css({"margin-top":"0px"}).find("li:first").appendTo($self);
	})
}