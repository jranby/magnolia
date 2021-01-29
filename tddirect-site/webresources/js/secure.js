var csrf = 'false';
var secureWindowProxy;
var investmentCount = 0;
var fundsCollection = [];
var morningstarWindowProxy;
// Add csrf token to url
function addCSRFURL() {
    if ($('a').attr('href') != '#') {
        $('a').not('.nav-tabs a').not('#accordion a').attr('href', function() {
            return this.href + '?CSRFTOKEN=' + csrf;
        });
    }
}
// Get CSRF from URL
function GetCSRFURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    console.log(sPageURL);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            console.log(sParameterName[1]);
            return sParameterName[1];
        }
    }
}
//Used for find your next trade
function postLink(link) {
    data = {
        "op": "navigate-to",
        "pageId": link,
        "token": csrf
    };
    // ga('send', 'event','find_your_next_trade_secure',link ,'find_out_more');
    secureWindowProxy.post(data);
}
// Adjust height of iframe
function adjustHeightwithAnchor(class_field, container_height) {
    setTimeout(function() {
        console.log('anchor point: ' + $(class_field).offset().top);
        data = {
            "op": "height-with-anchor",
            "size": $('body').height() + 120,
            "anchorOffset": $(class_field).offset().top,
            "token": csrf
        };
        if (typeof window.postMessage !== 'function') {
            secureWindowProxy.setTimeout(function() {
                windowProxy.post(data)
            }, 500); //for legacy browser wait 500ms and then //send the message.
        } else {
            secureWindowProxy.post(data) //just send it for modern browsers
        }
    }, 400);
}

function backButton() {
    secureWindowProxy.post({
        "op": "navigateback"
    });
}

function delayedAdjustHeight() {}

function adjustHeight(newHeight) {
    var data = {
        "op": "height",
        "size": newHeight + 50,
        "token": csrf
    };
    // console.log('adjusting secure height');
    // console.log(data);
    secureWindowProxy = new Porthole.WindowProxy('https://secure.ii.co.uk/webbroker2/proxy.jsp', 'parent');
    if (typeof window.postMessage !== 'function') {
        window.setTimeout(function() {
            secureWindowProxy.post(data)
        }, 500); //for legacy browser wait 500ms and then //send the message.
    } else {
        secureWindowProxy.post(data) //just send it for modern browsers
    }
}

function scrollNow(class_field) {
    console.log('anchoring');
    $('body').animate({
        scrollTop: $(class_field).offset().top
    }, 1000);
};

function riaBuyFund(sedol) {
    secureWindowProxy.post({
        "op": "regular-investments-choose-funds",
        "sedols": sedol,
        "token": csrf
    });
}

function buyFund(sedol) {
    secureWindowProxy.post({
        "op": "trade",
        "bos": "BUY",
        "epic": "",
        "isin": "",
        "sedol": sedol,
        "exchange": "L",
        "token": csrf
    });
}

function removeFund(element) {
    sedol = element.data('index');
    // fundsCollection.splice(element.data('index'),1);
    fundsCollection = $.grep(fundsCollection, function(e) {
        return e.sedol != sedol;
    });
    // console.log(fundsCollection)morningstarWindowProxy;
    Cookies.set('fundBasket', fundsCollection);
    reduceBasketCount();
    element.parent('li').hide();
}

function incrementBasketCount() {
    investmentCount++;
    $('#selected-investment-count').text(investmentCount);
    toggleInvestNow();
}

function reduceBasketCount() {
    investmentCount--;
    $('#selected-investment-count').text(investmentCount);
    toggleInvestNow();
}

function toggleInvestNow() {
    // console.log(investmentCount);
    if (investmentCount == 0) {
        $('#noFundsText').show();
        $('#buyBtn').hide();
    } else {
        $('#noFundsText').hide();
        $('#buyBtn').show();
    }
}

function checkFundExists(new_fund) {
    var already_added = false;
    // console.log('checkin if fund exists');
    $.each(fundsCollection, function(i, fundObject) {
        if (new_fund.sedol == fundObject.sedol) {
            already_added = true;
            // console.log('Already added: '+ already_added);
        }
    });
    if (already_added) {
        var title = 'Fund already added';
        var message = 'You have added ' + new_fund.name + ' in your basket already.';
        fundNotifiyError(title, message);
        anchorToTop();
        return true;
    } else {
        return false;
    }
}

function addFundToCollection(new_fund) {
    fundsCollection.push(new_fund);
}

