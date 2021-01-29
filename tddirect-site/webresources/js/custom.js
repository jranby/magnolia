$(document).ready(function(){

	/*
	 * Get A Query Variable
	 *
	 * Simple url string parsing function to grab
	 * a query variable or return false if not set
	 */
	function getQueryVariable(variable) {
		
        var query = window.location.search.substring(1);
        var vars = query.split("&");
		
        for (var i=0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable) {
                return pair[1];
            }
        }
        return(false);
	}

	// ---------------------------------------------------------------------

	/*
	 * Megamenu / Mobile Megamenu Display
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$(function () {

		$('.menu > .burger > a').click(function(e){
			e.preventDefault();
	        $(this).find('.fa').toggleClass('fa-bars fa-times');
			$('.megamenu, .mobile-megamenu').toggleClass('opened');
			$('.menu-level-current').removeClass('menu-level-current');
			$('#mobile-menu-main').addClass('menu-level-current');
	    });

		$('.megamenu').mouseleave(function(){
			$('.menu > .burger > a').find('.fa').toggleClass('fa-bars fa-times');
		    $(this).removeClass('opened');
		}); 
	
		$('.mobile-menu-link').click(function(e){
            
            if ($(this).attr('data-submenu')) {
            	e.preventDefault();
            	var submenu = $(this).attr('data-submenu');
            	$(this).closest('.menu-level').removeClass('menu-level-current');
            	$("ul[data-menu='" + submenu +"']").addClass('menu-level-current');
            } else {

            }
	    });

		$('.mobile-menu-link-back').click(function(e){
            $(this).closest('.menu-level').removeClass('menu-level-current');
            $('#mobile-menu-main').addClass('menu-level-current');
	    });

        $(window).resize(function() {         
			$('.menu > .burger > a').find('.fa').removeClass('fa-times').addClass('fa-bars');
			$('.megamenu, .mobile-megamenu').removeClass('opened');
        });
	});
	
	// ---------------------------------------------------------------------

	/*
	 * Megamenu / Mobile Megamenu Display
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$('#search-term').focus(function() {

		$('.menu li').addClass('search-hide');

		$(this).addClass('expanded').attr('placeholder', 'Search for shares, funds, etf\'s and news');
	 
	}).focusout(function() {

    	$('.menu li').removeClass('search-hide');
		$(this).removeClass('expanded').attr('placeholder', 'Search for...');
	});

	// ---------------------------------------------------------------------

	/*
	 * Mobile Search Overlay
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */	
	$(function () {

		// ---------------------------------------------------------------------

		/*
		 * Mobile Search Overlay Display
		 */
		$('.magnify').click(function(e){
			e.preventDefault();
			$('#top-search-mobile').fadeIn();
	    });
	
		// ---------------------------------------------------------------------

		/*
		 * Mobile Search Overlay Close
		 */
		$('.icon-close').click(function(e){
			e.preventDefault();
			$('#top-search-mobile').fadeOut();
	    });
	
		// ---------------------------------------------------------------------

		/*
		 * Mobile Search Resize Overlay Close
		 */
        var zeWidth = $(window).width();
        
        $(window).on('resize', function(){
           if($(this).width() != zeWidth){
              zeWidth = $(this).width();
              $('#top-search-mobile').hide();
           }
        });

    });

	// ---------------------------------------------------------------------

	/*
	 * News Views Signup Affix
	 * 
	 * Not used / working - TODO
	 *
	 * Initialize the bootstrap affix plugin to handle the
	 * on scroll affix of the news views article signup form.
	 */
    if ($('#subscribe-box').length > 0) {


        var subscribeBox = $('#subscribe-box');
        var headerHeight = $('#header').height();
        var mainOffset = $('#main').offset().top - headerHeight;
		var offsetTop = subscribeBox.offset().top - headerHeight;
		var offsetLeft = subscribeBox.offset().left;


	    var subscribeSrollfix = function() {
	    	
	    	var subscribeBox = $('#subscribe-box');
	        var headerHeight = $('#header').height();
	    	var mainOffset = $('#main').offset().top - headerHeight;

		    var offsetTop = subscribeBox.offset().top - headerHeight;
		    var offsetLeft = subscribeBox.offset().left;

	    	console.log(offsetLeft);

	        subscribeBox.affix( {
	            offset: {
	                top: function () {
	                    return (this.top = offsetTop);
	                }
	            }
	        } );

	        subscribeBox.on( 'affixed.bs.affix', function () {
	            console.log('fix');
	            subscribeBox.css('left', offsetLeft);
	        } );

	    };

    	//subscribeSrollfix();
	}

	// ---------------------------------------------------------------------

	/*
	 * On Scroll Animated Header
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */	
	if ($('#header').length > 0) {
		
		var headerHeight = $('#header').height();
		console.log(headerHeight);
		var headerTopHeight = $('#header-top').height();
		var headerBottomHeight = $('#header-bottom').height();
		var mainOffset = $('#main').offset().top - headerHeight + 4;
		
		var AnimatedHeader = (function () {
	
			var docElem = document.documentElement,
				header = document.querySelector('#header'),
				headerTop = document.querySelector('#header-top'),
				headerBottom = document.querySelector('#header-bottom'),
				didScroll = false,
				changeHeaderOn = mainOffset;
	
			function init() {
				window.addEventListener('scroll', function (event) {
					if (!didScroll) {
						didScroll = true;
						setTimeout(scrollPage, 0);
					}
				}, false);
			}
	
			function scrollPage() {
				
				var sy = scrollY();
				
				if (sy >= changeHeaderOn) {
					$('body').addClass('scrolled');
					$(headerBottom).addClass('scrolled');
					$(headerTop).addClass('scrolled');
				} else {
					$('body').removeClass('scrolled');
					$(headerBottom).removeClass('scrolled');
					$(headerTop).removeClass('scrolled');
				}

				didScroll = false;
			}
	
			function scrollY() {
				return window.pageYOffset || docElem.scrollTop;
			}
	
			init();
	
		})();
		
	}	

	// ---------------------------------------------------------------------

	/*
	 * Risk Alert Display
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	if ($('#risk-alert').length > 0) {

		var uuid = $('#risk-alert').attr('data-alert-uuid');

	    $('.risk-alert-choice').click(function(e){
	    	
	    	e.preventDefault();

            var choice = $(this).attr('data-alert-choice');

            if (choice == 'ok') {

			    if (!Cookies.get('td-risk-alert-' + uuid)) {
			        Cookies.set('td-risk-alert-' + uuid, 1, { expires: 30 });
			    }

            	$('#main-content-wrap, #main-bottom-wrap, #section-choices, #main-top, #qsf-panels').removeClass('hidden');
            	$('#risk-alert').fadeOut('slow');

            } else {

            	history.go(-1);
            }
	    });

	    if (Cookies.get('td-risk-alert-' + uuid)) {
	        $('#risk-alert').hide();
	    	$('#main-content-wrap, #main-bottom-wrap, #section-choices, #main-top, #qsf-panels').removeClass('hidden');
	    }	    
	}

	// ---------------------------------------------------------------------

	/*
	 * Inline Tweet
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$(function () {
	    
	    $('.tweet').click(function(e){
	    	
	    	e.preventDefault();
	    	
	    	var excerpt = $(this).text();
	    	var permalink = $(this).attr('href');
	    	var tweetUrl = 'https://twitter.com/intent/tweet?url=' + encodeURI(permalink) + '&text=' + encodeURI(excerpt);
            
            inline_tweet_sharer_open_win(tweetUrl);
	    });

		function inline_tweet_sharer_open_win(tweetUrl) {
			window.open(tweetUrl,'tweetwindow','width=566,height=592,location=yes,directories=no,channelmode=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no');
			return false;
		}	    
	});

	// ---------------------------------------------------------------------

	/*
	 * Quick Quote
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$(function () {
	    
	    $('.quick-quote-toggler').click(function(e){
	    	e.preventDefault();
	        $('.quick-quote').toggleClass('quick-quote-open'),
	        $('.quick-quote').toggleClass('quick-quote-animate'),
	        $('.quick-quote-toggler > i').toggleClass('fa-times'),
	        $('.quick-quote-toggler > i').toggleClass('fa-search');
	    });
	});

	// ---------------------------------------------------------------------

	/*
	 * News Views Sharer
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$(function () {
	    
	    $('.sharer').click(function(e){
	    	e.preventDefault();
	        $('.social-sharers').toggle();
	    });
	});

	// ---------------------------------------------------------------------

	/*
	 * Existing Customer Cookies
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$(function () {

	    if ($('body').hasClass('logout')) {
	        Cookies.set('existing-customer', 1, { expires: 182 });
	    }

		$('#menu-login').click(function(){
	        Cookies.set('existing-customer', 1, { expires: 182 });
	    });	    
	    
	});

	// ---------------------------------------------------------------------

	/*
	 * Scroll To Call To Actions
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	function scrollToCta(ctaId,divToBeScrolledTo){

		var headerHeight = $('#header').height();

		if ($('#'+ctaId).length > 0) {
		    $('#'+ctaId).on('click', function(e){
		    	e.preventDefault();
		        if ($('#'+divToBeScrolledTo).length > 0) {
		            $('html, body').animate({scrollTop: $('#'+divToBeScrolledTo).offset().top - headerHeight}, 200);
		        }
		    });
	    }
	}
    scrollToCta('apply-now','choices');  
    scrollToCta('td-trading-app-for-smartphones','9b15096c-06dc-43ee-9499-19c7be31c439');
    scrollToCta('td-trading-app-for-tablet','td-trading-app-for-tablets');

	// ---------------------------------------------------------------------

	/*
	 * Simple Equal Height Columns
	 *
	 * Super simple scroll to top functionality
	 * fired when scrolling past a given height.
	 */
	 function setEqualHeight(columns) {
        
        var tallestColumn = 0,
            columns = jQuery(columns);
        
        columns.each(function () {
            var currentHeight = $(this).height();            
            if (currentHeight > tallestColumn) {
                tallestColumn = currentHeight;
            }
        });
        columns.height(tallestColumn);
    }
    setEqualHeight('.topic-icon-wrap');

	// ---------------------------------------------------------------------

	/*
	 * Simple Tabs
	 *
	 * Outputs simple jquery tabbed interface
	 * to display the sites defined services.
	 */
	$('ul.tab-links li').click(function(){
		
		var tab_id = $(this).attr('data-tab');

		$('ul.tab-links li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	// ---------------------------------------------------------------------

	/*
	 * Mobile Screens
	 *
	 * Outputs simple jquery tabbed interface
	 * to display the sites defined services.
	 */
	$('ul.screen-links li').click(function(){
		
		var screen_id = $(this).attr('data-screen');

		$('ul.screen-links li').removeClass('current');
		$('.screen-content').removeClass('current');

		$(this).addClass('current');
		$("."+screen_id).addClass('current');
	})

	// ---------------------------------------------------------------------

	/*
	 * Porthole On Message
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	function onMessage(messageEvent){  
		
		var proxyData = messageEvent.data;
		
		console.log(messageEvent);
		
		if (proxyData.op == 'height') {
			
			// check message to adjust iframe height
			$('#iframe-td').height(proxyData.size);
		
		} else if (proxyData.op == 'trade') {

			// porthole return vars
			var epic = proxyData.epic;
			var exchange = proxyData.exchange;
			var isin = proxyData.isin; 
			var secid = proxyData.secid; 
			var sedol = proxyData.sedol; 
			var bos = proxyData.bos;

		    // build the buy url
		    var buyUrl = 'https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&destination_bos='+bos+'&destination_isin='+isin+'&destination_sedol='+sedol+'&destination_secid='+secid+'&destination_exchange='+exchange+'&destination_epic='+epic+'&destination_token=';

            // login and buy link
            var loginBuyLink = $('.login-buy-link');

            // append vars to href
            $(loginBuyLink).attr('href', buyUrl);

			// modal title
			var modalTitle = $('.modal-title');

            if (epic == '') {
                $(modalTitle).text('Buy Selected Fund');
            } else {
                $(modalTitle).text('Buy Selected Stock');
            }

			// load modal
			$('#iframe-modal').modal();

		} else if (proxyData.bos == 'scrollToTop') {

		}
	}

	// ---------------------------------------------------------------------

	/*
	 * Porthole Window Handler
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	if ($('#iframe-td').length > 0) {
		
		$(window).ready(function($){
			
			var windowProxy;		
			windowProxy = new Porthole.WindowProxy('https://pptdw.tdwh-test.co.uk/webbroker2/proxy.jsp', 'iframe-td');		
			windowProxy.addEventListener(onMessage);
		});
	}

	// ---------------------------------------------------------------------

	/*
	 * JISA Calculator
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	if ($('.jisa-calculator').length > 0) {
		
		$('.jisa-result').hide();
		$('.jisa-message').hide();
		
		$( "#date-chooser" ).datepicker({ dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true, yearRange: '1998:+nn'}).change(function(event){

			var startDateTF = "31/08/2002";
			var endDateTF = "02/01/2011";
			var now = new Date();
			var eighteenYearsAgo = new Date(now.getFullYear()-18,now.getMonth(),now.getDate());
			var dateChoice = $('#date-chooser').val();
			var d1TF = startDateTF.split("/");
			var d2TF = endDateTF.split("/");
			var cTF = dateChoice.split("/");
			var fromTF = new Date(d1TF[2], d1TF[1]-1, d1TF[0]);
			var toTF   = new Date(d2TF[2], d2TF[1]-1, d2TF[0]);
			var checkTF = new Date(cTF[2], cTF[1]-1, cTF[0]);

			// if > 18 then show ISA
			if (checkTF <= eighteenYearsAgo){
				
				$(this).datepicker('hide');
				$('.jisa-message').fadeIn(400);
				$('.jisa-message').html('<div class="alert alert-warning"><h4 class="alert-heading">Your child is over 18 years of age and is not eligible for a Junior ISA.</h4><p class="remove-bottom">Your child is over 18 years of age and is not eligible for a Junior ISA. They are eligible for our ISA.</p></div>');
			
			// if between dates show child trust fund
			} else if (checkTF > fromTF && checkTF < toTF) {
				
				$(this).datepicker('hide');
				$('.jisa-message').fadeIn(400);
				$('.jisa-result').fadeIn(400);
				$('.jisa-message').html('<div class="alert alert-info"><h4 class="alert-heading">Your child has been issued a Child Trust Fund</h4><p class="remove-bottom">If your child was born between 1st September 2002 and 2nd January 2011 they will have been given a Child Trust Fund. If you didn’t set up the account the Government will have done so on your behalf. You can find where it is currently held by going to the <a href="htpp://www.hmrc.gov.uk/tools/childtrustfundclaim/ctfaccount.htm" target="_blank">HMRC website</a>.</p></div>');
				$('.jisa-result').html('<h3>Transferring a Child Trust Fund (CTF)</h3><p>It’s simple to transfer to us and you can do it online when you open a Junior ISA.</p><ul class="tick-list add-bottom"><li>Find out your current Child Trust Fund (CTF) provider – you should have an annual statement or you can find out from the <a href="http://www.hmrc.gov.uk/tools/childtrustfundclaim/ctfaccount.htm" target="_blank">HMRC website</a></li><li>Make sure you select the transfer option when opening the Junior ISA. Don’t forget that you’ll need your CTF unique reference number (URN) to make a transfer. This can be found on your annual statement. If not please contact your existing provider.</li><li>We’ll do the rest! – We’ll contact your existing CTF provider and let you know when the transfer is complete.</li></ul>');
			
			} else {
				
				$(this).datepicker('hide');
				$('.jisa-message').fadeIn(400);
				$('.jisa-result').fadeIn(400);
				$('.jisa-message').html('<div class="alert alert-info"><h4 class="alert-heading remove-bottom">Your child is Eligible for a Junior ISA</h4></div>');
				$('.jisa-result').html('<h3>Transferring a Junior ISA</h3><p>You can transfer an existing Junior ISA online when you open a Junior ISA. Don’t forget you’ll need:</p><ul class="tick-list add-bottom"><li>Your current Junior ISA account number.</li><li>Your existing provider details.</li><li>An estimated valuation (cash and/or investments) of the Junior ISA.</li></ul>');
			};
		});
	}

	// ---------------------------------------------------------------------

	/*
	 * Table Responsive
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$('.table').not('.table-def').wrap($('<div class="table-responsive" />'));

	$.each($('.table-def tbody tr'), function(index, val) {
	    if(index >= 5) {
	        $(this).addClass('hidden');
	    }
	});

	// ---------------------------------------------------------------------

	/*
	 * Sipp Changes Table
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	$('.accordion-btn').on('click', function(e) {
	    e.preventDefault();
	    if($('.table-def tbody tr').hasClass('hidden')) {
	        $('.table-def tbody tr.hidden').toggleClass('hidden show-td');
	        $(this).text('Show Less');
	    } else if ($('.table-def tbody tr').hasClass('show-td')) {
	        $('.table-def tbody tr.show-td').toggleClass('hidden show-td');
	        $(this).text('Show More');
	    }
	});

	// loop through all rows in body
	$.each($('.table-def tbody tr'), function(index, val) {
	    
	    // loop through all td in row
	    $.each($(val).find('td'), function(tdIndex, td) {
	        
	        // add one to match nth child th value
	        tdIndex = tdIndex + 1;

	        // loop through all td in row and apply the header unless its the first one
	        if(tdIndex != 1) {
	            $(td).attr('data-label',$('.table-def thead tr th:nth-child('+tdIndex+')').text());
	        }
	    });
	});


	// ---------------------------------------------------------------------

	/*
	 * Country Selector
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	if ($('#risk-disclaimer-country-select').length > 0) {

        var countryResult = $('.country-result');
        var countrySelect = $('#country-select');
        var countryToggle = $('.country-select-toggle');
        var riskDisclaimerBtn = $('#risk-disclaimer-btn');
        var riskDisclaimerAlert = $('#risk-disclaimer-alert');

	    countryToggle.click(function(e){    	
	    	e.preventDefault();
	    	countrySelect.toggleClass('open');
	    });

		countrySelect.mouseleave(function(){
		    $(this).removeClass('open');
		}); 	    

	    $('.country').click(function(e){
	    	
	    	e.preventDefault();

	    	var text = $(this).html();
            var country = $(this).attr('id');

            countrySelect.removeClass('open');
            countryResult.html(text);

            if (country !== 'ot') {
            	riskDisclaimerBtn.removeClass('disabled');
            	riskDisclaimerAlert.addClass('hidden');
            } else {
            	riskDisclaimerBtn.addClass('disabled');
            	riskDisclaimerAlert.removeClass('hidden');
            }
	    });	    


	}

	// ---------------------------------------------------------------------

	/*
	 * Fitvids Inits
	 *
	 * Initialize the Fitvids plugin for responsive video
	 * embeds required by the blog sections of the site.
	 */
	if ($('#outlook').length > 0) {
		$('#outlook').fitVids();
	}	

	if ($('.video-container').length > 0) {
		$('.video-container').fitVids();
	}

	if ($('.qsf-video').length > 0) {
		$('.qsf-video').fitVids();
	}

	if ($('.article-video').length > 0) {
		$('.article-video').fitVids();
	}

	// ---------------------------------------------------------------------

	/*
	 * Account Radio Options
	 *
	 * Handler for the account choice radio options,
	 * showing an dhiding the login and continue buttons.
	 */
	$('.choice').click(function () {
		
		// get the id of the choice via data attribute of the radio
        var choiceId = $(this).attr('data-choice');

        // hide all buttons except what we need
        //$('.choices-buttons .btn').not('#' + choiceId).addClass('hidden');
        $('.choices-buttons').children().not('#' + choiceId).addClass('hidden');

        // show our chosen button 
        $('#' + choiceId).removeClass('hidden');
    });

	// ---------------------------------------------------------------------

	/*
	 * II Disclaimer Handler
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
    if ($('#ii-notice').length > 0) {
	    
    	var ii_notice = $('#ii-notice');
    	var ii_notice_hide = ii_notice.find('.ii-notice-hide');

		if (typeof(localStorage) != 'undefined') {
			
			if (localStorage.getItem('ii_disclaimer') === null) {
				ii_notice.removeClass('collapsed');
				ii_notice_hide.text('Hide X');
			} else {
				ii_notice.addClass('collapsed');
				ii_notice_hide.text('Show');
			}
		}

		ii_notice_hide.click(function(e) {

			e.preventDefault();
			
			ii_notice.toggleClass('collapsed');
			ii_notice_hide.text(function(i, text) {
                return text === 'Hide X' ? 'Show' : 'Hide X';
            });

			if (typeof(localStorage) != 'undefined') {
								
				if (localStorage.getItem('ii_disclaimer') === null) {
					localStorage.setItem('ii_disclaimer', 'collapsed');
				} else {
					localStorage.removeItem('ii_disclaimer');
				}				
			}

	    });
    }

	// ---------------------------------------------------------------------

	/*
	 * Sitewide Notice Handler
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
    if ($('.ii-sitewide-notice').length > 0) {
	    
    	var ii_sitewide_notice = $('.ii-sitewide-notice');
    	var ii_sitewide_notice_hide = ii_sitewide_notice.find('.ii-sitewide-notice-hide');
    	var ii_sitewide_notice_more = ii_sitewide_notice.find('.ii-sitewide-notice-more');

    	if (Cookies.get('existing-customer')) {
    		ii_sitewide_notice_more.removeClass('hidden');
    	}

		if (typeof(localStorage) != 'undefined') {
			
			if (localStorage.getItem('ii_sitewide') === null) {
				ii_sitewide_notice.removeClass('collapsed');
				$('body').addClass('is-sitewide');
			} else {
				ii_sitewide_notice.addClass('collapsed');
				$('body').removeClass('is-sitewide');
			}
		}

		ii_sitewide_notice_hide.click(function(e) {

			e.preventDefault();

			$('body').removeClass('is-sitewide');
			
			ii_sitewide_notice.toggleClass('collapsed');

			if (typeof(localStorage) != 'undefined') {
								
				if (localStorage.getItem('ii_sitewide') === null) {
					localStorage.setItem('ii_sitewide', 'collapsed');
				} else {
					localStorage.removeItem('ii_sitewide');
				}				
			}

	    });
    }

	// ---------------------------------------------------------------------

	/*
	 * Set "tdukcookies" Each Page Load
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
    if (!Cookies.get('tdukcookies')) {
        Cookies.set('tdukcookies', 1, { expires: 365 }); 
    }
    
	// ---------------------------------------------------------------------

	/*
	 * Hide Signup Forms For Existing Customers
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
    if (Cookies.get('existing-customer')) {
        $('.widget-signup, #subscribe-box').hide();
    }

	// ---------------------------------------------------------------------

	/*
	 * Dismissed Cookie Notification
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
    if (!Cookies.get('dismissed-notifications')) {
        $('#cookie-notice').show();
    }

	$('.dismiss-notice').click(function () {
		// dismiss notification
        $(this).closest('.cookie-message').fadeOut('slow');
		// update cookie
        Cookies.set('dismissed-notifications', 1, { expires: 365 });
    });

	// ---------------------------------------------------------------------

	/*
	 * Stocks Realtime Ticker
	 *
	 * Toggle and display of a responsive menu
	 * handling hierarchical menu structures set.
	 */
	if ($('.stocks').length > 0) {
		
		// request interval
		var refreshInterval = 60000;
        
        // initial values
		var ftse100Old = 0;
		var ftse250Old = 0;
		var techMarkOld = 0;
		var nasdaqOld = 0;
		var djOld = 0;
		
		function requestData() {

			$.ajax({
				url: 'https://capco.steelpandas.net/TD/MarketDetails',
				dataType: 'text',
				success: function(data) {
					
					// serialize string to js object
					var json = $.parseJSON(data);
					
					//update HTML
					updateContent(json);
				},
				complete: function() {
					// delay for a given interval and the re-call function
					// technically self recursive but being called only on
					// complete prevents infinite loops / stack overflows
					setTimeout(requestData, refreshInterval);
				},
				error: function(data) {
					console.log(data);
				}
			});
		}

		function updateContent(json) {
			
			// update html and compare previous percentages to decide which arrow to use
			$('#FTSE100Decimal').find('.stock-value').html(Math.abs(round(parseFloat(json[1].D2), 2)));
			$('#FTSE100Decimal').find('.stock-change').html(Math.abs(round(parseFloat(json[1].H8), 2)));
			decideArrow('#FTSE100Decimal', parseFloat(json[1].H8));
			ftse100Old = parseFloat(json[1].H8);

			$('#FTSE250Decimal').find('.stock-value').html(Math.abs(round(parseFloat(json[2].D2), 2)));
			$('#FTSE250Decimal').find('.stock-change').html(Math.abs(round(parseFloat(json[2].H8), 2)));
			decideArrow('#FTSE250Decimal', parseFloat(json[2].H8));
			ftse250Old = parseFloat(json[2].H14);

			$('#TechmarkDecimal').find('.stock-value').html(Math.abs(round(parseFloat(json[3].D2), 2)));
			$('#TechmarkDecimal').find('.stock-change').html(Math.abs(round(parseFloat(json[3].H8), 2)));
			decideArrow('#TechmarkDecimal', parseFloat(json[3].H8));
			techMarkOld = parseFloat(json[3].H14);

			$('#NASDAQDecimal').find('.stock-value').html(Math.abs(round(parseFloat(json[0].D2), 2)));
			$('#NASDAQDecimal').find('.stock-change').html(Math.abs(round(parseFloat(json[0].H8), 2)));
			decideArrow('#NASDAQDecimal', parseFloat(json[0].H8));
			nasdaqOld = parseFloat(json[0].H14);

			$('#DJDecimal').find('.stock-value').html(Math.abs(round(parseFloat(json[4].D2), 2)));
			$('#DJDecimal').find('.stock-change').html(Math.abs(round(parseFloat(json[4].H8), 2)));
			decideArrow('#DJDecimal', parseFloat(json[4].H8));
			djOld = parseFloat(json[4].H14);
		}

		function round(num, decimals) {
			// accurate rounding
			var t = Math.pow(10, decimals);   
			return (Math.round((num * t) + (decimals>0?1:0) * (sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
		}

		function sign(x) {
			return x > 0 ? 1 : x = 0 ? 0 :-1;
		}

		function decideArrow(marketDecimal, netChange) {
			// decide arrow based on the comparison between percentages
			if (netChange > 0) {
				$(marketDecimal).find('.glyphicon').addClass('glyphicon-arrow-up');
			} else if (netChange == 0){
				$(marketDecimal).find('.glyphicon').addClass('glyphicon-resize-horizontal');
			} else {	
				$(marketDecimal).find('.glyphicon').addClass('glyphicon-arrow-down');
			}
		}

		requestData();
	}

	// ---------------------------------------------------------------------

	/*
	 * Recommended Funds Risk Rating Panel
	 *
	 * Bacon ipsum dolor amet tenderloin cow tongue,
	 * filet mignon kielbasa brisket salami biltong.
	 */
	if ($('#riskrating').length > 0) {

		$('#riskrating').on('show.bs.modal', function (event) {

			var button = $(event.relatedTarget);
			var content = button.data('content');
			var title = button.data('title');
			var modal = $(this);
			modal.find('.modal-body p').html(content);
			modal.find('.modal-title').text(title);
		});

		$(".modal.fade, #riskrating .close, #riskrating .btn").on("click", function() {
			$("#riskrating iframe").attr("src", jQuery("#riskrating iframe").attr("src"));
		});
	}

	// ---------------------------------------------------------------------

	/*
	 * Quick Quote
	 *
	 * Toggle and display of a responsive menu
	 * handling hierarchical menu structures set.
	 */
	if ($('.quick-quote-wrap').length > 0) {

		var currency_position = '';
		var curreny_value = '';
		var isClosedPrice = false;
		var label = 'Bid Price';		
	 	
	 	$('#switch').click(function(e) {
	 		e.preventDefault();
	 		$('#quickName').toggle();
	 		$('#quickEpic').toggle();
	 	});
	 	
	 	$('#getPrice').click(function(e) {

	 		e.preventDefault();
	 		
	 		var url = false;
	 		var marketId = $('#marketID').val();
	 		var epic = $('#quickEpic').val();
	 		var name = $('#quickName').val();


	 		if (($('#quickEpic').is(':visible') && epic == '') || ($('#quickName').is(':visible') && name == '')){
	 			return alert('Please use the symbol lookup functionality, or enter a market symbol in the text box provided.');
	 		} else {
	 			$('.quick-quote-preloader').show();
	 		}
	 		
	 		if (epic) {
	 			var url = "https://remoteservices.tddirectinvesting.co.uk/remoteservices/markets/" + marketId + "/instruments/" + epic;
	 		} else if (name) {
	 			var url = "https://remoteservices.tddirectinvesting.co.uk/remoteservices/markets/" + marketId + "/instruments?" + name;
	 		}

	 		$.ajax({
	 			method: 'GET',
	 			url: url,
	 			async: true,
	 			crossDomain: true,
	 			processData: false,
	 			data: '',
	 			headers: {
	 				"TD-User-Agent": "PUBLIC (webbroker)",
	 				"content-type": "application/json",
	 				"accept": "application/uk.co.tdwh.borealis-v1+json",
	 				"cache-control": "no-cache"
	 			},
	 			success: function(response) {

	 				$('#noQuoteResults').hide();					
	 				$('#quoteResults').fadeIn();
	 				$('.quick-quote-preloader').hide();
	 				
	 				if (!name) {

                        	setCurrency(response.currencyIso);
                        	
                        	if(response.closedPrice){
                        		isClosedPrice = true;
                        	}

                        	if (currency_position == 'before' ) {
                        		$('#bidPrice').html(currency_value + response.bidPrice);
                        		$('#offerPrice').html(currency_value + response.offerPrice);
                        	} else {
                        		$('#bidPrice').html(response.bidPrice + currency_value);
                        		$('#offerPrice').html(response.offerPrice + currency_value+'<br/>');
                        	}
                        	if (isClosedPrice) {
                        		label = 'Closing Price';
                        		$('.bid-label').html(label);
                        		$('.offer-label').hide();
                        		$('#offerPrice').hide();
                        	} else {
                        		label= 'Bid Price';
                        		$('.bid-label').html(label);
                        		$('.offer-label').show();
                        		$('#offerPrice').show();
                        	}
                        	
                        	$('#quick_quote_trade').attr('href','https://secure.ii.co.uk/webbroker2?destination_op=trade&destination_epic='+response.instrumentId+'&destination_isin='+response.isin+'&destination_sedol='+response.sedol+'&destination_exchange='+response.market);
                        	$('#shortName').html(response.shortName);
                        	
                        	if (response.priceChangeOnDay > 0) {
                        		$('#dayPercentageChange').css('color','#1654a2');
                        		$('#priceChangeOnDay').css('color','#1654a2');
                        		$('#dayChangeArrow').css('color','#1654a2');
                        		$('#dayChangeArrow').attr('class','glyphicon glyphicon-arrow-up');

                        	} else if(response.priceChangeOnDay == 0) {
                        		$('#dayPercentageChange').css('color','#363636');
                        		$('#priceChangeOnDay').css('color','#363636');
                        		$('#dayChangeArrow').css('color','#363636');
                        		$('#dayChangeArrow').attr('class','');

                        	} else {
                        		$('#dayPercentageChange').css('color','red');
                        		$('#priceChangeOnDay').css('color','red');
                        		$('#dayChangeArrow').css('color','red');
                        		$('#dayChangeArrow').attr('class','glyphicon glyphicon-arrow-down');

                        	}
                        	if (response.dayPercentageChange || response.priceChangeOnDay) {
                        		$('#day-change').show();
                        	    $('#dayPercentageChange').html(response.dayPercentageChange + '%');
                        	    $('#priceChangeOnDay').html(response.priceChangeOnDay);
                            } else {
                            	$('#day-change').hide();
                            }
                    } else {
                    	console.log('display list of epics');
                    }

                },
                error: function(e) {
                	console.log(e);
                	$('#quoteResults').hide();
                	$('#noQuoteResults').fadeIn().find('.col-xs-12').html('<h4 id="shortName" class="remove-bottom">No results matched your search.</h4>');
                	$('.quick-quote-preloader').hide();
                }
            });
		});
	}

	// ---------------------------------------------------------------------

	/*
	 * Set Currency
	 *
	 * Lorem ipsum dolor sit amet, consectetur adipiscing
	 * elit. Proin aliquam commodo quam etiamx imperdiet.
	 */
	function setCurrency(currency) {
		
		currency_position = 'before';

		switch (currency) { 
			case 'SGD': 
			currency_value = 'SGD$';
			break;
			case 'USD': 
			currency_value = '$';
			break;
			case 'CAD': 
			currency_value = 'C$';
			break;		
			case 'AUD': 
			currency_value = 'AU$';
			break;
			case 'EUR': 
			currency_value = '&euro;';
			break;
			case 'HKD': 
			currency_value = 'HKD$';
			break;
			default:
			currency_position = 'after';
			currency_value = 'p';
		}
	}
	
	// ---------------------------------------------------------------------

	if ($('#risers-fallers').length > 0) {

		// ---------------------------------------------------------------------
	
		/*
		 * Market Tab Links
		 *
		 * Lorem ipsum dolor sit amet, consectetur adipiscing
		 * elit. Proin aliquam commodo quam etiamx imperdiet.
		 */
		$('ul.market-links li').click(function(){
			//var sort_by = $(this).attr('data-sort-by');
			$('ul.market-links li').removeClass('current');
			$(this).addClass('current');
			buildRisersFallers();
		});

		// ---------------------------------------------------------------------
	
		/*
		 * Risers Fallers
		 *
		 * Lorem ipsum dolor sit amet, consectetur adipiscing
		 * elit. Proin aliquam commodo quam etiamx imperdiet.
		 */
		function buildRisersFallers(data) {
			
			$('#market-risers, #market-fallers').html('');

			var capcoIndex = $('#market-select').find(':selected').val();
			var tradeLink = 'https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&destination_bos=BUY&destination_exchange=L&destination_epic=';
			var capcoUrl = "https://capco.steelpandas.net/TD/MarketDetails";
			
			$.ajax({
				type: "get",
				contentType: "application/json; charset=utf-8",
				url: capcoUrl,
				data: "{}",
				dataType: "json",
				success: function(data) {
					
					elRisers = data[capcoIndex]['risers'];
					elFallers = data[capcoIndex]['fallers'];
					tracking = "dataLayer.push({'event' : 'GAEvent','category': 'home2_existing', 'action': 'risers' ,'label': 'home2_existing_risers_trade'});";

					console.log(data);

					if (elRisers.length > 0 || elFallers.length > 0) {
					
						$.each(elRisers, function(key, val) {
							$('#market-risers').append('<div class="market-stock row">'
							+ '<div class="col-xs-9">'
							+ '<span class="stock-name">' + elRisers[key].name + '</span><br />' 
							+ '<span class="stock-gain stock-gain-up"><i class="glyphicon glyphicon-arrow-up"></i> ' + parseFloat(elRisers[key].gain).toFixed(2) + '%' + '</span>'
							+ '</div>'
							+ '<div class="col-xs-3">'
							+ '<a class="btn btn-green" href="' + tradeLink + elRisers[key].instrumentId + '" onclick="' + tracking + '">Trade</a>'
							+ '</div>'
							+ '</div>');
						});
						
						$.each(elFallers, function(key, val) {
							$('#market-fallers').append('<div class="market-stock row">'
							+ '<div class="col-xs-9">'
							+ '<span class="stock-name">' + elFallers[key].name + '</span><br />' 
							+ '<span class="stock-gain stock-gain-down"><i class="glyphicon glyphicon-arrow-down"></i> ' + parseFloat(elFallers[key].gain).toFixed(2) + '%' + '</span>'
							+ '</div>'
							+ '<div class="col-xs-3">'
							+ '<a class="btn btn-green" href="' + tradeLink + elFallers[key].instrumentId + '" onclick="' + tracking + '">Trade</a>'
							+ '</div>'
							+ '</div>');
						});

					} else {
						
						$('#risers-fallers').addClass('hidden');
						$('#latest-market-news').removeClass('hidden');
						console.log('error');
					}
				},
				error: function(result) {
					$('#risers-fallers').addClass('hidden');
					$('#latest-market-news').removeClass('hidden');
					console.log('error');
				}
			});
		}

		if ($('ul.market-links li').length > 0) {

			var marketEbb = $('ul.market-links').find('.current').attr('data-ebb');

			if (marketEbb == 'risers') {
				$('#market-risers').show();
				$('#market-fallers').hide();
			} else {
				$('#market-fallers').show();
				$('#market-risers').hide();
			}

			$('ul.market-links li').click(function () {
		        
		        var marketEbb = $(this).attr('data-ebb');
				
				if (marketEbb == 'risers') {
					$('#market-risers').show();
					$('#market-fallers').hide();
				} else {
					$('#market-fallers').show();
					$('#market-risers').hide();
				}
		    });		

		    buildRisersFallers();

			$('#market-select').on('change', function() {
			    buildRisersFallers();
			});

	    }

    }

	// ---------------------------------------------------------------------	

});