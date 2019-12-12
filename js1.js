// JavaScript Document
$('.nav li').mouseenter(function(){
/*	$(this).find('dd:first').addClass('nav_dlcur');
*/	var winW=$(window).width();/*可视窗口的宽度*/
	var linw = $(this).offset().left;
	/*if(winw-linw<200){
		$('.nav dl dl').css({left:'-200px'});
	}*/
	$(this).find('dl:first').slideDown(200);/*找到第一个dl*/
})
$('.nav li').mouseleave(function(){
	$(this).find('dl:first').slideUp(200);/*找到第一个dl*/
/*	$(this).find('a:first').removeClass('nav_dlcur');
*/})
$('.nav dd').mouseenter(function(){
	$(this).find('a:first').addClass('nav_dlcur');

	$(this).find('dl:first').slideDown(200);/*dd中找到第一个dl*/
		
	
})
$('.nav dd').mouseleave(function(){
	$(this).find('a:first').removeClass('nav_dlcur');
	$(this).find('dl:first').slideUp(200);
	})
/*flash*/
var flashAuto = window.setInterval(function(){$('.flash_right').click();},3000);

$('.flash').mouseenter(function(){
	$('.flash_left,.flash_right').fadeIn(200);
	clearInterval(flashAuto);
	});
$('.flash').mouseleave(function(){
	$('.flash_left,.flash_right').fadeOut(200);
	 flashAuto = window.setInterval(function(){$('.flash_right').click();},3000);
	});
	/*左右箭头淡入淡出*/
$('.flash_btn span').mouseenter(function(){
	var old = $('.flash_btnCur').index('.flash_btn span');/*找出当前样式在span中的索引*/
	var new1 = $('this').index('.flash_btn span');/*当前鼠标进入在span中的索引*/
	if (old==new1){
		return
		}
	$('.flash_img li').eq(old).fadeOut(500);
	$('.flash_img li').eq(new1).fadeIn(500);
	$(this).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur');/*当前span加css，siblings表示this同辈下的所有span都去掉该样式，注意没有点，这是设置按钮*/
	
	
	});
$('.flash_right').click(function(){
	var old1 = $('.flash_btnCur').index('.flash_btn span');
	var last = $('.flash_btn span:last').index('.flash_btn span');
	var new1;
	if(old1 != last){
		new1=old1+1;
		
		}
	else{
		new1 = 0;
		}
	$('.flash_img li').eq(old1).fadeOut(500);/*通过eq找到旧的li的索引淡出*/
	$('.flash_img li').eq(new1).fadeIn(500);/*通过eq找到新的li的索引*/
	$('.flash_btn span').eq(new1).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur')
	});

$('.flash_left').click(function(){/*点击下一个触发*/
	var old1 = $('.flash_btnCur').index('.flash_btn span');/*找到当前样式在span中的索引*/
	var last = $('.flash_btn span:last').index('.flash_btn span');/*找到span中的最后一个*/
	var new1;
	if(old1 != 0){
		new1=old1-1;/*当前不是第一个就减一*/
		
		}
	else{
		new1 =last;/*否则让当前的等于最后的*/
		}
	$('.flash_img li').eq(old1).fadeOut(500);/*当前的淡出*/
	$('.flash_img li').eq(new1).fadeIn(500);
	$('.flash_btn span').eq(new1).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur')/*前一个淡入并且加上样式，在同辈元素的所有span移除该样式*/
	});

var flashAuto = window.setInterval(function(){$('.flash_right').click();},3000);
	
	