function UpdateCookie() {
    Cookies.set('fundBasket', fundsCollection);
}

function basketLimitReached() {
    // console.log('limit reached');
    var title = 'Maximum Funds added';
    var message = 'It looks as though you are trying to add another fund to your basket. You can only regularly invest in 10 Funds. If you want to add another Fund, please delete one of the funds below.';
    fundNotifiyError(title, message);
    anchorToTop();
}

function buyFunds() {
    var array_of_sedols = [];
    $.each(fundsCollection, function(key, value) {
        array_of_sedols.push(value.sedol);
    });
    var sedols = array_of_sedols.join(',');
    // console.log(sedols)
    secureWindowProxy.post({
        "op": "regular-investments-choose-funds",
        "sedols": sedols,
        "token": csrf
    });
}

function toggleBasket() {
    $('.selected-investment-list').slideToggle('fast');
    $('.basket-header').toggleClass('open');
}
//sedol should be name
function fundNotifiy(fund) {
    $("#fund-basket ul").append("<li><a href='' class='removeFund' data-index='" + fund.sedol + "' style='float:right;padding:0px;'><i class='fa fa-times-circle' aria-hidden='true'></i></a>" + fund.name + " </li>");
    $('#basket-notification-success p span').text(fund.name);
    $.when($('#basket-notification-success').fadeIn('slow')).done(function() {});
    setTimeout(function() {
        $.when($('#basket-notification-success').fadeOut('slow')).done(function() {});
    }, 10000);
}

function anchorToTop() {
    var height = $('body').height();
    var data = {
        "op": "add-to-basket",
        "size": height + 300,
        "anchorOffset": 100,
        "token": csrf
    };
    if (typeof window.postMessage !== 'function') {
        window.setTimeout(function() {
            SecurewindowProxy.post(data)
        }, 500); //for legacy browser wait 500ms and then //send the message.
    } else {
        secureWindowProxy.post(data) //just send it for modern browsers
    }
}

function fundNotifiyError(title, message) {
    $('#basket-notification-error p').html(message);
    $('#basket-notification-error h3 span').html(title);
    $.when($('#basket-notification-error').fadeIn('slow')).done(function() {});
    setTimeout(function() {
        $.when($('#basket-notification-error').fadeOut('slow')).done(function() {});
    }, 10000);
}

function onMessage(messageEvent) {
    var proxyData = messageEvent.data;
    console.log(messageEvent);
    if (proxyData.op == 'height') {
        console.log('adjusting height of morningstar');
        //Check if the message is to adjust height
        $('#iframe-secure').height(proxyData.size);
        //in turn adjust secure iframe
        var mainHeight = $('#main').height();
        newHeight = proxyData.size + mainHeight + 100;
        adjustHeight(newHeight);
    } else if (proxyData.op == 'trade') {
        var epic = proxyData.epic;
        var exchange = proxyData.exchange;
        var isin = proxyData.isin;
        var secid = proxyData.secid;
        var sedol = proxyData.sedol;
        var bos = proxyData.bos;
        var data = {
            "op": "trade",
            "bos": bos,
            "epic": epic,
            "isin": isin,
            "secid": secid,
            "sedol": sedol,
            "exchange": exchange,
            "token": csrf
        };
        console.log(data);
        //buy signal
        // secureWindowProxy= new Porthole.WindowProxy('https://pptdw.tdwh-test.co.uk/webbroker2/proxy.jsp', 'parent');
        if (typeof window.postMessage !== 'function') {
            window.setTimeout(function() {
                secureWindowProxy.post(data)
            }, 500); //for legacy browser wait 500ms and then //send the message.
        } else {
            secureWindowProxy.post(data) //just send it for modern browsers
        }
        // Load model with Login and buy or choose an account
    } else if (proxyData.bos == 'scrollToTop') {} else if (proxyData["add-fund"]) {
        var fund = proxyData["add-fund"];
        console.log('adding fund');
        addFunds(fund);
    }
}

