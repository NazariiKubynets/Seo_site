'use strict';

document.addEventListener("DOMContentLoaded", function() {

	var rangeSlider = document.getElementById('slider-range');

	noUiSlider.create(rangeSlider, {
			start: [5],
			range: {
					'min': [0],
					'max': [10]
			},
			step: 1,
			connect: [true, false]
	});

	//----------------------SLIDER-hero----------------------
	var mySwiper = new Swiper('.hero__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		// effect: 'fade',
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.hero__pagination',
			clickable: 'true',
		},
		navigation: {
			nextEl: '.hero__next',
			prevEl: '.hero__prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 1,
				spaceBetween: 20
			},	
		}
	});

	//----------------------TABS-JS----------------------
	const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
		const header = document.querySelector(headerSelector),
					tab = document.querySelectorAll(tabSelector),
					content = document.querySelectorAll(contentSelector);


		if (content) {
			if (tab) {
				if (header) {
					function hideTabContent() {
						content.forEach(item => {
							item.style.display = "none";
						});

						tab.forEach(item => {
							item.classList.remove(activeClass);
						});
					}

					function showTabContent(i = 0) {
						content[i].style.display = "block";
						tab[i].classList.add(activeClass);
					}


				hideTabContent();
				showTabContent();

				header.addEventListener('click', (e) => {
					const target = e.target;
					if (target && 
						(target.classList.contains(tabSelector.replace(/\./, '')) || 
						target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
						tab.forEach((item, i) => {
							if (target == item || target.parentNode == item) {
								hideTabContent();
								showTabContent(i);
							}
						});
					}
				});
				}
			}
		}
	};
	tabs('.tabs', '.tabs__item', '.tabs__wrap', 'tabs--active');

	//----------------------SLIDER-hero----------------------
		// var mySwiper = new Swiper('.hero__slider', {
		// 	slidesPerView: 1,
		// 	spaceBetween: 30,
		// 	loop: true,
		// 	effect: 'fade',
		// 	autoplay: {
		// 		delay: 5000,
		// 	},
		// 	pagination: {
		// 		el: '.hero__pagination',
		// 		clickable: 'true',
		// 	},
		// 	navigation: {
		// 		nextEl: '.hero__next',
		// 		prevEl: '.hero__prev',
		// 	},
		// 	breakpoints: {
		// 		320: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 20
		// 		},
		// 	}
		// });

	//----------------------SCROLL-----------------------
		const scrollTo = (scrollTo) => {
			let list = document.querySelector(scrollTo);
			list = '.' + list.classList[0]  + ' li a[href^="#"';
	
			document.querySelectorAll(list).forEach(link => {
	
				link.addEventListener('click', function(e) {
						e.preventDefault();
						const scrollMenu = document.querySelector(scrollTo);
	
						let href = this.getAttribute('href').substring(1);
	
						const scrollTarget = document.getElementById(href);
	
						// const topOffset = scrollMenu.offsetHeight;
						const topOffset = 70;
						const elementPosition = scrollTarget.getBoundingClientRect().top;
						const offsetPosition = elementPosition - topOffset;
	
						window.scrollBy({
								top: offsetPosition,
								behavior: 'smooth'
						});
	
						
						let button = document.querySelector('.hamburger'),
								nav = document.querySelector('.header__nav'),
								header = document.querySelector('.header');
	
						button.classList.remove('hamburger--active');
						nav.classList.remove('header__nav--active');
						header.classList.remove('header--menu');
				});
			});
		};
		// scrollTo('.header__nav');
	
	//----------------------FIXED-HEADER-----------------------
		const headerFixed = (headerFixed, headerActive) => {
			const header =  document.querySelector(headerFixed),
						active = headerActive.replace(/\./, '');
	
			window.addEventListener('scroll', function() {
				const top = pageYOffset;
				
				if (top >= 90) {
					header.classList.add(active);
				} else {
					header.classList.remove(active);
				}
	
			});
	
		};
		// headerFixed('.header', '.header--active');

		const hamburger = (hamburgerButton, hamburgerButtonActive, hamburgerNav, hamburgerNavActive, hamburgerHeader, headerMenuActive) => {
			const button = document.querySelectorAll(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);

			if(button) {
				if(nav) {

					button.forEach(element => {
						element.addEventListener('click', (e) => {
							element.classList.toggle(hamburgerButtonActive);
							nav.classList.toggle(hamburgerNavActive);
							header.classList.toggle(headerMenuActive);
						});
					});
				}
			}
		};
		hamburger('.hamburger', 'hamburger--active', '.header__nav', 'header__nav--active', '.header', 'header--menu');
		hamburger('.btn--calculatorList', 'btn--calculatorList--active', '.calculator__dropdownContent', 'calculator__dropdownContent--active', '.calculator__data', 'calculator__data--active');

		//---------------------nav--------------------------
		const accordions = (accordionSelector) => {
			const	accordion = document.querySelectorAll(accordionSelector);
			if (document.documentElement.clientWidth < 992) {
				if(accordion) {
					accordion.forEach(item => {
						const accordionClick = item.querySelector('.accordion__header'),
									accordionContent = item.querySelector('.accordion__content');
				
						accordionClick.addEventListener('click', (e) => {
							if(!item.classList.contains('accordion--active')) {
				
								item.classList.add('accordion--active')
								accordionContent.style.height = "auto"
								var height = accordionContent.clientHeight + "px"
								accordionContent.style.height = "0px"
				
								setTimeout(() => {
									accordionContent.style.height = height
								}, 0)
				
							} else {
								accordionContent.style.height = "0px"
								item.classList.remove('accordion--active')
							}
						});
					});
				}
			};
			if (document.documentElement.clientWidth > 992) {
				if(accordion) {
					accordion.forEach(item => {
						const accordionClickr = item.querySelector('.accordion__header'),
									accordionContentr = item.querySelector('.accordion__content');

						accordionClickr.addEventListener('click', (e) => {

							if(!item.classList.contains('accordion--active')) {
								accordion.forEach(item => { 
									item.classList.remove('accordion--active');
								});
							}

							if(!item.classList.contains('accordion--active')) {
								item.classList.add('accordion--active');
								
							} else {
								item.classList.remove('accordion--active');
							}
							
						});
					});
				}
			};
		};
		accordions('.accordion');

		// myFunction
		const check_width = () => {
			if (document.documentElement.clientWidth < 767) {
				var stlBoxSh1 = "-2px -2px 5px rgba(180, 173, 173, 0.5), 2px 2px 5px rgba(160, 145, 145, 0.5)";
				var stlBoxSh2 = "-2px -2px 5px rgba(68, 68, 68, 0.5), 2px 2px 5px rgba(0, 0, 0, 0.5)";

				const display_new = ( tipe1, tipe2, tipe3) => {
					for(var i=0; i<58; i++){
						document.getElementsByClassName('listPromotion__columnOne')[i].style.display = tipe1
						document.getElementsByClassName('listPromotion__columnTwo')[i].style.display = tipe2
						document.getElementsByClassName('listPromotion__columnThree')[i].style.display = tipe3
					}
				}

				const boxShadow_new = (stl1, stl2, stl3) => {
					document.getElementById("animationBtnOne").style.boxShadow = stl1
					document.getElementById("animationBtnTwo").style.boxShadow = stl2
					document.getElementById("animationBtnThree").style.boxShadow = stl3
				}

				document.getElementById("listPromotion--stlOne").onclick = () => {
					display_new('grid','none','none');
					boxShadow_new(stlBoxSh1,stlBoxSh2,stlBoxSh2);
				}

				document.getElementById("listPromotion--stlTwo").onclick = () => {
					display_new('none','grid','none');
					boxShadow_new(stlBoxSh2,stlBoxSh1,stlBoxSh2);
				}

				document.getElementById("listPromotion--stlThree").onclick = () => {
					display_new('none','none','grid');
					boxShadow_new(stlBoxSh2,stlBoxSh2,stlBoxSh1);
				}

				display_new('grid','none','none');
				boxShadow_new(stlBoxSh1,stlBoxSh2,stlBoxSh2);
			}
		}
		check_width();

//----------------------SLIDER-hero----------------------
		var mySwiper = new Swiper('.reviews__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			// effect: 'fade',
			autoplay: {
				delay: 50000,
			},
			pagination: {
				el: '.reviews__pagination',
				clickable: 'true',
			},
			navigation: {
				nextEl: '.reviews__next',
				prevEl: '.reviews__prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 1,
					spaceBetween: 20
				},
			}
		});
	//----------------------MODAL-----------------------
		var result = Number(document.getElementById("result").value.replace('%',''))
		document.getElementById("btnminus").onclick = () => {
			if (result>0.1) {
				result-=0.1;
			}
			document.getElementById("result").innerHTML = result.toFixed(1) + '%';
		}
		
		document.getElementById("btnplus").onclick = () => {
			if (result<99.9) {
				result+=0.1;
			}
			document.getElementById("result").innerHTML = result.toFixed(1) + '%';
		}

	
});
	
