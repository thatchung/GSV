var playerImage = new Image();

var share_point = 360;
var numberCorrect = 0;
setTimeout(function(){
	numberCorrect = 0;
	loadLoadSreen();

	initClickEvent();
}, 300);
// FBInstant.startGameAsync().then()

function loadLoadSreen() {
	gsap.to('.img-load', {
	    duration: 2,
	    x: 0,
	    ease: "expo.out",
	    opacity:1
	});

	gsap.to('.start-btn', {
	    duration: 1.5,
	    scale: 1, 
	    ease: "expo.out",
	    opacity:1,
	    onComplete: () => {
	    	gsap.fromTo(".start-btn",1, { scale: 1 }, { scale: 1.2,repeat:-1, yoyo:true} );
	    }
	});
}

function timeoutcall(time,callback) {
	setTimeout(function(){
		callback();
	}, time);
}

function toDataURL(src) {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        let canvas = document.createElement('CANVAS');
        canvas.height = 1820;
        canvas.width = 1125;
        canvas.getContext('2d').drawImage(this, 0, 0, 1125, 1820);
        canvas.toDataURL();
    };
    img.src = src;
    return img;
}

function initClickEvent() {
	document.getElementById('start_btn').addEventListener('click',showQues1);
	document.getElementById('choice_s1_1').addEventListener('click',showCorrect1);
	document.getElementById('choice_s1_2').addEventListener('click',showQues2);
	document.getElementById('choice_s1_3').addEventListener('click',showQues2);

	document.getElementById('choice_s2_1').addEventListener('click',showQues3);
	document.getElementById('choice_s2_2').addEventListener('click',showQues3);
	document.getElementById('choice_s2_3').addEventListener('click',()=> {
		numberCorrect += 1;
		showQues3();
	});

	document.getElementById('choice_s3_1').addEventListener('click',showQues4);
	document.getElementById('choice_s3_2').addEventListener('click',()=> {
		numberCorrect += 1;
		showQues4();
	});
	document.getElementById('choice_s3_3').addEventListener('click',showQues4);

	document.getElementById('choice_s4_1').addEventListener('click',showShare);
	document.getElementById('choice_s4_2').addEventListener('click',()=> {
		numberCorrect += 1;
		showShare();
	});
	document.getElementById('choice_s4_3').addEventListener('click',showShare);

	document.getElementById('next_btn').addEventListener('click',showQues2);
}

function showQues1() {
	document.getElementById('loading_panel').style.display= "none";
	document.getElementById('screen_1').style.display= "grid";

	animationShowChoice(1);
}

function showQues2() {
	document.getElementById('screen_1').style.display= "none";
	document.getElementById('screen_6').style.display= "none";
	document.getElementById('screen_2').style.display= "grid";

	animationShowChoice(2);
}

function showQues3() {
	document.getElementById('screen_2').style.display= "none";
	document.getElementById('screen_3').style.display= "grid";

	animationShowChoice(3);
}

function showQues4() {
	document.getElementById('screen_3').style.display= "none";
	document.getElementById('screen_4').style.display= "grid";

	animationShowChoice(4);
}

function showShare() {
	document.getElementById('screen_4').style.display= "none";
	document.getElementById('screen_5').style.display= "grid";

	animationShowChoice(5);
	document.getElementById('kq_text').innerHTML = `LG chúc mừng bạn </br> đã trả lời đúng ${numberCorrect} câu hỏi`;

	gsap.to(`.kq-img`, {
	    duration: 1.5,
	    scale: 1, 
	    ease: "expo.out",
	    opacity:1
	});

	gsap.to(`#kq_text`, {
	    duration: 1.5,
	    scale: 1, 
	    ease: "expo.out",
	    opacity:1
	});
}

function showCorrect1() {
	document.getElementById('screen_1').style.display= "none";
	document.getElementById('screen_6').style.display= "grid";
	numberCorrect += 1;
	
	gsap.to(`.text-next`, {
	    duration: 1.5,
	    scale: 1, 
	    ease: "elastic.out",
	    opacity:1
	});

	gsap.to(`.scale-show`, {
	    duration: 1.5,
	    scale: 1, 
	    ease: "expo.out",
	    opacity:1
	});

	gsap.to(`#next_btn`, {
	    duration: 1.5,
	    scale: 1, 
	    ease: "elastic.out",
	    opacity:1,
	    onComplete: () => {
	    	gsap.fromTo("#next_btn",1, { scale: 1 }, { scale: 1.2,repeat:-1, yoyo:true} );
	    }
	});

}

