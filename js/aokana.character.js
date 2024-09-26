/*
 *
 */

var sub_num = 0;
var total = 16;
var cr_num;
var is_icon = false;

$(function(){
	// initlize
	url_hash = location.hash;
	trace('hash: ' + url_hash);
	
	if(url_hash == '' || url_hash == null){
	}
	else{
		var _position = url_hash.lastIndexOf("#");
		var _name = url_hash.substring(_position+10);
		sub_num = Number(_name) - 1;
		moveSubChara();
		checkButton();
		//num = setDefNum(_name);
		//$('.subnav0'+(num+1)).addClass('cr');
	}
	
	
	
	$('.cor-box a').hover(function(){
		$(this).find('img').stop(false,true).fadeOut(300);
	},function(){
		$(this).find('img').stop(false,true).fadeIn(300);
	});
	
	
	$('.chara-nav-sub li').hover(function(){
		$(this).stop(false,true)
		.animate({
			opacity: 0.6
		},400,'swing');
	},function(){
		$(this).stop(false,true)
		.animate({
			opacity: 1
		},400,'swing');
	});
	
	$('#subchara-block li').hover(function(){
		$('#subchara-block li').not(this).stop(false,true)
		.animate({
			opacity: 0.3
		},400,'easeOutQuad');
		var _i = $('#subchara-block li').index(this);
		slideProfile(_i);
	},function(){
		$('#subchara-block li').not(this).stop(false,true)
		.animate({
			opacity: 1
		},400,'easeOutQuad');
		hideProfile(cr_num);
	});
	
	$('.chara-nav-sub li').click(function(){
		var _index = $('.chara-nav-sub li').index(this);
		//if(_index > (total - 2)) sub_num = total - 2;
		//else sub_num = _index - 1;
		sub_num = _index - 1;
		is_icon = true;
		
		moveSubChara();
		checkButton();
	});
	
	$('.btn-prev-sub').click(function(){
		if(sub_num <= 0){
			return;
		}
		sub_num -= 1;
		moveSubChara();
		checkButton();
	});
	
	$('.btn-next-sub').click(function(){
		if(sub_num >= (total-3)) return;
		sub_num += 1;
		moveSubChara();
		checkButton();
	});
	
	function checkCharacter(_str){
		trace(_str);
	}
	
	function moveSubChara(){
		trace('current num: ' + sub_num);
		
		var _margin;
		_margin = -255 * sub_num;
		
		$('#subchara-block ul')
		.stop()
		.animate({
			marginLeft: _margin
		},{
			duration: 700,
			easing: 'easeInOutQuad'
		});
		
		if(sub_num >= (total - 3)){
			$('#subchara-block').stop(false,true)
			.animate({
				width: 865,
				marginLeft: -60
			},500,'easeInCirc');
		}
		else{
			$('#subchara-block').stop(false,true)
			.animate({
				width: 765,
				marginLeft: 0
			},500,'easeInCirc');
		}
	}
	
	function slideProfile(_int){
		cr_num = _int + 1;
		$('#subchara-prof').find('li:nth-child(' + cr_num + ')').css({
			marginLeft: 850
		}).stop(false,true)
		.animate({
			marginLeft: 0
		},400,'easeOutQuad');
	}
	
	function hideProfile(_num){
		$('#subchara-prof').find('li:nth-child(' + _num + ')').css({
			marginLeft: 0
		}).stop(false,true)
		.animate({
			marginLeft: -850
		},400,'easeOutQuad');
	}
	
	function checkButton(){
		//trace(sub_num);
		if(sub_num <= 0){
			$('.btn-prev-sub').css({ display: 'none' });
			$('.btn-next-sub').css({ display: 'block' });
		}
		else if(sub_num >= (total - 3)){
			$('.btn-prev-sub').css({ display: 'block' });
			$('.btn-next-sub').css({ display: 'none' });
		}
		else{
			$('.btn-prev-sub').css({ display: 'block' });
			$('.btn-next-sub').css({ display: 'block' });
		}
	}
	
	jQuery('.btn-voice a')
	.fancybox({
		openEffect : 'fade',
		closeEffect : 'fade',
		prevEffect : 'fade',
		nextEffect : 'fade',
		padding: 0,
		closeBtn: false,
		closeClick: false,
		width: '90%',
		height: '90%',
		
		//arrows : true,
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(255, 255, 255, 0.8)'
				}
			}
		},
		
		afterClose: function(){
			stopAudio();
			$('.voice-list #voice01').removeClass('playing');
			$('.voice-list #voice01').addClass('fadeover');
		}
	});
	
	// サウンド制御（明日香）
	$('.voice-asuka #voice01').click(function(e) {
		playAudio("../voice/asuka_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（みさき）
	$('.voice-misaki #voice01').click(function(e) {
		playAudio("../voice/misaki_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（真白）
	$('.voice-mashiro #voice01').click(function(e) {
		playAudio("../voice/mashiro_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（莉佳）
	$('.voice-rika #voice01').click(function(e) {
		playAudio("../voice/rika_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（佐藤院麗子）
	$('.voice-02 #voice01').click(function(e) {
		playAudio("../voice/satoin_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（乾沙希）
	$('.voice-03 #voice01').click(function(e) {
		playAudio("../voice/saki_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（各務 葵）
	$('.voice-04 #voice01').click(function(e) {
		playAudio("../voice/aoi_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（青柳紫苑）
	$('.voice-05 #voice01').click(function(e) {
		playAudio("../voice/shion_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（青柳窓果）
	$('.voice-06 #voice01').click(function(e) {
		playAudio("../voice/madoka_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（保坂実里）
	$('.voice-07 #voice01').click(function(e) {
		playAudio("../voice/minori_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
		// サウンド制御（白瀬隼人）
	$('.voice-08 #voice01').click(function(e) {
		playAudio("../voice/hayato_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
		// サウンド制御（白瀬みなも）
	$('.voice-09 #voice01').click(function(e) {
		playAudio("../voice/minamo_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（真道一成）
	$('.voice-11 #voice01').click(function(e) {
		playAudio("../voice/kazunari_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// サウンド制御（イリーナアヴァロン）
	$('.voice-12 #voice01').click(function(e) {
		playAudio("../voice/irina_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});

	// サウンド制御（有坂牡丹）
	$('.voice-10 #voice01').click(function(e) {
		playAudio("../voice/botan_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	// サウンド制御（虎魚有梨華）
	$('.voice-13 #voice01').click(function(e) {
		playAudio("../voice/arika_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	// サウンド制御（我如古繭）
	$('.voice-14 #voice01').click(function(e) {
		playAudio("../voice/mayu_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	// サウンド制御（黒渕霞）
	$('.voice-16 #voice01').click(function(e) {
		playAudio("../voice/kasumi_profile");
		$(this).removeClass('fadeover');
		$(this).addClass('playing');
	});
	
	// 初期化
	checkButton();
	soundInit();
});


function trace(opt_str){
	if (jQuery.browser.msie) {return};
	console.log(opt_str);
};