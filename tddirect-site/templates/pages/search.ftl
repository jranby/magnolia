<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign term = ctx.getParameter('q')!?html]
[#if term?? && term?has_content]
[#assign funds = queryfn.getFunds(term)!]
[#assign stocks = queryfn.getStocks(term)!]
[#assign markets = queryfn.getMarkets(term)!]
[#assign articles = queryfn.getArticles(term)!]
[/#if]
[#assign allJson = '']
[#assign currentSite = cmsfn.siteRoot(content)!]

</head>
<body class="search[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    <!-- main -->
    <main id="main" class="container">
        
        <!-- main-top -->
        <header id="main-top" class="row">

            <h1 class="main-title">Search Results</h1>

            <!-- breadcrumbs -->
            <div class="breadcrumbs">
                <ol class="breadcrumb">
                    <li><a href="./">Home</a></li>
                    <li class="active">Search Results</li>
                </ol>
            </div>
            <!-- / breadcrumbs -->

            <!-- you-searched -->
            <form id="you-searched" action="${ctx.contextPath}/UK/search">
                <label>You Searched For: </label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="" name="q" id="search-term" value="${term!}" required>
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
            </form>
            <!-- / you-searched -->

            <!-- search-categories -->
            <section id="search-categories" class="taxonomy-navs">
                <nav class="taxonomy">
                    [#if markets?has_content && markets?size = 1]
                    <a href="#" class="label label-default term search-tab current" data-search-tab="markets">Markets ([#if markets?has_content]${markets?size}[#else]0[/#if])</span></a>
                    [#if stocks?size gt funds?size]
                    <a href="#" class="label label-default term search-tab" data-search-tab="stocks">Shares ([#if stocks?has_content]${stocks?size}[#else]0[/#if])</span></a>
                    <a href="#" class="label label-default term search-tab" data-search-tab="funds">Funds ([#if funds?has_content]${funds?size}[#else]0[/#if])</span></a>
                    [#else]
                    <a href="#" class="label label-default term search-tab" data-search-tab="funds">Funds ([#if funds?has_content]${funds?size}[#else]0[/#if])</span></a>
                    <a href="#" class="label label-default term search-tab" data-search-tab="stocks">Shares ([#if stocks?has_content]${stocks?size}[#else]0[/#if])</span></a>
                    [/#if]
                    [#else]
                    [#if stocks?size gt funds?size]
                    <a href="#" class="label label-default term search-tab current" data-search-tab="stocks">Shares ([#if stocks?has_content]${stocks?size}[#else]0[/#if])</span></a>
                    <a href="#" class="label label-default term search-tab" data-search-tab="funds">Funds ([#if funds?has_content]${funds?size}[#else]0[/#if])</span></a>
                    [#else]
                    <a href="#" class="label label-default term search-tab current" data-search-tab="funds">Funds ([#if funds?has_content]${funds?size}[#else]0[/#if])</span></a>
                    <a href="#" class="label label-default term search-tab" data-search-tab="stocks">Shares ([#if stocks?has_content]${stocks?size}[#else]0[/#if])</span></a>
                    [/#if]
                    <a href="#" class="label label-default term search-tab" data-search-tab="markets">Markets ([#if markets?has_content]${markets?size}[#else]0[/#if])</span></a>
                    [/#if]
                    <a href="#" class="label label-default term search-tab hidden" data-search-tab="articles">News &amp; Views ([#if articles?has_content]${articles?size}[#else]0[/#if])</span></a>
                    <a href="https://help.ii.co.uk/system/templates/selfservice/ii/help/customer/locale/en-GB/portal/402800000001013/search/${term!}" class="label label-default term" target="_blank">Help</a>
                </nav>
            </section>
            <!-- / search-categories -->

        </header>
        <!-- / main-top -->

        <!-- search-markets -->
        <section id="search-markets" class="row search-block">
            [#if markets?has_content]
            [#assign markets = cmsfn.asContentMapList(markets)]
            [#if markets?size gt 1]
            <div class="search-multiple">
                <h3 class="search-mid-title">Multiple results found in <strong>Markets</strong> for <strong>'${term!}'</strong></h3>
                <p class="search-suggestions">Did you mean:</p>
                <ul class="bullet-list">
                    [#list markets as market]
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/'+market.@name!}">${market.title!}</a></li>
                    [/#list]
                </ul>
            </div>
            [#else]
            [#list markets as market]
            [#assign marketAlpha = market.instrumentAlpha!]
            [#assign marketNumeric = market.instrumentNumeric!]
            [#assign articles = marketfn.getMarketArticles(5, 0, market.@uuid)]
            [#assign articlesAsList = cmsfn.asContentMapList(articles)]
            <div class="search-single">
                <div class="search-block-title-wrap">
                    <h2 class="search-block-title">${market.title!}</h2>
                </div>
                <div class="row">
                    <div id="market-search-news" class="col-md-3 search-block-news">
                        <h3 class="search-block-news-title">Latest News</h3>
                        <div class="search-block-articles">
                            [#if articlesAsList?has_content]
                            [#list articlesAsList as article]
                            <article class="search-block-article">
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article/'+article.@name!}">
                                    <p class="search-block-article-meta"><span class="search-block-article-date">${article.publishDate?string['dd/MM/yyyy']}</span><span class="search-block-article-time hidden"> - 08:54</span></p>
                                    <h4 class="search-block-article-title">${article.title!}</h4>
                                </a>
                            </article>
                            [/#list]
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/market/'+market.@name!}" class="btn btn-green">More News</a>
                            [#else]
                            <p class="half-bottom">There is currently no news regarding <strong>${market.title!}</strong> to display.</p>
                            <a href="http://ican.tddirectinvesting.co.uk/market-news/" target="_blank" class="btn btn-green">View Market News</a>
                            [/#if]
                        </div>
                    </div>
                    <div id="market-search-graph" class="col-md-9 search-block-graph">
                        <div class="market-chart-wrap text-center">
                            <div id="market-search-chart"></div>
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
                        <div id="market-search-data" class="row search-block-data">
                            <div class="col-md-4">
                                <p class="market-current"></p>
                                <p class="market-change"><span class="market-value-change"></span> <span class="market-percent-change"></span></p>
                            </div>
                            <div class="col-md-3">
                                <span class="market-high"></span>
                                <span class="market-low remove-bottom"></span>
                            </div>
                            <div class="col-md-5">
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/'+market.@name!}" class="btn btn-white">View Detailed Report</a>
                            </div>
                        </div>
                        <div id="market-search-disclaimer" class="row search-block-disclaimer">
                            <div class="col-md-12">
                                <p class="remove-bottom">The value of your investments can go up or down and you may get back less than you originally invested. Past performance is not a reliable indicator of future returns. All prices delayed by minimum of 15 minutes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            [/#list]
            [/#if]
            [#else]
            <div class="search-none">
                <h3 class="search-mid-title">No results for <strong>'${term!}'</strong> in <strong>Markets</strong></h3>
                <p class="search-suggestions">Suggestions: </p>
                <ul class="bullet-list">
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/ftse-100'!}">FTSE 100</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/ftse-250'!}">FTSE 250</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/ftse-techmark'!}">FTSE Techmark</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/dow-jones'!}">Dow Jones</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/nasdaq'!}">Nasdaq</a></li>
                </ul>
            </div>
            [/#if]
        </section>
        <!-- / search-markets -->

        <!-- search-stocks -->
        <section id="search-stocks" class="row search-block">
            [#if stocks?has_content]
            [#assign stocks = cmsfn.asContentMapList(stocks)]
            [#if stocks?size gt 1]
            <div class="search-multiple">
                <h3 class="search-mid-title">Multiple results found in <strong>Shares</strong> for <strong>'${term!}'</strong></h3>
                <p class="search-suggestions">Did you mean:</p>
                <ul class="bullet-list">
                    [#list stocks as stock]
                    [#assign allJson = jsonfn.appendFrom(allJson,stock).addAll().exclude("mgnl.*", "jcr.*").print() /]
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+stock.@name!}">${stock.title!}</a></li>
                    [/#list]
                </ul>
            </div>
            [#else]
            [#list stocks as stock]
            [#assign stockSedol = stock.sedol!]
            [#assign stockMarketId = stock.marketId!]
            [#assign stockAlpha = stock.instrumentId!]
            [#assign stockNumeric = stock.morningstarInstrumentId!]
            [#assign articles = stockfn.getStockArticles(5, 0, stock.@uuid)]
            [#assign articlesAsList = cmsfn.asContentMapList(articles)]
            [#assign allJson = jsonfn.from(stock).addAll().exclude("mgnl.*", "jcr.*").print() /]
            <div class="search-single">
                <div class="search-block-title-wrap">
                    <h2 class="search-block-title">${stock.title!} (${stock.instrumentId!})</h2>
                </div>
                <div class="row">
                    <div id="stock-search-news" class="col-md-3 search-block-news">
                        <h3 class="search-block-news-title">Latest News</h3>
                        <div class="search-block-articles">
                            [#if articlesAsList?has_content]
                            [#list articlesAsList as article]
                            <article class="search-block-article">
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article/'+article.@name!}">
                                    <p class="search-block-article-meta"><span class="search-block-article-date">${article.publishDate?string['dd/MM/yyyy']}</span><span class="search-block-article-time hidden"> - 08:54</span></p>
                                    <h4 class="search-block-article-title">${article.title!}</h4>
                                </a>
                            </article>
                            [/#list]
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/stock/'+stock.@name!}" class="btn btn-green hidden">More News</a>
                            <a href="http://ican.tddirectinvesting.co.uk/?s=${term!}" class="btn btn-green" target="_blank">More News</a>
                            [#else]
                            <p class="half-bottom">There is currently no news regarding <strong>${stock.title!}</strong> to display.</p>
                            <a href="http://ican.tddirectinvesting.co.uk/market-news/" target="_blank" class="btn btn-green">View Market News</a>
                            [/#if]
                        </div>
                    </div>
                    <div id="stock-search-graph" class="col-md-9 search-block-graph">
                        <div class="stock-chart-wrap text-center">
                            <div id="stock-search-chart"></div>
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
                        <div id="stock-search-data" class="row search-block-data">
                            <div class="col-md-4 search-pricing">
                                <p class="stock-current"></p>
                                <p class="stock-change"><span class="stock-value-change"></span> <span class="stock-percent-change"></span></p>
                            </div>
                            <div class="col-md-3 search-deets">
                                <span class="stock-high"></span>
                                <span class="stock-low remove-bottom"></span>
                                <span class="stock-isin"></span>
                                <span class="stock-volume"></span>
                            </div>
                            <div class="col-md-5 search-buy-buttons">
                                <a href="#" class="btn btn-orange stock-buy" data-sedol="${stock.sedol!}">Buy Now</a>
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+stock.@name!}#iframe-td" class="btn btn-white">View Detailed Report</a>
                            </div>
                        </div>
                        <div id="stock-search-disclaimer" class="row search-block-disclaimer">
                            <div class="col-md-12">
                                <p class="remove-bottom">The value of your investments can go up or down and you may get back less than you originally invested. Past performance is not a reliable indicator of future returns. All prices delayed by minimum of 15 minutes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            [/#list]
            [/#if]
            [#else]
            <div class="search-none">
                <h3 class="search-mid-title">No results for <strong>'${term!}'</strong> in <strong>Shares</strong></h3>
                <p class="search-suggestions hidden">Suggestions: <a href="#">Oh my goodness - stocks</a>, <a href="#">Oh my - stocks</a>, <a href="#">Barclays</a></p>
            </div>
            [/#if]
        </section>
        <!-- / search-stocks -->

        <!-- search-funds -->
        <section id="search-funds" class="row search-block">
            [#if funds?has_content]
            [#assign funds = cmsfn.asContentMapList(funds)]
            [#if funds?size gt 1]
            <div class="search-multiple">
                <h3 class="search-mid-title">Multiple results found in <strong>Funds</strong> for <strong>'${term!}'</strong></h3>
                <p class="search-suggestions">Did you mean:</p>
                <ul class="bullet-list">
                    [#list funds as fund]
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds/'+fund.@name!}">${fund.title!}</a></li>
                    [/#list]
                </ul>
            </div>
            [#else]
            [#list funds as fund]
            [#assign fundSedol = fund.sedol!]
            [#assign articles = fundfn.getFundArticles(5, 0, fund.@uuid)]
            [#assign articlesAsList = cmsfn.asContentMapList(articles)]
            <div class="search-single">
                <div class="search-block-title-wrap">
                    <h2 class="search-block-title">${fund.title!}</h2>
                </div>
                <div class="row">
                    <div id="fund-search-news" class="col-md-3 search-block-news">
                        <h3 class="search-block-news-title">Latest News</h3>
                        <div class="search-block-articles">
                            [#if articlesAsList?has_content]
                            [#list articlesAsList as article]
                            <article class="search-block-article">
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article/'+article.@name!}">
                                    <p class="search-block-article-meta"><span class="search-block-article-date">${article.publishDate?string['dd/MM/yyyy']}</span><span class="search-block-article-time hidden"> - 08:54</span></p>
                                    <h4 class="search-block-article-title">${article.title!}</h4>
                                </a>
                            </article>
                            [/#list]
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/fund/'+fund.@name!}" class="btn btn-green">More News</a>
                            [#else]
                            <p class="half-bottom">There is currently no news regarding <strong>${fund.title!}</strong> to display.</p>
                            <a href="http://ican.tddirectinvesting.co.uk/market-news/" target="_blank" class="btn btn-green">View Market News</a>
                            [/#if]
                        </div>
                    </div>
                    <div id="fund-search-chart" class="col-md-9 search-block-graph">
                        <div class="fund-graph-wrap text-center">
                            <div id="fund-search-graph"></div>
                        </div>
                        <div id="fund-search-data" class="row search-block-data">
                            <div class="col-md-4">
                                <p class="fund-current"></p>
                            </div>
                            <div class="col-md-3">
                                <span class="fund-type"></span>
                                <span class="fund-provider"></span>
                                <span class="fund-id"></span>
                                <span class="fund-sedol"></span>
                            </div>
                            <div class="col-md-5">
                                <a href="#" class="btn btn-orange fund-buy" data-sedol="${fund.sedol!}">Buy Now</a>
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds/'+fund.@name!}#iframe-td" class="btn btn-white">View Detailed Report</a>
                            </div>
                        </div>
                        <div id="fund-search-disclaimer" class="row search-block-disclaimer">
                            <div class="col-md-12">
                                <p class="remove-bottom">The value of your investments can go up or down and you may get back less than you originally invested. Past performance is not a reliable indicator of future returns. All prices delayed by minimum of 15 minutes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            [/#list]
            [/#if]
            [#else]
            <div class="search-none">
                <h3 class="search-mid-title">No results for <strong>'${term!}'</strong> in <strong>Funds</strong></h3>
                <p class="search-suggestions hidden">Suggestions: <a href="#">Oh my goodness - funds</a>, <a href="#">Oh my - funds</a>, <a href="#">Some Fund</a></p>
            </div>            
            [/#if]
        </section>
        <!-- / search-funds -->

        <!-- search-articles -->
        <section id="search-articles" class="row search-block hidden">
            [#if articles?has_content]
            [#if articles?size gt 1]
            <div class="search-multiple">
                <h3 class="search-mid-title">Multiple results found in <strong>Articles</strong> for <strong>'${term!}'</strong></h3>
                <p class="search-suggestions">Did you mean:</p>
            </div>
            [#else]
            [#list articles as article]
            [#assign articleMap = cmsfn.asContentMap(article)]
            <div class="search-single">
                <div class="search-block-title-wrap">
                    <h2 class="search-block-title">${articleMap.title!}</h2>
                </div>
                <div class="row">


                </div>
            </div>
            [/#list]
            [/#if]
            [#else]
            <div class="search-none">
                <h3 class="search-mid-title">No results for <strong>'${term!}'</strong> in <strong>News &amp; Views</strong></h3>
                <p class="search-suggestions hidden">Suggestions: <a href="#">Oh my goodness - funds</a>, <a href="#">Oh my - funds</a>, <a href="#">Some Article</a></p>
            </div>            
            [/#if]
        </section>
        <!-- / search-articles -->

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter">

            <!-- main-content -->
            <div id="main-content" class="col-md-12">

                [#if term?has_content]
                [#assign results = searchfn.searchContent('website', term, '/UK', 'mgnl:page') /]
                [#if results?has_content]
                <!-- search-results -->
                <div id="search-results" class="wrap">
                    [#list results as result]
                    [#if !result.hideFromSearch?has_content || result.hideFromSearch == false]
                    [#if !cmsfn.link(result)?contains('secure')]
                    <div class="row no-gutter result extra-width padded">
                        <div class="col-xs-12 col-md-8">
                            <h3 class="result-title"><a href="${cmsfn.link(result)}">${result.title!}</a></h3>
                            <a href="${cmsfn.link(result)}" class="result-link hidden">${cmsfn.link(result)}</a>
                            [#if result.description?has_content]
                            ${cmsfn.decode(result).description!}
                            [/#if]
                            <a href="${cmsfn.link(result)}">Read More</a>
                        </div>
                    </div>
                    [/#if]
                    [/#if]
                    [/#list]
                </div>
                <!-- / search-results -->

                <!-- pagination -->
				<nav aria-label="Search Navigation" class="hidden">
				    <ul class="pagination">
						<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
						<li><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
						<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
				    </ul>
				</nav>
				<!-- / pagination -->
                [#else]
                <!-- search-results -->
                <div id="search-results" class="wrap hidden">
                    <div class="row">
                        <div class="col-xs-12">
                            <h3 class="result-title">Sorry but there are no results matching your search.</h3>
                        </div>
                    </div>
                </div>
                <!-- / search-results -->
                [/#if]
                [/#if]

            </div>
            <!-- / main-content -->
            
        </section>
        <!-- / main-content-wrap -->

        [@cms.area name="footer" /]

    </main>
    <!-- / main -->

    <!-- iframe-modal -->
    <div class="modal fade modal-vertical-centered" id="iframe-modal" tabindex="-1" role="dialog" aria-labelledby="iframeModalLabel">
        
        <!-- modal-dialog -->
        <div class="modal-dialog" role="document">
            
            <!-- modal-content -->
            <div class="modal-content">
                
                <!-- modal-header -->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times-circle"></i></span></button>
                    <h3 class="modal-title" id="iframeModalLabel">Buy Selected Fund</h3>
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
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/pie.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/themes/light.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/plugins/dataloader/dataloader.js"></script>
    <script>
        var fundSedol = '${fundSedol!}';
        var stockSedol = '${stockSedol!}';
        var stockMarketId = '${stockMarketId!}';
        var stockAlpha = '${stockAlpha!}';
        var stockNumeric = '${stockNumeric!}';
        var marketAlpha = '${marketAlpha!}';
        var marketNumeric = '${marketNumeric!}';
    </script>    
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/search.js"></script>

    [@cms.area name="analytics" /]

</body>
</html>