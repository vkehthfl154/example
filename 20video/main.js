var allVideos = $('.video');
var playAll = $('#play-all');
var vd = $('video');
var video;

/* allVideos.hover(
	function(){
		마우스가 진입했을 때 실행

		html요소(body, header, div, h1, video, em...)
		get(0) = html요소의 첫번째 요소를 불러온다는 의미
		.eq(index번호) -> jQuery객체의 순서를 의미
		* video는 jQuery요소로 불러오면 X
		  => get()을 사용하여 html요소 그대로 불러온다

	}, function(){ 
		마우스가 벗어났을 때 실행
	}
); */

allVideos.hover(
	function(){
		video = $(this).find('video');
		console.log(video.get(0));
		video.get(0).play();
	}, function(){
		video.get(0).pause();
	}
);

playAll.click(function(){
	if(playAll.hasClass('on')){
		playAll.removeClass('on');
		$('#play-all .play-all').text('Pause All');
		for(var i=0; i<vd.length; i++){
			vd.get(i).play();
		}
	}else{
		playAll.addClass('on');
		$('#play-all .play-all').text('Play All');
		for(var i=0; i<vd.length; i++){
			vd.get(i).pause();
		}
	}
});