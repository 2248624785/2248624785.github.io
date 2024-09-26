/*
======== table of content. =================================

Description: fadein/out button image when mouse overed.
Update:  2010/07/1-
Author:  Japan Electronic Industrial Arts Co.Ltd.
         http://www.jeia.co.jp/
License: licensed under the MIT (MIT-LICENSE.txt) license.
Using:   using jQuery
         http://jquery.com/
         using DD_belatedPNG for IE6-8
         http://www.dillerdesign.com/experiment/DD_belatedPNG/

============================================================
*/
new function(){var f=300;var g=100;var h='off';var i='on';if(typeof jQuery=='undefined'){return}jQuery(document).ready(function(){init()});function init(){jQuery('a img').each(function(){if(jQuery(this).hasClass('ov')) return; var a=jQuery(this).attr('src');var b=new RegExp(/.*_off\.[^.]+/);var c=new RegExp(/.*\.png$/);var d;if(a.match(b)){d=jQuery(this).clone();d.attr('src',a.replace('_off.','_on.')).addClass(i).fadeTo(0,0).css({'position':'absolute','left':'0px','top':'0px'});jQuery(this).addClass(h).css({'position':'absolute','left':'0px','top':'0px'}).parent().append(d).mouseover(onMouseOver).mouseout(onMouseOut).css({'display':'block','position':'relative'}).width(jQuery(this).width()).height(jQuery(this).height());if(typeof(DD_belatedPNG)!='undefined'){if(a.match(c)){DD_belatedPNG.fixPng(this);DD_belatedPNG.fixPng(d.get(0))}}}})}function onMouseOver(e){var a=jQuery(this).children('img.'+h).attr('src');var b=new RegExp(/.*\.png$/);jQuery(this).unbind('mouseover',onMouseOver);if(a.match(b)){jQuery(this).children('img.'+h).fadeTo(f,0).end().children('img.'+i).fadeTo(f,1,function(){jQuery(this).parent().mouseover(onMouseOver)})}else{jQuery(this).children('img.'+i).fadeTo(f,1,function(){jQuery(this).parent().mouseover(onMouseOver)})}}function onMouseOut(e){var a=jQuery(this).children('img.'+h).attr('src');var b=new RegExp(/.*\.png$/);if(a.match(b)){jQuery(this).children('img.'+h).fadeTo(g,1).end().children('img.'+i).fadeTo(g,0)}else{jQuery(this).children('img.'+i).fadeTo(g,0)}}}


;(function($,window,undefind) {
	
	var $intro = $('#intro-logoset');
	var $iary = $(['.l01','.l02','.l03','.l04','.l05','.l06','.l07','.l08','.l09','.l10','.l11','.l12','.l13','.l14','.l15']);
	
	var $black = $('#black');
	var $main_vsl_layer = $('#mainVslLayer');
	var $html_container = $('#htmlContainer');
	var $chara_layer = $('#visual-box');
	var $social = $('.social-box');
	var $movie_btn = $('.btn-movie');
	var $snd_btn = $('.btn-snd');
	
	var $c_ary01 = $(['.t01','.t02','.t03','.t04','.t05','.t06','.t07','.t08','.t09','.t10','.t11','.t12','.t13','.t14','.t15']);
	var $c_ary02 = $(['.t16','.t17','.t18','.t19','.t20','.t21','.t22','.t23','.t24-1','.t25','.t26','.t27','.t28']);
	var $c_bothAry = $(['.t01','.t02','.t03','.t04','.t05','.t06','.t07','.t08','.t09','.t10','.t11','.t12','.t13','.t14','.t15','.t16','.t17','.t18','.t19','.t20','.t21','.t22','.t23','.t24-1','.t25','.t27','.t28']);
	
	var $s_ary = $(['.s01', '.s02', '.s03', '.s04', '.s05', '.s06', '.s07', '.s08', '.s09', '.s10']);
	
	var init_delay = 0;
	
	var body_id;

	/* -----------------------------------------------
	 * アニメーション - 初期化
	 * ----------------------------------------------- */
	initialize();
	

	/* -----------------------------------------------
	 * アニメーション - スタート
	 * ----------------------------------------------- */
	window.onload = startAnimation;
	

	/* -----------------------------------------------
	 * アニメーション - 初期化
	 * 
	 * ----------------------------------------------- */
	function initialize(){
		
		body_id = $('body').attr('id');
		
		/* -----------------------------------------------
		 * 汎用ロールオーバー フェード
		 * ----------------------------------------------- */
		$('.fadeover').hover(
			function(){
				$(this)
				.stop()
				.animate({
					opacity: 0.6
				},{
					duration: 200
				});
			},
			function(){
				$(this)
				.stop()
				.animate({
					opacity: 1
				},{
					duration: 200
				});
			}
		);


		/* -----------------------------------------------
		 * アニメーション要素の非表示
		 * ----------------------------------------------- */
		//$html_container.hide();
		//$black.hide();
		//$chara_layer.hide();
	};


	/* -----------------------------------------------
	 * アニメーション - スタート
	 * 
	 * ----------------------------------------------- */
	function startAnimation(){
		
		/* -----------------------------------------------
		 * YOUTUBE 再生
		 * ----------------------------------------------- */
		$('.btn-movie a')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',
			padding: 0,
			closeBtn: false,
			width: 640,/*width: 560,*/
			height: 360,/*height: 315,*/

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});
		
		if ($('body').attr('id') == 'campaign') {
			initContents();
		};
	}
	
	
	
	function onResize(){
		var _wh = $(window).height();
		//var _h = $('#main').height() + 120 + 40;
		var _h = $('#main').height() + 120 + 40;
		
		if(body_id == 'top') _h = $('#main').height() + 450;
		
		if(_wh > _h){
			$('#footer').addClass('fixed');
		}
		else{
			$('#footer').removeClass('fixed');
		}
	}
	
	$(window).resize(function(){
		onResize();
	});
	onResize();
	
})(jQuery,window);



