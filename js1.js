// JavaScript Document
$('.nav li').mouseenter(function(){
	var winW=$(window).width();/*可视窗口的宽度*/
	var liW=$(this).offset().left;
	if(winW-liW<240)
	{ 
		$('.nav dl dl').css({left:'-200px'});
	}
		$(this).find('dl:first').slideDown(200);
})
$('.nav li').mouseleave(function(){
	$(this).find('dl:first').slideUp(200);
	
})
$('.nav dd').mouseenter(function(){
	$(this).find('dl:first').slideDown(200);
	$(this).find('a:first').addClass('nav_dlCur');
})
$('.nav li').mouseleave(function(){
	$(this).find('dl:first').slideUp(200);
	})
/*flash*/
$('.flash').mouseenter(function(){
	$('.flash_left,.flash_right').fadeIn(200);
	});
$('.flash').mouseleave(function(){
	$('.flash_left,.flash_right').fadeOut(200);
	});
$('.flash_btn span').mouseenter(function(){
	var old = $('.flash_btnCur').index('.flash_btn span');
	var new1 = $('this').index('.flash_btn span');
	if (old==new1){
		return
		}
	$('.flash_img li').eq(old).fadeOut(500);
	$('.flash_img li').eq(new1).fadeIn(500);
	$(this).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur');
	
	
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
	$('.flash_img li').eq(old1).fadeOut(500);
	$('.flash_img li').eq(new1).fadeIn(500);
	$('.flash_btn span').eq(new1).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur')
	});

$('.flash_left').click(function(){
	var old1 = $('.flash_btnCur').index('.flash_btn span');
	var last = $('.flash_btn span:last').index('.flash_btn span');
	var new1;
	if(old1 != 0){
		new1=old1-1;
		
		}
	else{
		new1 =last;
		}
	$('.flash_img li').eq(old1).fadeOut(500);
	$('.flash_img li').eq(new1).fadeIn(500);
	$('.flash_btn span').eq(new1).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur')
	});

var fashAuto = window.setInterval(function(){$('.flash_right').click();},3000);
	
	

