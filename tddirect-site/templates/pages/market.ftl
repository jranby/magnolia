<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign currentSite = cmsfn.siteRoot(content)]
[#if content.market?has_content]
[#assign market = cmsfn.contentById(content.market, 'markets')!]
[#assign instrumentAlpha = market.instrumentAlpha!]
[#assign instrumentNumeric = market.instrumentNumeric!]
[/#if]

</head>
<body class="market[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    <!-- main -->
    <main id="main" class="container">

        [@cms.area name="alert" /]

        <!-- market-top -->
        <header id="market-top" class="row[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <div id="market-info" class="col-sm-8">

                <h1 class="market-title">${content.title}</h1>

                <!-- breadcrumbs -->
                <div class="breadcrumbs">
                    <ol class="breadcrumb">                 
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))!'#'}">Home</a></li>
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing'!}">Share Dealing</a></li>
                        <li class="active">${content.title}</li>
                    </ol>
                </div>
                <!-- / breadcrumbs -->

                <!-- investment-disclaimer -->
                <div id="investment-disclaimer" class="alert alert-warning remove-bottom" role="alert">
                    <p class="remove-bottom">The value of your investments can go up or down and you may get back less than you originally invested. Past performance is not a reliable indicator of future returns.</p>
                </div>
                <!-- / investment-disclaimer -->

            </div>

            <div id="market-data" class="col-sm-4">

                <h2 class="market-current"></h2>
                <h3 class="market-change"><span class="market-change-intro"></span> <i class="fa"></i> <span class="market-value-change"></span> <span class="market-percent-change"></span></h3>
                <p class="market-timestamp"></p>
                <p class="market-high"></p>
                <p class="market-low remove-bottom"></p>

            </div>

        </header>
        <!-- / market-top -->        

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-12">

                <div class="row">

                    <!-- market-chart-wrap -->
                    <div id="market-chart-wrap" class="col-md-8 text-center">

                        <h3 class="market-title">Chart</h3>

                        <div id="market-chart">
                            <div class="market-chart-preloader">
                                <img id="preloader" src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/preloader.gif" alt="Preloading" />
                            </div>                            
                        </div>

                        <div id="market-chart-btns" class="btn-group half-bottom" role="group" aria-label="...">
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
                    <!-- / market-chart-wrap -->

                    <!-- market-riser-fallers -->
                    <div id="market-riser-fallers" class="col-md-4">

                        <!-- market-feed -->
                        <div id="market-feed">
                    
                            <h3 class="market-title">Top Risers &amp; Fallers</h3>                          
                                        
                            <ul class="market-links cf">
                                <li class="market-link current" data-ebb="risers">Risers</li>
                                <li class="market-link" data-ebb="fallers">Fallers</li>
                            </ul>
                                        
                            <div id="market" class="market-content no-gutter cf">
                                <span class="market-disclaimer">Prices delayed by 15 minutes</span>
                                <div id="market-risers" class="col-xs-12"></div>
                                <div id="market-fallers" class="col-xs-12"></div>
                            </div>
                                        
                        </div>
                        <!-- / market-feed --> 

                    </div>
                    <!-- / market-riser-fallers -->

                </div>

            </div>
            <!-- / main-content -->

        </section>
        <!-- / main-content-wrap -->

        [#if currentSite == 'UK']
        [#assign market = cmsfn.contentByPath(content.@name?ensure_starts_with('/'), 'stocks')]
        [#assign stocks = cmsfn.children(market, 'stock')]
        [#if stocks?has_content]
        <!-- market-listed -->
        <section id="market-listed-wrap">
            <div class="row no-gutter">
                <div id="market-listed" class="col-md-12">
                    <h3 class="market-listed-title">${content.title} Listed Companies</h3>
                    <table class="table table-alt">
                        <thead>
                            <th>Epic</th>
                            <th>Company</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            [#list stocks as stock]
                            <tr>
                                <td>${stock.instrumentId!}</td>
                                <td>${stock.title!}</td>
                                <td></td>
                                <td class="text-center"><a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=trade&destination_bos=BUY&destination_isin=${stock.isin}&_ga=1.72054355.1193516141.1479265373" class="btn btn-orange btn-sm">Invest Now</a></td>
                                <td class="text-center"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+stock.@name!}" class="btn btn-green btn-sm">View Report</a></td>
                            </tr>
                            [/#list]
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <!-- / market-listed -->
        [/#if]
        [/#if]

        [@cms.area name="footer" /]

    </main>
    <!-- / main -->

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
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/moment/moment.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/amcharts.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/serial.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/plugins/dataloader/dataloader.js"></script>
    <script>
        var marketAlpha = '${instrumentAlpha!}';
        var marketNumeric = '${instrumentNumeric!}';
    </script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/market.js"></script>

    [@cms.area name="analytics" /]

</body>
</html>