function shareGame(){


	let shareImage = 'img/s1.jpg';
	let shareHtml = '30';

	if(list_share_image.length > 0 && percent == 30) {
		shareImage = list_share_image[0].s_img;
		shareHtml = '30.html';
	}
	if(list_share_image.length > 0 && percent == 40) {
		shareImage = list_share_image[1].s_img;
		shareHtml = '40.html';
	}
	if(list_share_image.length > 0 && percent == 50) {
		shareImage = list_share_image[2].s_img;
		shareHtml = '50.html';
	}
	if(list_share_image.length > 0 && percent == 60) {
		shareImage = list_share_image[3].s_img;
		shareHtml = '60.html';
	}
	if(list_share_image.length > 0 && percent == 70) {
		shareImage = list_share_image[4].s_img;
		shareHtml = '70.html';
	}
	if(list_share_image.length > 0 && percent == 80) {
		shareImage = list_share_image[5].s_img;
		shareHtml = '501.html';
	}
	if(list_share_image.length > 0 && percent == 90) {
		shareImage = list_share_image[6].s_img;
		shareHtml = '90.html';
	}
	if(list_share_image.length > 0 && percent == 100) {
		shareImage = list_share_image[7].s_img;
		shareHtml = '100.html';
	}


	FB.ui(
        {
            method: 'share',
            // display: 'popup',
            name: 'Quần Áo Của Bạn Hạnh Phúc Đến Đâu?',
            // hashtag: '#lg',
            // quote: 'Máy sấy LG DUAL Inverter Heat Pump',
            // href: `https://dodohanhphucquanao.ga/${shareImage}`,
            href: `https://dodohanhphucquanao.ga/${shareHtml}`,
            // link: `https://dodohanhphucquanao.ga/${shareImage}`,
            // picture: `https://dodohanhphucquanao.ga/${shareImage}`,
            thumbnail: `https://dodohanhphucquanao.ga/${shareImage}`,
            caption: 'Máy sấy LG DUAL Inverter Heat Pump Chăm Sóc Cho Quần Áo Của Bạn Luôn Luôn Hạnh Phúc!',
            description: `Máy sấy LG DUAL Inverter Heat Pump Chăm Sóc Cho Quần Áo Của Bạn Luôn Luôn Hạnh Phúc!`
        },
        function(response) {
            if (response && response.post_id) {
                document.getElementById('screen_5').style.display="none";
				document.getElementById('loading_panel').style.display= "inherit";
				document.getElementById('logo_lg').style.display="inherit";
				document.getElementById('home_screen').style.backgroundImage = "url('../img/backgroud.jpg')";
            } else {
                document.getElementById('screen_5').style.display="none";
				document.getElementById('loading_panel').style.display= "inherit";
				document.getElementById('logo_lg').style.display="inherit";
				document.getElementById('home_screen').style.backgroundImage = "url('../img/backgroud.jpg')";
            }
        }
    );
}