function addFunds(fund) {
    //New clicked on fund
    new_fund = {
        'sedol': fund.sedol,
        'name': fund.fundname
    };
    if (investmentCount >= 10) {
        //Only allowed 10
        basketLimitReached();
    } else {
        //Check the funds collection to see if it already exists
        if (!checkFundExists(new_fund)) {
            addFundToCollection(new_fund);
            UpdateCookie();
            incrementBasketCount();
            fundNotifiy(new_fund);
            anchorToTop();
        }
    }
}
jQuery(window).ready(function($) {
    //Onload get csrf
    csrf = GetCSRFURLParameter('CSRFTOKEN');
    console.log('here is the csrf token: ' + csrf);
    addCSRFURL();
    if ($('#iframe-secure').length) {
        console.log('creating window proxy for secure');
        secureWindowProxy = new Porthole.WindowProxy('https://secure.ii.co.uk/webbroker2/proxy.jsp', 'parent');
        secureWindowProxy.addEventListener(function(event) {
            console.log('something happened');
            console.log(event);
        });
        console.log('creating window proxy for morningstar');
        morningstarWindowProxy = new Porthole.WindowProxy('https://secure.ii.co.uk/webbroker2/proxy.jsp', 'iframe-secure');
        morningstarWindowProxy.addEventListener(onMessage);
        //check iframe scr - if it has ordertype=add then its the regular investing recommended funds iframe
        var string_to_check = 'ordertype=Add';
        if ($('#iframe-secure').attr('src').indexOf(string_to_check) >= 0) {
            if (Cookies.get('fundBasket') != undefined) {
                fundsCollection = $.parseJSON(Cookies.set('fundBasket'));
                investmentCount = fundsCollection.length;
                $('#selected-investment-count').text(investmentCount);
            } else {
                fundsCollection = [];
            }
            toggleInvestNow();
            $.each(fundsCollection, function(index, value) {
                $("#fund-basket ul").append("<li><a href='#' class='removeFund' data-index='" + value.sedol + "'  style='float:right;padding:0px;'><i class='fa fa-times-circle' aria-hidden='true'></i></a>" + value.name + " </li>");
            });
            $('#buyBtn').click(function(e) {
                e.preventDefault();
                buyFunds();
            });
            $('body').on('click', '.removeFund', function(e) {
                e.preventDefault();
                removeFund($(this));
            });
            $('.notification-close').click(function(e) {
                e.preventDefault();
                $('.basket-notification').hide();
            });
            $('.notification-view').click(function(e) {
                e.preventDefault();
                toggleBasket();
                $('.basket-notification').hide();
                secureWindowProxy.post({
                    "op": "height-with-anchor",
                    "size": height + 300,
                    "anchorOffset": 0,
                    "token": csrf
                });
            });
            $('#view-basket').click(function(e) {
                e.preventDefault();
                toggleBasket();
                $('.basket-notification').hide();
                SecurewindowProxy.post({
                    "op": "height-with-anchor",
                    "size": height + 300,
                    "anchorOffset": 0,
                    "token": csrf
                });
            });
        }
    } else {
        console.log('creating window proxy for secure');
        secureWindowProxy = new Porthole.WindowProxy('https://secure.ii.co.uk/webbroker2/proxy.jsp', 'parent');
        secureWindowProxy.addEventListener(function(event) {
            console.log('something happened');
            console.log(event);
        });
        var mainHeight = $('#main').height();
        adjustHeight(mainHeight);
    }
    /*
     * Quick Start funds functions 
     *
     */
    $('.qsf-buy').click(function(e) {
        console.log('buy clicked');
        e.preventDefault();
        if ($(this).attr('data-sedol')) {
            var sedol = $(this).attr('data-sedol');
            if (window.location.href.indexOf('ria-secure') != -1) {
                riaBuyFund(sedol);
            } else {
                buyFund(sedol);
            }
        }
    });
    $('.show-type').on('click', function() {
        var height = $('body').height();
        adjustHeightwithAnchor('.choice-container', height);
    });
    $('.show-fund').on('click', function() {
        var height = $('body').height();
        adjustHeightwithAnchor('.fund-wrap', height);
    });
    $('.qsf-toggler').on('click', function() {
        setTimeout(function() {
            var height = $('body').height() + 100;
            adjustHeight(height);
        }, 300);
    });
    $('.qsf-view-graph').on('click', function() {
        console.log('graph clicked');
        setTimeout(function() {
            var height = $('body').height() + 100;
            adjustHeight(height);
        }, 500);
    });
    $('.qsf-more').on('click', function() {
        console.log('read more');
        setTimeout(function() {
            var height = $('body').height() + 100;
            adjustHeight(height);
        }, 300);
    });
    // $('.expand-content').on('click', function(){
    //  setTimeout(function (){
    //      adjustHeight('.tool-wrap', scrollNow);
    //  }, 500);
    // });
});