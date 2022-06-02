var scrollBody = $('.fix_motion'),
	scrollHeight, //스크롤의 높이
	sectionOffseTop,
	sectionScrollTop,
	scrollRealHeight, //스크롤이 실제로 움직이는 높이
	windowScrollTop,
	scrollPercent,
	percent;

function scrollFunc(){
	scrollHeight = scrollBody.height();
	//.fix_motion의 높이값

	sectionOffseTop = scrollBody.offset().top;
	//.fix_motion이 화면 위에 닿는 지점

	scrollRealHeight = scrollHeight - $(window).height();
	//.fix_motion의 높이에서 100vh만큼 뺀 높이

	sectionScrollTop = $(window).scrollTop() - sectionOffseTop;
	//.fix_motiondptj 0%로 시작하기 위해 

	scrollPercent = sectionScrollTop / scrollRealHeight;
	//실제 움직일 수 있는 범위에서 스크롤의 이동값을 계산(소수)

	percent = scrollPercent * 100;
	console.log(percent);

	var deviceImg = $('.device_fix .slide_wrap .slide .child')
	var imgWidth = deviceImg.width();
	
	if(percent >= 0 && percent < 25){
		slideChange(imgWidth * 0);
		$('.device_fix .slide_wrap .slide .child1').addClass('active')
	}else if(percent >= 25 && percent < 50){
		slideChange(imgWidth * 1);
		$('.device_fix .slide_wrap .slide .child2').addClass('active')
	}else if(percent >= 50 && percent < 75){
		slideChange(imgWidth * 2);
		$('.device_fix .slide_wrap .slide .child3').addClass('active')
	}else if(percent >= 75){
		slideChange(imgWidth * 3);
		$('.device_fix .slide_wrap .slide .child4').addClass('active')
	}

	if(percent<0){
		$('.device_fix .slide_wrap .slide .child').removeClass('active')
	}
};


function slideChange(moveX){
	var slide = $('.device_fix .slide_wrap .slide');
	slide.css({transform: 'translateX(' + -moveX + 'px)'})
};

$(window).scroll(function(){
	scrollFunc();
});

scrollFunc();