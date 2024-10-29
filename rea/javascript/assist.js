var cookie = {

	set : function (key,val,expire) {

		var t = new Date();
		if(expire) expire = parseInt(expire);
		if(!expire) expire = 24*3600;
		t.setMilliseconds(t.getMilliseconds()+ (expire*1000));

		document.cookie = [
			key+'='+val,
			'expires='+t,
			'path=/'
		].join('; ');
	},
	get : function (key) {
		var result = undefined;
		var arr = document.cookie.split('; ');
		l = arr.length;
		i = 0;
		for (; i < l; i++) {
			var parts = arr[i].split('=');
			if(parts[0]==key) return parts[1];
		}
		return null;
	},
	del : function (key) {
		var t = new Date();
		document.cookie = ''+key+'=;path=/;expiries='+t;
	},
};


$(document).ready(function(){
	assist.init();
	assist.cookieInit();
	/* assist.cookieInit();
	assist.bindControls();  */
});
var assist = {
	
	init: function () {
		//assist.cookieInit();
		assist.bindControls(); 
		
		var assistSelector = $('.assist-selector');
		var discardBtn=$('#btn-discard-assist');
		var discardBtnMob=$('#btn-discard-assist-mob');


		assistSelector.click(function () {
				assist.cookieInit();
				assist.bindControls();
				
		});
		
		discardBtn.click(function () {
			
				assist.switchToNormal();
		});

	},
	cookieInit : function() {
		
		if(cookie.get('assist_view')) {
			$('html').addClass('assist-view');
			if(cookie.get('assist_size')) {
				console.log(cookie.get('assist_size'));
				$('.assist-bar li.' + cookie.get('assist_size')).click();
			}
			if(cookie.get('assist_spacing')) {
				console.log(cookie.get('assist_spacing'));

				$('.assist-bar li.' + cookie.get('assist_spacing')).click();
			}
			if(cookie.get('assist_lineheight')) {
				console.log(cookie.get('assist_lineheight'));

				$('.assist-bar li.' + cookie.get('assist_lineheight')).click();
			}
			if(cookie.get('assist_font')) {
				console.log(cookie.get('assist_font'));
				$('.assist-bar li.' + cookie.get('assist_font')).click();
			}
			if(cookie.get('assist_color')) {
				console.log(cookie.get('assist_color'));
				$('.assist-bar li.' + cookie.get('assist_color')).click();
			}
			if(cookie.get('assist_image')) {
				console.log(cookie.get('assist_image'));
				$('.assist-bar li.' + cookie.get('assist_image')).click();
			}

		}else{
			$('html').removeClass('assist-view');;
		}
	},
	bindControls: function () {
		
		var html = $('html');
		var bar = $('.assist-bar');
		bar.find('.size-select li').each(function () {
		 
			$(this).click(function () {
				
				
				if(!$(this).data('discard')){
					bar.find('.size-select li.active').removeClass('active');
					cookie.set('assist_size', $(this).attr('class'), 90);
					$(this).addClass('active');
					html.removeClass('assist-increased assist-medium assist-large');
					html.addClass($(this).attr('data-classname')+' assist-view');
					assist.saveParams();
				}else{
					
					if(cookie.get('assist_size')) {
						cookie.del('assist_size');
					}
					html.removeClass('assist-increased assist-medium assist-large assist-view');
					bar.find('.size-select li.active').removeClass('active');
					$(this).addClass('active');
					
					if ( $('html[class*="assist-"]').length === 0 ){
						$('html').removeClass('assist-view');
						assist.switchToNormal();
					}
				}
			});
		});
		bar.find('.spacing-select li').each(function () {
			$(this).click(function () {
			 
				
				if(!$(this).data('discard')){
					bar.find('.spacing-select li.active').removeClass('active');
					cookie.set('assist_spacing', $(this).attr('class'), 90);
					$(this).addClass('active');
					html.removeClass('assist-spacing-increased assist-spacing-medium assist-spacing-large');
					html.addClass($(this).attr('data-classname'));
					assist.saveParams();
				}else{
					
					if(cookie.get('assist_spacing')) {
						cookie.del('assist_spacing');
					}
					html.removeClass('assist-spacing-increased assist-spacing-medium assist-spacing-large');

					bar.find('.spacing-select li.active').removeClass('active');
					$(this).addClass('active');
					
					if ( $('html[class*="assist-"]').length === 0 ){
						$('html').removeClass('assist-view');
						assist.switchToNormal();
					}
				}
			});
		});
		bar.find('.lineheight-select li').each(function () {
			$(this).click(function () {
 				
				if(!$(this).data('discard')){
					console.log($(this).attr('Class'));
					bar.find('.lineheight-select li.active').removeClass('active');
					cookie.set('assist_lineheight', $(this).attr('class'), 90);
					$(this).addClass('active');
					html.removeClass('assist-lineheight-increased assist-lineheight-medium assist-lineheight-large');
					html.addClass($(this).attr('data-classname'));
					assist.saveParams();
				 }else{
					
					if(cookie.get('assist_lineheight')) {
						cookie.del('assist_lineheight');
					}
					html.removeClass('assist-lineheight-increased assist-lineheight-medium assist-lineheight-large');
					bar.find('.lineheight-select li.active').removeClass('active');
					$(this).addClass('active');
					
										if ( $('html[class*="assist-"]').length === 0 ){
						$('html').removeClass('assist-view');
						assist.switchToNormal();
					}
				}
			});
		});
		bar.find('.font-select li').each(function () {
			$(this).click(function () {
								
				if(!$(this).data('discard')){
					
					bar.find('.font-select li.active').removeClass('active');
					cookie.set('assist_font', $(this).attr('class'), 90);
					$(this).addClass('active');
					html.removeClass('assist-font-times assist-font-arial');
					html.addClass($(this).attr('data-classname'));
					assist.saveParams();
				}else{
					
					if(cookie.get('assist_font')) {
						cookie.del('assist_font');
					}
					html.removeClass('assist-font-times assist-font-arial');
					bar.find('.font-select li.active').removeClass('active');
					$(this).addClass('active');
					
					if ( $('html[class*="assist-"]').length === 0 ){
						$('html').removeClass('assist-view');
						assist.switchToNormal();
					}
				}
			});
		});
		bar.find('.color-select li').each(function () {
			$(this).click(function () {
				console.log($(this).data('discard'));
				
				if(!$(this).data('discard')){
					$('html').addClass('assist-transparent');
					bar.find('.color-select li.active').removeClass('active');
					cookie.set('assist_color', $(this).attr('class'), 90);
					$(this).addClass('active');
					html.removeClass('assist-white assist-invert assist-blue');
					html.addClass($(this).attr('data-classname'));
					assist.saveParams();
				}else{
					$('html').removeClass('assist-transparent');
					if(cookie.get('assist_color')) {
						cookie.del('assist_color');
					}
					html.removeClass('assist-white assist-invert assist-blue');
					bar.find('.color-select li.active').removeClass('active');
					$(this).addClass('active');
					
					if ( $('html[class*="assist-"]').length === 0 ){
						$('html').removeClass('assist-view');
						assist.switchToNormal();
					}
				}
			});
		});
		bar.find('.image-select li').each(function () {
			$(this).click(function () {
				console.log($(this).data('discard'));
				
				if(!$(this).data('discard')){
					bar.find('.image-select li.active').removeClass('active');
					cookie.set('assist_image', $(this).attr('class'), 90);
					$(this).addClass('active');
					html.removeClass('assist-no-image');
					html.addClass($(this).attr('data-classname'));
					assist.saveParams();
				}else{
					
					if(cookie.get('assist_image')) {
						cookie.del('assist_image');
					}
					html.removeClass('assist-no-image');
					bar.find('.image-select li.active').removeClass('active');
					$(this).addClass('active');
					
					if ( $('html[class*="assist-"]').length == 0 ){
						$('html').removeClass('assist-view');
						assist.switchToNormal();
					}
				}

			});
		});
	},
	saveParams: function () {
		 
		cookie.set('assist_view', 'on', 90);
		
		$('.assist-selector').toggleClass('assist-selector-on');
 
	},
	switchToNormal: function () {
		$('.assist-selector').removeClass('assist-selector-on');	
		
		cookie.del('assist_view');
		
		if(cookie.get('assist_size')) {
			cookie.del('assist_size');
		}
		if(cookie.get('assist_spacing')) {
			cookie.del('assist_spacing');
		}
		if(cookie.get('assist_lineheight')) {
			cookie.del('assist_lineheight');
		}
		if(cookie.get('assist_font')) {
			cookie.del('assist_font');
		}
		if(cookie.get('assist_color')) {
			cookie.del('assist_color');
		}
		if(cookie.get('assist_image')) {
			cookie.del('assist_image');
		}

		/* $('#assist-bar').toggle('slow'); */
		$('html').removeClass (function (index, className) {
			return (className.match (/(^|\s)assist-\S+/g) || []).join(' ');
		});
		
		$('.assist-bar-section > ul >li').removeClass('active');
		$('.assist-bar-section > ul >li:first-child').addClass('active');		
	},
	isActive: function () {
		  return $('html').hasClass('assist-view');  
	}
}; 