/* -----------------------------------------------
 * フェード無しロールオーバー
 * .ov で判定 _ov.png 画像に変換
 * ----------------------------------------------- */
(function(){

	/*
	Standards Compliant Rollover Script
	Author : Daniel Nolan
	http://www.bleedingego.co.uk/webdev.php
	*/
	
	if (!document.getElementById) return;


	
	var aPreLoad, sTempSrc, aImages;
	
	aPreLoad = [];
	aImages = document.getElementsByTagName('img');
	
	for (var i = 0; i < aImages.length; i++) {		
		if (aImages[i].className == 'ov') {
			var src = aImages[i].getAttribute('src'),
			osrc = src,
			ftype = src.substring(src.lastIndexOf('.'), src.length),
			hsrc = src.replace(ftype, '_on'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			aImages[i].setAttribute('osrc', osrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				//sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}	

			aImages[i].onmouseout = function() {
				
				//if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_o'+ftype, ftype);
				//this.setAttribute('src', sTempSrc);
				this.setAttribute('src', this.getAttribute('osrc'));
			}
			
		}
	}
})();


/* -----------------------------------------------
 * ユーザーエージェント判定
 * 
 * ----------------------------------------------- */
var ua,
	agent = navigator.userAgent,
	isSmp = false;

function getUA(){
			
	if(jQuery.browser.msie){
		var ver_ = parseInt(jQuery.browser.version);
		
		switch(ver_){
			case 9:
			ua = 'ie9'; break;
			
			case 8:
			ua = 'ie8'; break;
			
			case 7:
			ua = 'ie7'; break;
			
			case 6:
			ua = 'ie6'; break;
		};
		
	};
	
	// スマホ、iPad関連はIE7,8モードで処理
	if(agent.search('iPhone') != -1){
		ua = 'iPhone';
		isSmp = true;
	}else if(agent.search('iPad') != -1){
		ua = 'iPad';
		isSmp = true;
	}else if(agent.search('Android') != -1){
		ua = 'Android';
		isSmp = true;
	}else if(agent.search('Safari') != -1){
		if(agent.search('Chrome') == -1){
			ua = 'Safari';
		};
	}else if(agent.search('Firefox') != -1){
		ua = 'Firefox';
	}else if(agent.search('Opera') != -1){
		ua = 'Opera';
	};
	
	$('body').addClass(ua);
};

getUA();


/* -----------------------------------------------
 * クエリ取得
 * 
 * ----------------------------------------------- */
function getQueryString()
{
    if( 1 < window.location.search.length )
    {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        var query = window.location.search.substring( 1 );

        // クエリの区切り記号 (&) で文字列を配列に分割する
        var parameters = query.split( '&' );

        var result = new Object();
        for( var i = 0; i < parameters.length; i++ )
        {
            // パラメータ名とパラメータ値に分割する
            var element = parameters[ i ].split( '=' );

            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = decodeURIComponent( paramValue );
        }

        return result;
    }

    return null;
}

function trace(opt_str){
	if (jQuery.browser.msie) {return};
	console.log(opt_str);
};