/*
 *
 */


$(function(){
	
	// 画像オーバーレイ
	jQuery('.overlay')
	//.attr('rel', 'media-gallery')
	.fancybox({
		openEffect : 'fade',
		closeEffect : 'fade',
		prevEffect : 'fade',
		nextEffect : 'fade',
		padding: 0,
		closeBtn: false,
		closeClick: true,
		//width: 355,/*width: 560,*/
		//height: 500,/*height: 315,*/
		
		//arrows : true,
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(255, 255, 255, 0.8)'
				}
			}
		}
	});
	
	
});

