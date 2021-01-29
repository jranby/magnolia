<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign term = ctx.getParameter('stock')!?html]
[#if term?has_content]
[#assign stock = stockfn.getStockNode(term)]
[#assign stock = cmsfn.asContentMap(stock)]
[/#if]
[#assign currentSite = cmsfn.siteRoot(content)]

</head>
<body class="share-index[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    [#if stock?has_content]
    [#assign sedol = stock.sedol!]
    [#assign marketId = stock.marketId!]
    [#assign instrumentAlpha = stock.instrumentId!]
    [#assign instrumentNumeric = stock.morningstarInstrumentId!]
    [#assign articles = stockfn.getStockArticles(5, 0, stock.@uuid)]
    <!-- main -->
    <main id="main" class="container">

        [@cms.area name="alert" /]

        <!-- stock-top -->
        <header id="stock-top" class="row[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <div id="stock-info" class="col-sm-8">

                <h1 class="stock-title">${stock.title!} Share Price</h1>

                <!-- breadcrumbs -->
                <div class="breadcrumbs">
                    <ol class="breadcrumb">                 
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))!'#'}">Home</a></li>
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing'!}">Share Dealing</a></li>
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares'!}">Shares</a></li>
                        <li class="active">${stock.title!}</li>
                    </ol>
                </div>
                <!-- / breadcrumbs -->

                [#if stock.marketId?? && stock.marketId == 'US']
                <!-- investment-disclaimer -->
                <div id="investment-disclaimer" class="alert alert-warning add-bottom" role="alert">
                    <p class="remove-bottom">The value of your investments can go up or down and you may get back less than you originally invested. Past performance is not a reliable indicator of future results. The value of international investments may be affected by currency fluctuations which might reduce their value in sterling. We may receive two elements of commission in relation to international dealing - Trading Commission and our FX Charge. Please see our <a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}">Rates and Charges</a> for full details of the relevant costs.</p>
                </div>
                <!-- / investment-disclaimer -->
                [#else]
                <!-- investment-disclaimer -->
                <div id="investment-disclaimer" class="alert alert-warning half-bottom" role="alert">
                    <p class="remove-bottom">The value of your investments can go up or down and you may get back less than you originally invested. Past performance is not a reliable indicator of future returns.</p>
                </div>
                <!-- / investment-disclaimer -->
                [/#if]

            </div>

            <div id="stock-data" class="col-sm-4">

                <h2 class="stock-current"></h2>
                <h3 class="stock-change"><span class="stock-change-intro"></span> <i class="fa"></i> <span class="stock-value-change"></span> <span class="stock-percent-change"></span></h3>
                <p class="stock-timestamp"></p>

                <div id="stock-deets" class="row">
                    <div class="col-xs-12">
                        <span class="stock-last-close"></span>
                    </div>                    
                    <div class="col-xs-12">
                        <span class="stock-day-range"></span>
                    </div>
                    <div class="col-xs-12">
                        <span class="stock-isin"></span>
                    </div>                    
                    <div class="col-xs-12">
                        <span class="stock-volume"></span>
                    </div>                    
                </div>
                
                <div class="stock-buttons half-top">
                    <a href="#" class="btn btn-orange stock-buy" data-sedol="${sedol!}">Buy Now</a>
                    <a href="#iframe-td" class="btn btn-white view-report">View Detailed Report</a>
                </div>

            </div>

        </header>
        <!-- / stock-top -->

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-12">

                <div class="row add-bottom">
                    
                    <!-- stock-chart-wrap -->
                    <div id="stock-chart-wrap" class="[#if articles?has_content]col-md-8[#else]col-md-12[/#if] text-center">

                        <h3 class="stock-block-title">Chart</h3>

                        <div id="stock-chart">
                            <div class="stock-chart-preloader">
                                <img id="preloader" src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/preloader.gif" alt="Preloading" />
                            </div>                            
                        </div>

                        <div id="stock-chart-btns" class="btn-group half-bottom" role="group" aria-label="...">
                            <button type="button" class="btn btn-default switch-graph ydy hidden">Yesterday</button>
                            <button type="button" class="btn btn-default switch-graph last-close hidden">Last Close</button>
                            <button type="button" class="btn btn-default switch-graph tdy">Today</button>
                            <button type="button" class="btn btn-default switch-graph 1m">1m</button>
                            <button type="button" class="btn btn-default switch-graph 3m">3m</button>
                            <button type="button" class="btn btn-default switch-graph 6m">6m</button>
                            <button type="button" class="btn btn-default switch-graph ytd">YTD</button>
                            <button type="button" class="btn btn-default switch-graph 1y">1y</button>
                            <button type="button" class="btn btn-default switch-graph 3y">3y</button>
                            <button type="button" class="btn btn-default switch-graph 5y">5y</button>
                            <button type="button" class="btn btn-default switch-graph 10y">10y</button>
                        </div>

                    </div>
                    <!-- / stock-chart-wrap -->

                    [#if articles?has_content]
                    [#assign articlesAsList = cmsfn.asContentMapList(articles)]
                    [#if articlesAsList?has_content]
                    <!-- stock-news -->
                    <div id="stock-news" class="col-md-4">

                        <h3 class="stock-block-title">Latest News</h3>

                        <div class="stock-articles">                            
                            [#list articlesAsList as article]

                            <article class="stock-article">
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article/'+article.@name!}" class="stock-article-link">
                                    <p class="stock-article-meta"><span class="stock-article-date">06/01/2016</span> - <span class="stock-article-time">08:54</span></p>
                                    <h4 class="stock-article-title">${article.title!}</h4>
                                </a>
                            </article>
                            [/#list]
                            
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/stock/'+stock.@name!}" class="btn btn-green">More News</a>
                        
                        </div>

                    </div>
                    <!-- / stock-news -->
                    [/#if]
                    [/#if]

                </div>

                <div class="stock-buttons text-center add-bottom">
                    <a href="#" class="btn btn-orange stock-buy" data-sedol="${sedol!}">Buy Now</a>
                    <a href="#iframe-td" class="btn btn-white view-report">View Detailed Report</a>
                </div>

                [#if stock.iframeSrc?has_content]
                <!-- iframe -->
                <iframe width="100%" scrolling="no" frameborder="0" src="${stock.iframeSrc}" id="iframe-td" name="iframe-td" class="hidden"></iframe>
                <!-- / iframe -->
                [/#if]

            </div>
            <!-- / main-content -->

        </section>
        <!-- / main-content-wrap -->

        [@cms.area name="footer" /]

    </main>
    <!-- / main -->
    [#else]
    <!-- main -->
    <main id="main" class="container">

        [@cms.area name="alert" /]

        [@cms.area name="main-top" /]

        [@cms.area name="section-choices" /]

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter has-sidebar[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-8">

                [@cms.area name="main-content" /]

                [@cms.area name="radios" /]

            </div>
            <!-- / main-content -->
            
            <!-- sidebar -->
            <aside id="sidebar" class="col-sm-12 col-md-4">

                [@cms.area name="sidebar" /]

            </aside>
            <!-- / sidebar --> 

        </section>
        <!-- / main-content-wrap -->

        [@cms.area name="footer" /]

    </main>
    <!-- / main -->
    [/#if]

    <!-- iframe-modal -->
    <div class="modal fade modal-vertical-centered" id="iframe-modal" tabindex="-1" role="dialog" aria-labelledby="iframeModalLabel">
        
        <!-- modal-dialog -->
        <div class="modal-dialog" role="document">
            
            <!-- modal-content -->
            <div class="modal-content">
                
                <!-- modal-header -->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times-circle"></i></span></button>
                    <h3 class="modal-title" id="iframeModalLabel">Buy Selected Stock</h3>
                </div>
                <!-- / modal-header -->
                
                <!-- modal-body -->
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <p>Please remember that investments can fall as well as rise and you may not get back all the money that you invest.</p>
                            <p>If you’re unsure about the suitability of a particular investment or think you need a personal recommendation, you should speak to a suitably qualified financial adviser.</p>
                        </div>
                    </div>
                    <div class="row half-bottom padded">
                        <div class="col-md-6">
                            <h4>Already Have An Account?</h4>
                            <a class="btn btn-orange login-buy-link" href="">Login &amp; Buy</a>
                        </div>                      
                        <div class="col-md-6">
                            <h4>New Customer?</h4>
                            <a class="btn btn-green" href="${cmsfn.link(cmsfn.siteRoot(content))+'get-started'!}">Choose An Account</a>
                        </div>
                    </div>
                </div>
                <!-- / modal-body -->
                
                <!-- modal-footer -->
                <div class="modal-footer hidden">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                <!-- / modal-footer -->
            
            </div>
            <!-- / modal-content -->
        
        </div>
        <!-- / modal-dialog -->
    
    </div>
    <!-- / iframe-modal -->
    
    <!-- disclaimers -->
    <div id="disclaimers" class="wrap">

        [@cms.area name="cookie" /]

    </div>
    <!-- / disclaimers -->

    <!-- JS -->
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/jquery.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/bootstrap.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/cookie/js.cookie.js"></script>
    [#if content.cookieName?has_content && !cmsfn.editMode]
    <script>
        var cookieName = '${content.cookieName!}';
        [#if content.cookieValue?has_content]
        var cookieValue = [#if content.cookieValue?is_number]${content.cookieValue}[#else]'${content.cookieValue}'[/#if];
        [#else]
        var cookieValue = 1;
        [/#if]
        var cookieLength = ${content.cookieLength!30};
        Cookies.set(cookieName, cookieValue, { expires: cookieLength });
    </script>
    [/#if]
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/porthole/porthole.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/moment/moment.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/amcharts.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/serial.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/plugins/dataloader/dataloader.js"></script>
    <script>
        var marketId = '${marketId!}';
        var instrumentAlpha = '${instrumentAlpha!}';
        var instrumentNumeric = '${instrumentNumeric!}';
    </script>    
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/stock.js"></script>

    [@cms.area name="analytics" /]

</body>
</html>