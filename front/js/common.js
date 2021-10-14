
'use strict';

// ie 하위 브라우저 대응 요소생성
document.createElement('section');
document.createElement('aside');
document.createElement('header');
document.createElement('nav');

$(function(){
	winPopClose();
	layerPop();
	$areaSelect();
});

function winPop(url,w,h,l,t){ // 윈도우 팝업
	window.open(url,'','width='+ w +',height='+ h +', left='+ l +', top='+ t +', scrollbars=no, menubar=no, resizable=no');
}

function winPopClose(){
	$('.btn-pop-close').on('click',function(){
		self.close();
	});
}

function layerPop(){ // 레이어 팝업
	$('.openLayer').on('click',function(e){
		e.preventDefault();
		e.stopPropagation();
		
		var trg = $(this),
		$Id = trg.attr('href').substr(1);

		$('.layerPopup#' + $Id).stop().fadeIn(300);
		$('body')
		.append('<div class="bg_dark"><em class="hideEl">백그라운드 영역</em></div>');
	});

	$(document).on('click','.btnClose, .bg_dark', function(e){
		e.preventDefault();
		e.stopPropagation();

		$('.layerPopup').stop().fadeOut(200);
		$('.bg_dark').remove();
	});
}

function $areaSelect(){
	var giftPop = $('#gift_reservation');

	giftPop.find('#areaCheck').on('change',function(){
		var chTrg = $(this),
		$val = chTrg.find('option:selected').val();

		giftPop.find('.lpop_cts_mid > div').load('area/area.html #' + $val);
	});
}