function animationShowChoice(id) {
	if(id) {
		gsap.to(`.ques-${id}`, {
		    duration: 1.5,
		    scale: 1, 
		    ease: "elastic.out",
		    opacity:1
		});

		gsap.to(`.vi-s${id}-1`, {
		    duration: 1.5,
		    scale: 1,
		    x: 0,
		    y: 0,
		    ease: "expo.out",
		    opacity:1,
		    onComplete: () => {
		    	gsap.fromTo(`.vi-s${id}-1`,1, { scale: 0.9, }, { scale: 1.1, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-1`,0.6, { x: 3, }, { x: -3, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-1`,0.3, { y: 4, }, { x: -4, repeat:-1, yoyo:true} );
		    }
		});
		gsap.fromTo(`.vi-s${id}-1`,4, { rotation: 0 }, { rotation: 360, repeat:-1, yoyo:true} );

		gsap.to(`.vi-s${id}-2`, {
		    duration: 1.8,
		    scale: 1,
		    x: 0,
		    y: 0,
		    ease: "expo.out",
		    opacity:1,
		    onComplete: () => {
		    	gsap.fromTo(`.vi-s${id}-2`,0.6, { scale: 0.9, }, { scale: 1.1, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-2`,0.3, { x: 2, }, { x: -2, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-2`,0.7, { y: 4, }, { x: -4, repeat:-1, yoyo:true} );
		    }
		});
		gsap.fromTo(`.vi-s${id}-2`,4, { rotation: 0 }, { rotation: 360, repeat:-1, yoyo:true} );

		gsap.to(`.vi-s${id}-3`, {
		    duration: 1.8,
		    scale: 1,
		    x: 0,
		    y: 0,
		    ease: "expo.out",
		    opacity:1,
		    onComplete: () => {
		    	gsap.fromTo(`.vi-s${id}-3`,1.2, { scale: 0.9, }, { scale: 1.1, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-3`,0.8, { x: 5, }, { x: -2, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-3`,0.9, { y: 1, }, { x: -4, repeat:-1, yoyo:true} );
		    }
		});
		gsap.fromTo(`.vi-s${id}-3`,4, { rotation: 0 }, { rotation: 360, repeat:-1, yoyo:true} );

		gsap.to(`.vi-s${id}-4`, {
		    duration: 1.8,
		    scale: 1,
		    x: 0,
		    y: 0,
		    ease: "expo.out",
		    opacity:1,
		    onComplete: () => {
		    	gsap.fromTo(`.vi-s${id}-4`,1, { scale: 0.9, }, { scale: 1.1, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-4`,0.5, { x: 4, }, { x: -2, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-4`,0.5, { y: 4, }, { x: -1, repeat:-1, yoyo:true} );
		    }
		});
		gsap.fromTo(`.vi-s${id}-4`,4, { rotation: 0 }, { rotation: 360, repeat:-1, yoyo:true} );

		gsap.to(`.vi-s${id}-5`, {
		    duration: 1.8,
		    scale: 1,
		    x: 0,
		    y: 0,
		    ease: "expo.out",
		    opacity:1,
		    onComplete: () => {
		    	gsap.fromTo(`.vi-s${id}-5`,0.9, { scale: 0.9, }, { scale: 1.1, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-5`,0.7, { x: 1, }, { x: -2, repeat:-1, yoyo:true} );
		    	gsap.fromTo(`.vi-s${id}-5`,0.5, { y: 3, }, { x: -2, repeat:-1, yoyo:true} );
		    }
		});
		gsap.fromTo(`.vi-s${id}-5`,4, { rotation: 0 }, { rotation: 360, repeat:-1, yoyo:true} );

		gsap.to(`.img-main-${id}`, {
		    duration: 1,
		    scale: 1, 
		    ease: "bounce.out",
		    opacity:1
		});

		gsap.to(`#choice_s${id}_1`, {
		    duration: 2,
		    x: 0,
		    ease: "expo.out",
		    opacity:1
		});
		gsap.to(`#choice_s${id}_2`, {
		    duration: 2.5,
		    x: 0,
		    ease: "expo.out",
		    opacity:1
		});
		gsap.to(`#choice_s${id}_3`, {
		    duration: 3,
		    x: 0,
		    ease: "expo.out",
		    opacity:1
		});
	}
}

function showResult(nun_percent) {
	
	document.getElementById('screen_3').style.display= "none";
	document.getElementById('screen_4').style.display= "none";
	document.getElementById('screen_5').style.display= "inherit";
	
	percent = nun_percent;

	document.getElementById('logo_lg').style.display="none";
	document.getElementById('home_screen').style.backgroundImage = "url('../img/backgroud_s.jpg')";
	// setTimeout(function(){
	// 	document.getElementById('home_screen').style.width = "100%";
	// }, 500);

	if(list_share_image.length > 0 && nun_percent == 30) {
		document.getElementById('img_content').src = list_share_image[0].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 40) {
		document.getElementById('img_content').src = list_share_image[1].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 50) {
		document.getElementById('img_content').src = list_share_image[2].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 60) {
		document.getElementById('img_content').src = list_share_image[3].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 70) {
		document.getElementById('img_content').src = list_share_image[4].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 80) {
		document.getElementById('img_content').src = list_share_image[5].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 90) {
		document.getElementById('img_content').src = list_share_image[6].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 100) {
		document.getElementById('img_content').src = list_share_image[7].i_img;
	}
}


function hideHome() {
    const selector = document.getElementById('home_panel')
    selector.classList.add('magictime', 'puffOut')
}

function aniShowImage() {
    const selector = document.getElementById('img_avatar')
    selector.classList.add('magictime', 'vanishIn')
}

function aniShowDetail() {
    const selector = document.getElementById('detail_panel')
    selector.classList.add('magictime', 'puffIn')
}