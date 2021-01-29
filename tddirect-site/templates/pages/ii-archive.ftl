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
    [#assign contento = cmsfn.contentByPath('/' + category, 'ii-views-categories')]
    [#if !contento?has_content]${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'ii-views')}[/#if]
    [#else]
    ${ctx.response.sendRedirect(cmsfn.link(cmsfn.siteRoot(content))+'ii-views')}
    [/#if]
    [#assign articles = iifn.getArticlesByCategory('/', 9, offset, contento.@uuid)]
    [#assign articlesCount = iifn.getArticlesByCategoryCount(contento.@uuid)]
[#else]
    [#assign term = '']
    [#assign type = 'ii-archive']
    [#assign contento = content]
    [#assign articles = iifn.getArticles('/', 9, offset)!]
    [#assign articlesCount = iifn.getArticlesCount()!]
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
                    <img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/ii/ii_logo_200.png" alt="Interactive Investor Views" class="hero-logo" />
                    <h1 class="hero-title">Interactive Investor Views</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- / hero-news -->

    <!-- main -->
    <main id="main" class="container">

        [#if !page?has_content]
        <!-- ii-intro-wrap -->
        <section id="ii-intro-wrap" class="row">
            <div class="col-md-12 text-center">
                <h1>Welcome to ii Views</h1>
                <p class="remove-bottom">In time your service will be enhanced to bring you a more comprehensive selection of market news and investment ideas. In the meantime you can access some of ii's latest views here.</p>
            </div>
        </section>
        <!-- / ii-intro-wrap -->        
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
                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views/article/'+article.@name!}" class="article-link">
                            <img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/news/ii-badge.png" alt="ii Views" class="article-50-badge">
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
                    </div>
                    <div class="article-content">
                        [#if article.excerpt?has_content]
                        <p class="half-bottom">${cmsfn.abbreviateString(article.excerpt,184,'...')!}</p>
                        [/#if]
                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views/article/'+article.@name!}" class="btn btn-white-alt">Read More</a>
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