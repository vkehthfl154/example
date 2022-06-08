
// YouTube IFrame Player API

///////////////////////////////////////////////////////////////
var player1;

function onYouTubeIframeAPIReady() {
	player1 = new YT.Player('player1', { //html에서 유튜브가 재생할 영역
    videoId: 'I--iKOtiF1g', //최초 재생할 유튜브 영상의 ID
		playerVars: {
			autoplay: 1, //1 = true
			controls: 0, //동영상 주위에 있는거
			loop: 1, //반복재생 여부
			playlist: 'I--iKOtiF1g'//반복재생할 유튜브 영상 ID
			//loop: true일땐 반복할 목록(playlist)을 다시 한번 적어줘야 한다. 
		},
		events:{
			//영상이 준비되면 함수가 실행됨.
			'onReady': function(event){
        event.target.mute(); //음소거, target = 영상 자체
			}
		}
	});

	player2 = new YT.Player('player2', { 
    videoId: 'A6gSjnN8P_A',
		playerVars: {
			autoplay: 1,
			loop: 1,
			playlist: 'A6gSjnN8P_A'
		},
		events:{
			'onReady': function(event){
        event.target.mute();
			}
		}
	});
}
/////////////////////////////////////////////////////////////////