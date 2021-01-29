<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign pageNode = state.getCurrentURI()!]
[#assign page = ctx.getParameter('page')!?html]
[#assign currentSite = cmsfn.siteRoot(content)!]
[#if page?has_content]
    [#assign curPage = page]
    [#assign offset = (page?number - 1) * 9]
[#else]
    [#assign curPage = 1]
    [#assign offset = 0]
[/#if]
[#if pageNode?contains('/category')]
    [#assign category = ctx.getParameter('category')!?html]
    [#if category?has_content]
    [#assign term = category]
    [#assign type = 'category']
    [#assign contento = cmsfn.contentByPath('/' + category, 'alliance-news-categories')]
    [#if !contento?has_content]${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'alliance-news')}[/#if]
    [#else]
    ${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'alliance-news')}
    [/#if]
    [#assign articles = alliancefn.getArticlesByCategory('/', 9, offset, contento.category)]
    [#assign articlesCount = alliancefn.getArticlesByCategoryCount(contento.category)]
[#else]
    [#assign term = '']
    [#assign type = 'alliance-news']
    [#assign contento = content]
    [#assign articles = alliancefn.getArticles('/', 9, offset)!]
    [#assign articlesCount = alliancefn.getArticlesCount()!]
[/#if]

</head>
<body class="ii-views archive[#if contento.@name?has_content] ${contento.@name!}[/#if][#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    <!-- hero-news -->
    <section id="hero-news" class="wrap">
        <div class="container">
            <div class="row">
                <div class="hero-title-wrap">
                    <h1 class="hero-title">Alliance News</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- / hero-news -->

    <!-- main -->
    <main id="main" class="container">

        [#if articles?has_content]
        <!-- articles-wrap -->
        <section id="articles-wrap">

            <div class="row">

                [#assign articlesAsList = cmsfn.asContentMapList(articles)]
                [#assign i = 0]
                [#list articlesAsList as article]
                <article class="col-md-4 article">
                    <div class="article-image half-bottom">
                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'alliance-news/article/'+article.@name!}" class="article-link">
                            <div class="article-overlay hidden">
                                <h3 class="article-title">${article.title!}</h3>
                            </div>
                        </a>
                    </div>
                    <div class="article-meta half-bottom">
                        <span class="article-date">${article.date!} at ${article.time!}</span> 
                    </div>
                    <div class="article-content">
                        [#if article.excerpt?has_content]
                        <p class="half-bottom">${cmsfn.abbreviateString(article.excerpt,184,'...')!}</p>
                        [/#if]
                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'alliance-news/article/'+article.@name!}" class="btn btn-white-alt">Read More</a>
                    </div>
                </article>
                [#assign i = i + 1]

            [#if (i % 3) == 0 && (article_has_next)]
            </div>

            <div class="row add-bottom">

            [/#if]
            [/#list]

            </div>

            [#if articlesCount > 9]
            [#assign totalPages = (articlesCount / 9)?ceiling]
            [#include "/tddirect-site/templates/macros/pagination.ftl"]
            [@pagination curPage?number totalPages?number type term /]
            [/#if]

        </section>
        <!-- / articles-wrap -->
        [/#if]

        <!-- news-risk-bottom -->
        <section id="news-risk-top" class="row text-center news-risk">
            <div class="col-xs-12">
                <p class="remove-bottom">Articles included here were originally published on iii.co.uk or publications within the Interactive Investor Limited group. Articles are for information and discussion purposes only and do not form a recommendation to invest or otherwise. The value of an investment may fall. The investments referred to in these articles may not be suitable for all investors, and if in doubt, an investor should seek advice from a qualified investment adviser.</p>
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