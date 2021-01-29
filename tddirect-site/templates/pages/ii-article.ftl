<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign pageNode = state.getCurrentURI()]
[#assign currentSite = cmsfn.siteRoot(content)]
[#assign article = ctx.getParameter('article')!?html]

</head>
<body class="ii-views article[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    <!-- ii-banner -->
    <section id="ii-banner" class="wrap">
        <div class="container">
            <div class="row">
                <div class="ii-banner-wrap">
                    <img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/ii/ii_logo_200.png" alt="Interactive Investor Views" class="ii-logo" />
                </div>
            </div>
        </div>
    </section>
    <!-- / ii-banner -->

    [#if article?has_content]
    [#assign articleData = cmsfn.contentByPath('/' + article, 'ii-views-articles')]
    <!-- main -->
    <main id="main" class="container">

        [#if articleData??]
        <!-- article-top-wrap -->
        <section id="article-top-wrap" class="row half-top">

            <!-- article-image -->
            <div class="col-md-2 hidden-xs hidden-sm article-image">
                [#assign rendition = damfn.getRendition(articleData.featured, "125x125")]
                [#assign featured = damfn.getAsset(articleData.featured)!]
                <img src="${rendition.getLink()}" alt="${articleData.title}">
            </div>
            <!-- / article-image -->
                
            <!-- article-top -->
            <div class="col-sm-12 col-md-10 article-top">

                [#if articleData.title?has_content]
                <div class="row">
                    <div class="col-md-12 col-lg-9 half-bottom">
                        <!-- article-title -->
                        <h1 class="article-title"><span>${articleData.title!}</span></h1>   
                        <!-- / article-title -->
                    </div>
                </div>
                [/#if]

                <!-- article-author -->
                <div class="article-author">
                    [#if articleData.author?has_content]
                    [#assign author = cmsfn.contentById(articleData.author, 'ii-views-authors')]
                    <p>By <span class="article-author">${author.title!}</span></p>
                    <div class="row">
                        <div class="col-xs-9">
                            [#if author.bio?has_content]
                            <p>${author.bio!}</p>
                            [/#if]
                        </div>
                        <div class="col-xs-3">
                            [#if author.image?has_content]
                            [#assign rendition = damfn.getRendition(author.image, '125x125')!]
                            <img src="${rendition.getLink()!}" alt="${author.title!}" class="pull-right">
                            [/#if]
                        </div>
                    </div>
                    [/#if]
                </div>    
                <!-- / article-author -->

            </div>
            <!-- / article-top -->

        </section>
        <!-- / article-top-wrap -->

        <!-- article-content-wrap -->
        <section id="article-content-wrap" class="row">
            <div class="col-md-12">
                
                <!-- article-content -->
                <div class="article-content">

                    [#if articleData?has_content]
                    [#list cmsfn.children(articleData) as block]
                    [#if block.@name?starts_with("section")]
                    <!-- article-block -->
                    <div id="${block.@uuid}" class="article-block">
                        [#if block.intro?has_content]
                        
                        <!-- article-intro -->
                        <div class="article-inner-block article-intro">
                            <h3>${block.intro!}</h3>
                        </div>
                        <!-- / article-intro -->
                        [/#if]
                        [#if block.text?has_content]

                        <!-- article-text -->
                        <div class="article-inner-block article-text">
                            ${cmsfn.decode(block).text!}
                        </div>
                        <!-- / article-text -->
                        [/#if]
                        [#if block.imageSrc?has_content]

                        <!-- article-image -->
                        <div class="article-inner-block article-image">
                            [#assign rendition = damfn.getRendition(block.imageSrc,'960')]
                            <figure>
                                [#if block.imageLink?has_content]
                                [#if block.imageLinkinternal?has_content]
                                <a href="${cmsfn.link("website", block.imageLinkinternal)!}"><img src="${rendition.getLink()!}" alt="${articleData.title}"></a>
                                [#elseif block.imageLinkexternal?has_content]
                                <a href="${block.imageLinkexternal!}" target="_blank"><img src="${rendition.getLink()!}" alt="${articleData.title}"></a>
                                [#elseif block.imageLinkstock?has_content]
                                [#assign segments = block.imageLinkstock?split('/')]
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+segments?last!}"><img src="${rendition.getLink()!}" alt="${articleData.title}"></a>
                                [#elseif block.imageLinkfund?has_content]
                                [#assign segments = block.imageLinkfund?split('/')]
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds/'+segments?last!}"><img src="${rendition.getLink()!}" alt="${articleData.title}"></a>
                                [#elseif block.imageLinkarticle?has_content]
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article'+block.imageLinkarticle!}"><img src="${rendition.getLink()!}" alt="${articleData.title}"></a>
                                [#elseif block.imageLinkasset?has_content]
                                <a href="${damfn.getAssetLink(block.imageLinkasset)!}"><img src="${rendition.getLink()!}" alt="${articleData.title}"></a>
                                [#else]
                                <img src="${rendition.getLink()!}" alt="${articleData.title}">
                                [/#if]
                                [/#if]
                                [#if block.imageCaption?has_content]
                                <figcaption class="article-image-caption">${block.imageCaption!}</figcaption>
                                [/#if]
                            </figure>
                        </div>
                        <!-- / article-image -->
                        [/#if]
                        [#if block.video?has_content]

                        <!-- article-video -->
                        <div class="article-inner-block article-video">
                            ${cmsfn.decode(block).video!}
                        </div>
                        <!-- / article-video -->
                        [/#if]

                    </div>
                    <!-- / article-block -->
                    [/#if]
                    [/#list]
                    [/#if]

                </div>
                <!-- / article-content -->

                <!-- news-risk-bottom -->
                <section id="news-risk-bottom" class="row news-risk">
                    <p>This article was originally published on iii.co.uk or publications within the Interactive Investor Limited group. Neither industry information nor third party recommendations reflect the opinion of TD Direct Investing. Articles are for information and discussion purposes only and are not intended to be a personal recommendation to invest and is not provided based on an assessment of your investing knowledge and experience, your financial situation or your investment objectives.</p>
                    <p>The value of an investment may fall and you may not get back all the money you invest. Services offered on an execution-only basis. If you have any doubt over the suitability of a particular investment for you or if you are uncertain how the pension rules affect your personal circumstances then you should seek independent financial advice.</p>
                    <p class="remove-bottom">Past performance is not a reliable indicator of future results.</p>
                </section>
                <!-- / news-risk-bottom -->

            </div>
        </section>
        <!-- / article-content-wrap -->

        <!-- news-views-nav-wrap -->
        <section id="nv-nav-wrap" class="">
            
            <!-- news-views-nav-->
            <nav class="nv-nav">
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views'!}" class="nv-nav-link" id="nv-all"><i class="fa fa-caret-left"></i> ii Views</a>
                <a href="#" class="nv-nav-link" id="nv-category"><i class="fa fa-caret-left"></i> Category</a>
                <a href="#" class="nv-nav-link" id="nv-search"><i class="fa fa-caret-left"></i> Search Results</a>
            </nav>
            <!-- / news-views-nav-->

        </section>
        <!-- / news-views-nav-wrap-->
        [/#if]

        [@cms.area name="footer" /]

    </main>
    <!-- / main -->
    [/#if]

    <!-- disclaimers -->
    <div id="disclaimers" class="wrap">

        [@cms.area name="cookie" /]

    </div>
    <!-- / disclaimers -->

    <!-- JS -->
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/jquery.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/bootstrap.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/cookie/js.cookie.js"></script>
    [#if articleData??]
    [#if articleData.cookieName?has_content && !cmsfn.editMode]
    <script>
        var cookieName = '${articleData.cookieName!}';
        [#if articleData.cookieValue?has_content]
        var cookieValue = [#if articleData.cookieValue?is_number]${articleData.cookieValue}[#else]'${articleData.cookieValue}'[/#if];
        [#else]
        var cookieValue = 1;
        [/#if]
        var cookieLength = ${articleData.cookieLength!30};
        Cookies.set(cookieName, cookieValue, { expires: cookieLength });
    </script>
    [/#if]
    [/#if]
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/fitvids/jquery.fitvids.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
                
    [@cms.area name="analytics" /]

</body>
</html>