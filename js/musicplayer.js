var scriptSrc = ["js/jquery.min.js"];
for(var i=0;i<scriptSrc.length;i++) {
	var scriptTag=document.createElement("SCRIPT");scriptTag.type="text/javascript";scriptTag.defer=!0;scriptTag.src=scriptSrc[i];document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
}
window.onload=function(){  
	var m=document.getElementById("musicplayer");m&&(m.innerHTML='<link rel="stylesheet" href="./fonts/iconfont.css">\
	    <link rel="stylesheet" type="text/css" media="screen" href="./css/player.css" />\
	    <!-- 播放器 -->\
	    <div class="music-player">\
		<!-- audio标签 -->\
		<audio class="music-player__audio" ></audio>\
		<!-- 播放器主体 -->\
		<div class="music-player__main">\
		    <!-- 模糊背景 -->\
		    <div class="music-player__blur"></div>\
		    <!-- 唱片 -->\
		    <div class="music-player__disc">\
		        <!-- 唱片图片 -->\
		        <div class="music-player__image">\
		            <img width="100%" src="" alt="">\
		        </div>\
		        <!-- 指针 -->\
		        <div class="music-player__pointer"><img width="100%" src="./images/cd_tou.png" alt=""></div>\
		    </div>\
		    <!-- 控件主体 -->\
		    <div class="music-player__controls">\
		        <!-- 歌曲信息 -->\
		        <div class="music__info">\
		            <h3 class="music__info--title">...</h3>\
		            <p class="music__info--singer">...</p>\
		        </div>\
		        <!-- 控件... -->\
		        <div class="player-control">\
		            <div class="player-control__content">\
		                <div class="player-control__btns">\
		                    <div class="player-control__btn player-control__btn--prev"><i class="iconfont icon-prev"></i></div>\
		                    <div class="player-control__btn player-control__btn--play"><i class="iconfont icon-play"></i></div>\
		                    <div class="player-control__btn player-control__btn--next"><i class="iconfont icon-next"></i></div>\
		                    <div class="player-control__btn player-control__btn--mode"><i class="iconfont icon-loop"></i></div>\
		                </div>\
		                <div class="player-control__volume">\
		                    <div class="control__volume--icon player-control__btn"><i class="iconfont icon-volume"></i></div>\
		                    <div class="control__volume--progress progress"></div>\
		                </div>\
		            </div>\
	\
		            <!-- 歌曲播放进度 -->\
		            <div class="player-control__content">\
		                <div class="player__song--progress progress"></div>\
		                <div class="player__song--timeProgess nowTime">00:00</div>\
		                <div class="player__song--timeProgess totalTime">00:00</div>\
		            </div>\
	\
		        </div>\
	\
		    </div>\
		</div>\
	    </div>\
	')
	var scriptSrc = ["js/utill.js","js/player.js"];
	for(var i=0;i<scriptSrc.length;i++) {
		var scriptTag=document.createElement("SCRIPT");scriptTag.type="text/javascript";scriptTag.defer=!0;scriptTag.src=scriptSrc[i];document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
	}
}
