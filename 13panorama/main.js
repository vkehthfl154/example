var panoWrap = $('.pano_wrap'),
    listWrap = panoWrap.children('.list'),
    //children 은 css에서의 >와 같다
    item=listWrap.children('li'),
    itemWidth = item.width(),//300
    itemLength=item.Length,//10
    listWidth=itemWidth * itemLength,//3000
    controls=$('.controls'),
    listClone = null, 
    move = 0,
    timer;

    var init = function(){
        panoWrap.css({width: listWidth * 2 + 'px'}); //6000
        listWrap.css({width: listWidth + 'px'}); //3000

        listWrap.clone().appendTo(panoWrap);
        //listWrap을 복사하여 panoWrap의 내부 끝에 추가 첨부한다.
        listClone = panoWrap.children(); //ul 2개
        render();
				add();
				event();
    };

    var render =function(){
        move += 1; //move = move + 1;
        listClone.css({transform:'translateX('+ -move + 'px)'})
        timer = window.requestAnimationFrame(render);
    };
		var add = function(){
			setInterval(function(){
				listWrap.clone().appendTo(panoWrap);
				listClone=panoWrap.children('.list');
			}, 10000)
		}
		var event = function(){
			controls.find('a.play_on').click(function(e){
				e.preventDefault();
				if($(this).hasClass('active')){	
					clear();
					$(this).removeClass('active');
				}else{
					$(this).addClass('active');
					render();
			 }
			})
		}

		var clear = function(){
			window.cancelAnimationFrame(timer)
		}

    init();