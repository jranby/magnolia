<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign pageNode = state.getCurrentURI()!]
[#assign page = ctx.getParameter('page')!?html]
[#assign currentSite = cmsfn.siteRoot(content)!]
[#assign iiViews = cmsfn.contentByPath('/ii-views', 'articlecategories')!]
[#assign article50 = cmsfn.contentByPath('/article-fifty', 'articlecategories')!]
[#if page?has_content]
    [#assign curPage = page]
    [#assign offset = (page?number - 1) * 9 + 1]
[#else]
    [#assign curPage = 1]
    [#assign offset = 1]
[/#if]
[#if pageNode?contains('/category')]
    [#assign category = ctx.getParameter('category')!?html]
    [#if category?has_content]
    [#assign term = category]
    [#if term == 'ii-views']
    [#assign offset = offset - 1]
    [/#if]
    [#assign type = 'category']
    [#assign contento = cmsfn.contentByPath('/' + category, 'articlecategories')]
    [#if !contento?has_content]${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'investment-news')}[/#if]
    [#else]
    ${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'investment-news')}
    [/#if]
    [#assign leadNode = model.getLatestArticleByCategory(contento.@uuid)!]
    [#assign leadMap = cmsfn.asContentMap(leadNode)!]
    [#assign data = leadMap]
    [#assign title = contento.title!]
    [#assign articles = model.getArticlesByCategory('/', 9, offset, contento.@uuid)]
    [#assign articlesCount = model.getArticlesByCategoryCount(contento.@uuid)]
[#elseif pageNode?contains('/tag')]
    [#assign tag = ctx.getParameter('tag')!?html]
    [#if tag?has_content]
    [#assign term = tag]
    [#assign type = 'tag']
    [#assign contento = cmsfn.contentByPath('/' + tag, 'articletags')]
    [#if !contento?has_content]${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'investment-news')}[/#if]
    [#else]
    ${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'investment-news')}
    [/#if]
    [#assign leadNode = model.getLatestArticleByTag(contento.@uuid)!]
    [#assign leadMap = cmsfn.asContentMap(leadNode)!]
    [#assign data = leadMap]
    [#assign title = contento.title!]
    [#assign articles = model.getArticlesByTag('/', 9, offset, contento.@uuid)]
    [#assign articlesCount = model.getArticlesByTagCount(contento.@uuid)]
[#elseif pageNode?contains('/fund')]
    [#assign fund = ctx.getParameter('fund')!?html]
    [#if fund?has_content]
    [#assign term = fund]
    [#assign type = 'fund']
    [#assign fund = fundfn.getFundNode(term)]
    [#assign contento = cmsfn.asContentMap(fund)]
    [#else]
    ${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'investment-news')}
    [/#if]
    [#assign leadNode = model.getLatestArticleByFund(contento.@uuid)!]
    [#assign leadMap = cmsfn.asContentMap(leadNode)!]
    [#assign data = leadMap]
    [#assign title = contento.title!]
    [#assign articles = model.getArticlesByFund('/', 9, offset, contento.@uuid)]
    [#assign articlesCount = model.getArticlesByFundCount(contento.@uuid)]
[#elseif pageNode?contains('/stock')]
    [#assign stock = ctx.getParameter('stock')!?html]
    [#if stock?has_content]
    [#assign term = stock]
    [#assign type = 'stock']
    [#assign stock = stockfn.getStockNode(term)]
    [#assign contento = cmsfn.asContentMap(stock)]
    [#else]
    ${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'investment-news')}
    [/#if]
    [#assign leadNode = model.getLatestArticleByStock(contento.@uuid)!]
    [#assign leadMap = cmsfn.asContentMap(leadNode)!]
    [#assign data = leadMap]
    [#assign title = contento.title!]
    [#assign articles = model.getArticlesByStock('/', 9, offset, contento.@uuid)]
    [#assign articlesCount = model.getArticlesByStockCount(contento.@uuid)]
[#elseif pageNode?contains('/market')]
    [#assign market = ctx.getParameter('market')!?html]
    [#if market?has_content]
    [#assign term = market]
    [#assign type = 'market']
    [#assign market = marketfn.getMarketNode(term)]
    [#assign contento = cmsfn.asContentMap(market)]
    [#else]
    ${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'investment-news')}
    [/#if]
    [#assign leadNode = model.getLatestArticleByMarket(contento.@uuid)!]
    [#assign leadMap = cmsfn.asContentMap(leadNode)!]
    [#assign data = leadMap]
    [#assign title = contento.title!]
    [#assign articles = model.getArticlesByMarket('/', 9, offset, contento.@uuid)]
    [#assign articlesCount = model.getArticlesByMarketCount(contento.@uuid)]
[#else]
    [#assign term = '']
    [#assign type = 'archive']
    [#assign contento = content]
    [#assign leadNode = model.getLatestArticle()!]
    [#assign leadMap = cmsfn.asContentMap(leadNode)!]
    [#assign data = leadMap]
    [#assign title = leadMap.title!]
    [#assign articles = model.getArticles('/', 9, offset)!]
    [#assign articlesCount = model.getArticlesCount()!]
[/#if]

</head>
<body class="news archive[#if contento.@name?has_content] ${contento.@name!}[/#if][#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    [#include '/tddirect-site/templates/macros/hero-news.ftl']
    [@hero type term data contento title /]

    <!-- main -->
    <main id="main" class="container">

        [#if !page?has_content]
        [#if leadMap?has_content] 
        <!-- lead-article-wrap -->
        <section id="lead-article-wrap" class="row">
            <div class="col-md-12">
                
                <!-- lead-article -->
                <article class="lead-article">

                    <!-- lead-article-title -->
                    <div class="lead-article-title-wrap">
                        <h1 class="lead-article-title"><span>${leadMap.title!}</span></h1>
                    </div>
                    <!-- / lead-article-title -->

                    <!-- lead-article-meta -->
                    <div class="row lead-article-meta">
                        
                        <!-- lead-article-date-cats -->
                        <div class="col-md-8">
                            <span class="lead-article-date">${leadMap.publishDate?string['dd/MM/yyyy']}</span>
                            [#if leadMap.categories?has_content]
                            in 
                            [#list leadMap.categories as category]
                            [#assign cat = cmsfn.contentById(category, 'articlecategories')]
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/category/'+cat.@name!}" class="lead-article-category">${cat.title!}</a>[#if category_has_next], [/#if]
                            [/#list]
                            [/#if]
                        </div>
                        <!-- / article-date-cats -->

                        [#if leadMap.author?has_content]
                        <!-- lead-article-author -->
                        <div class="col-md-4 text-right">
                            [#assign author = cmsfn.contentById(leadMap.author, 'articleauthors')]
                            BY <span class="lead-article-author">${author.title!}</span>
                        </div>
                        <!-- / lead-article-author -->
                        [/#if]

                    </div>    
                    <!-- / lead-article-meta -->

                    <!-- lead-article-content -->
                    <div class="row lead-article-content">
                        
                        <!-- lead-article-xx -->
                        <div class="col-md-8">
                            <p>${leadMap.excerpt!}</p>
                        </div>
                        <!-- / lead-article-xx -->

                        <!-- lead-article-xx -->
                        <div class="col-md-4 text-right">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article/'+leadMap.@name!}" class="btn btn-orange">Read More</a>
                        </div>
                        <!-- / lead-article-xx -->

                    </div>    
                    <!-- / lead-article-content -->

                </article>
                <!-- / lead-article -->

            </div>
        </section>
        <!-- / lead-article-wrap -->
        [/#if]
        [/#if]

        <!-- news-risk-top -->
        <section id="news-risk-top" class="row text-center news-risk">
            <div class="col-xs-12">
                <p class="remove-bottom">TD Direct Investing (Europe) Limited has been sold to Interactive Investor Limited. The Toronto-Dominion Bank is not responsible for this communication or content herein. None of the information in any of our articles should be considered a personal recommendation to buy or sell based on your circumstances. Remember you may not get back all the money you invest.</p>
            </div>
        </section>
        <!-- / news-risk-top -->

        [#assign articleCategories = model.getCategories()]
        [#if articleCategories?has_content]
        <!-- archive-categories -->
        <section id="archive-categories" class="row taxonomy-navs">
            <div class="col-md-12">
                [#assign articleCategoriesAsList = cmsfn.asContentMapList(articleCategories)]
                <h6 class="taxonomy-title">Categories:</h6>
                <nav class="taxonomy">
                    [#list articleCategoriesAsList as cat]
                    [#if cat.@name != 'service-improvements' && cat.@name != 'ii-views']
                    <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/category/'+cat.@name!}" class="label label-default term">${cat.title!}</a>
                    [/#if]
                    [/#list]
                    <a href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views'!}" class="label label-default term">ii Views</a>
                </nav>
            </div>
        </section>
        <!-- / archive-categories -->
        [/#if]

        [#if articles?has_content]
        <!-- articles-wrap -->
        <section id="articles-wrap">

            <div class="row">

                [#assign articlesAsList = cmsfn.asContentMapList(articles)]
                [#assign i = 0]
                [#list articlesAsList as article]
                <article class="col-md-4 article">
                    <div class="article-image half-bottom">
                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article/'+article.@name!}" class="article-link">
                            [#if article50?has_content && article.categories?has_content && article.categories?seq_contains(article50.@uuid)]
                            <img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/news/article-50-badge.png" alt="Article 50" class="article-50-badge">
                            [#elseif iiViews?has_content && article.categories?has_content && article.categories?seq_contains(iiViews.@uuid)]
                            <img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/news/ii-badge.png" alt="Article 50" class="article-50-badge">
                            [/#if]
                            [#if article.featured?has_content]
                            [#assign rendition = damfn.getRendition(article.featured, "700x420")]
                            [#assign featured = damfn.getAsset(article.featured)!]            
                            <img src="${rendition.getLink()}" alt="${article.title}">
                            [/#if]
                            <div class="article-overlay">
                                <h3 class="article-title">${article.title!}</h3>
                            </div>
                        </a>
                    </div>
                    <div class="article-meta half-bottom">
                        <span class="article-date">${article.publishDate?string['dd/MM/yyyy']}</span> 
                        [#if article.categories?has_content]
                        in 
                        [#list article.categories as category]
                        [#assign cat = cmsfn.contentById(category, 'articlecategories')]
                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/category/'+cat.@name!}" class="article-category">${cat.title!}</a>[#if category_has_next], [/#if]
                        [/#list]
                        [/#if]
                    </div>
                    <div class="article-content">
                        [#if article.excerpt?has_content]
                        <p class="half-bottom">${cmsfn.abbreviateString(article.excerpt,184,'...')!}</p>
                        [/#if]
                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article/'+article.@name!}" class="btn btn-white-alt">Read More</a>
                    </div>
                </article>
                [#assign i = i + 1]

            [#if (i % 3) == 0 && (article_has_next)]
            </div>

            <div class="row add-bottom">

            [/#if]
            [/#list]

            </div>

            [#if (articlesCount - 1) > 9]
            [#assign totalPages = (articlesCount / 9)?ceiling]
            [#include "/tddirect-site/templates/macros/pagination.ftl"]
            [@pagination curPage?number totalPages?number type term /]
            [/#if]

        </section>
        <!-- / articles-wrap -->
        [/#if]

        <!-- news-risk-bottom -->
        <section id="news-risk-bottom-alt" class="row text-center news-risk">
            <div class="col-xs-12">
                <p>Neither industry information nor third party recommendations reflect the opinion of TD Direct Investing, and publication on this website does not constitute an endorsement. Industry news is provided for information purposes only. Occasionally, an opinion about whether to buy a specific investment may be provided by third parties. The content in Investing News is not a personal recommendation, and is not provided based on an assessment of your investing knowledge and experience, your financial situation or your investment objectives.</p>
                <p>Services offered on an execution-only basis. If you have any doubt over the suitability of a particular investment for you or if you are uncertain how the pensions rules affect your personal circumstances then you should seek independent financial advice.</p>
                <p class="remove-bottom">Past performance is not a reliable indicator of future results.</p>
            </div>
        </section>
        <!-- / news-risk-bottom -->

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
    [#if contento.cookieName?has_content && !cmsfn.editMode]
    <script>
        var cookieName = '${contento.cookieName!}';
        [#if contento.cookieValue?has_content]
        var cookieValue = [#if contento.cookieValue?is_number]${contento.cookieValue!}[#else]'${contento.cookieValue!}'[/#if];
        [#else]
        var cookieValue = 1;
        [/#if]
        var cookieLength = ${contento.cookieLength!30};
        Cookies.set(cookieName, cookieValue, { expires: cookieLength });
    </script>
    [/#if]
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/fitvids/jquery.fitvids.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
                
    [@cms.area name="analytics" /]

</body>
</html>