(() => {
	const assistModal = document.querySelector('#assistpanelModal');
	const btnSwitchOffAssist = assistModal.querySelector('.btn-discard-assist');

	const switchOffAssist = () => {
		window.location.reload();
	};

	const switchOnAssist = () => {
		if ($('html[class*="assist-"]').length !== 0 && !$('html').hasClass('assiston')){

			const showBtnsHeaderAssist = () => {
				const body = document.querySelector('body');
				const fullMenu = document.querySelector('.full-inside-menu');
				const assistHeader = document.querySelector('.flex-row-top');	

					const headerBtnsTemplate = body.querySelector('#assist-header-btns').content.querySelector('.assist-header-btns');
					const headerBtnsAssist = headerBtnsTemplate.cloneNode(true);
					fullMenu.append(headerBtnsAssist);

				const headerBtnQuestionTemplate = body.querySelector('#js-btn-header-question');
				const headerBtnQuestionAssist = headerBtnQuestionTemplate.cloneNode(true);
				assistHeader.append(headerBtnQuestionAssist);

				assistHeader.querySelector('.flex-row-top .btn-header-question').addEventListener('click', function(){
					$('.b24-widget-button-block').trigger('click');
				});
			};
			showBtnsHeaderAssist();

			/*const cloneFlagsBlockAssist = () => {
				const flagsBlockTemplate = document.querySelector('.flags-block');
				const flagsBlockAssist = flagsBlockTemplate.cloneNode(true);
				document.querySelector('.full-inside-menu').append(flagsBlockAssist);
			};
			cloneFlagsBlockAssist();*/

			/*отключение collapse для no-image и transparent*/
			$('.btn[data-toggle="collapse"]').on('click', function () {
				if ($('html').hasClass("assist-no-image") || $('html').hasClass("assist-transparent")) {
					return false;
				};
			});

			/*page menu-blocks*/
			if ($('.ineer-page-menu-blocks-section')) {
				const setItemsHeight = () => {
					const menuBlocksItemsArray = document.querySelectorAll('.menu-blocks-item');
					menuBlocksItemsArray.forEach((item) => {
						item.style.height = 'fit-content';
						let itemHeight = item.offsetHeight;
						item.style.height = `${itemHeight}`;
						const itemRowsNumber = Math.round(itemHeight/2);
						item.style.gridRow = `span ${itemRowsNumber}`;
					});
				};

				/*отключение collapse hover*/
				const collapseOnHoverRemove = () => {
					$('[data-toggle="collapse"]').on('click', function () {
						if ($('html').hasClass("assiston")) {
							return false;
						};
					});

					const menuBlocksItemNavArray = document.querySelectorAll('.menu-blocks-item-nav');
					if (menuBlocksItemNavArray.length > 0 ){
						if ($('html').hasClass('assiston')) {
							menuBlocksItemNavArray.forEach((item) => {
								item.addEventListener('mouseover', (evt) => {
									evt.stopImmediatePropagation();
								}, true); 
								item.addEventListener('mouseout', (evt) => {
									evt.stopImmediatePropagation();
								}, true);
							});
						};
					};

					setItemsHeight();
				};

				$(document).ready(collapseOnHoverRemove);
				$('#assistpanelModal').on('hidden.bs.modal', collapseOnHoverRemove);
				$(window).resize(setItemsHeight);
			};

			/* вывод data-alt */
 			const renderDataAlt = (className) => {
			const blockClassDataAlt = document.querySelector(className);
				if (blockClassDataAlt) {
					let dataAltArray = document.querySelectorAll('[data-alt]');
					if (dataAltArray.length > 0) {
						const renderBlock = document.querySelector(className);
						let dataAltArray = renderBlock.querySelectorAll('[data-alt]');
						if (dataAltArray.length !== 0) {
							dataAltArray.forEach ((item) => {
								const dataAltContent = item.getAttribute('data-alt');
								let div = document.createElement('div');
								div.className = 'data-alt-item';
								item.appendChild(div);
								div.textContent = dataAltContent;
							});
						};
					};
				};
			};
 			renderDataAlt('.section-home-footer');
			renderDataAlt('.section-welcome');
			renderDataAlt('.section-pre-footer');

			/*скрываем элементы где нет текста*/
			const hideEmptyItems = () => {
				if ($('html').hasClass('assist-no-image') || $('html').hasClass('assist-transparent')) {
					$('.home-slider__item').each(function () {
						if ($.trim($(this).text()) == 0) {
							$(this).closest('.home-slider__item').hide();
						}
					});
				} else {
					$(this).closest('.home-slider__item').show();
				}
			};
			$(document).ready(hideEmptyItems);
			$('#assistpanelModal').on('hidden.bs.modal', hideEmptyItems);

			/* https://masonry.desandro.com/ */	
			const masonryreload = () => { 
				if ($('html[class*="assist-"]').length !== 0){
					const elem = document.querySelector('.full-inside-menu .grid');
					const msnry = new Masonry( elem, {

					itemSelector: '.flex-row-menu-inside>div.grid-item'
					});	
					msnry.reloadItems();
				};
			};

			window.addEventListener('resize', masonryreload);
			$('#assistpanelModal').on('hidden.bs.modal', masonryreload);
			document.querySelector('.search-menu').addEventListener('click', masonryreload);
			document.querySelector('.js-toggle-menu').addEventListener('click', masonryreload);

			/*втавка пустой строки в календарь*/
			const insertEmptyLine = () => {
				const eventsCalendarBlock = document.querySelector('.page-events-calendar');
				const emptyLine = document.querySelector('.events-empty-line');
				if ($('html[class*="assist-"]').length !== 0 && eventsCalendarBlock && !emptyLine) {
					const calendarItemArray = eventsCalendarBlock.querySelectorAll('.events-calendar-item:has(.events-calendar-item-month)');
					
					if (calendarItemArray.length > 0 && $('html[class*="assist-"]').length !== 0) {
						calendarItemArray.forEach ((item) => {
							const emptyLine = document.createElement('hr');
							item.before(emptyLine);
							emptyLine.classList.add('events-empty-line');
						});
					};
				};
			};
			$(document).ready(insertEmptyLine);
			$('#assistpanelModal').on('hidden.bs.modal',insertEmptyLine);

			/*отключение assist-larde font-size для мобильных*/
			$(window).resize(()=> {
				if ($('html').hasClass('assist-large') && window.matchMedia('(max-width: 578px)').matches) {
					$('html').removeClass('assist-large');
					$('html').addClass('assist-medium');
					$(window).resize(()=> {
						if (window.matchMedia('(min-width: 577px)').matches) {
							window.location.reload();
						};
					});
				}
			});

			$('.sly-frame').sly(false);
			Array.prototype.forEach.call(document.querySelectorAll('.sliders-col-title'), (node) => {
				node.classList.remove('js-open-block-btn');
			});
			Array.prototype.forEach.call(document.querySelectorAll('.sly-btns-visible'), (node) => {
				node.classList.remove('js-collapsible-block');
			});
			Array.prototype.forEach.call(document.querySelectorAll('.sly-container'), (node) => {
				node.classList.remove('js-sly-container');
			});

			Array.prototype.forEach.call(document.querySelectorAll('.full-width-col'), (node) => {
				node.classList.remove('js-collapsible-block');
			});

			$('.home-slider.slick-slider').slick("unslick");

			$('html').addClass('assiston');
		};
	};

	$(document).ready(switchOnAssist);
	$('#assistpanelModal').on('hidden.bs.modal', () => {
		if ($('html[class*="assist-"]').length === 0){
			switchOffAssist();
		} else {
			switchOnAssist();
		};
	});
	btnSwitchOffAssist.addEventListener('click', switchOffAssist);
})();
