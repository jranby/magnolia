<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign pageNode = state.getCurrentURI()]
[#assign currentSite = cmsfn.siteRoot(content)]
[#assign originalURL = state.originalURL!"http://localhost:8080" /]
[#assign article = ctx.getParameter('article')!?html]

</head>
<body class="news article[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    [#if article?has_content]
    [#assign articleData = cmsfn.contentByPath('/' + article, 'articles')]
    [#if articleData??]
    [#if articleData.banner?has_content]
    [#assign rendition = damfn.getRendition(articleData.banner,'1920')]
    <!-- hero-news -->
    <section id="hero-news" class="wrap" style="background-image: url(${rendition.getLink()!}); "></section>
    <!-- / hero-news -->
    [#else]
    <!-- hero-news -->
    <section id="hero-news" class="wrap"></section>
    <!-- / hero-news -->    
    [/#if]   
    [/#if]
    [/#if]

    <!-- main -->
    <main id="main" class="container">

        [@cms.area name="sharer" /]

        [#if articleData??]
        <!-- article-top-wrap -->
        <section id="article-top-wrap" class="row">
            <div class="col-md-12">
                
                <!-- article-top -->
                <div class="article-top">

                    [#if articleData.title?has_content]
                    <!-- article-title -->
                    <div class="article-title-wrap">
                        <h1 class="article-title"><span>${articleData.title!}</span></h1>
                    </div>
                    <!-- / article-title -->
                    [/#if]

                    <!-- article-meta -->
                    <div class="row article-meta">

                        <!-- article-date-cats -->
                        <div class="col-xs-8">
                            <span class="article-date">${articleData.publishDate?string['dd/MM/yyyy']}</span>
                            [#if articleData.categories?has_content]
                            in 
                            [#list articleData.categories as category]
                            [#assign cat = cmsfn.contentById(category, 'articlecategories')]
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/category/'+cat.@name!}" class="article-category">${cat.title!}</a>[#if category_has_next], [/#if]
                            [/#list]
                            [/#if]                        
                        </div>
                        <!-- / article-date-cats -->

                        [#if articleData.author?has_content]
                        <!-- article-author -->
                        <div class="col-xs-4 text-right">
                            [#assign author = cmsfn.contentById(articleData.author, 'articleauthors')]
                            BY <span class="article-author">${author.title!}</span>
                        </div>
                        <!-- / article-author -->
                        [/#if]

                    </div>    
                    <!-- / article-meta -->

                </div>
                <!-- / article-top -->

            </div>
        </section>
        <!-- / article-top-wrap -->

        <!-- news-risk-top -->
        <section id="news-risk-top" class="row text-center news-risk">
            <div class="col-xs-12">
                <p class="remove-bottom">TD Direct Investing (Europe) Limited has been sold to Interactive Investor Limited. The Toronto-Dominion Bank is not responsible for this communication or content herein. None of the information in any of our articles should be considered a personal recommendation to buy or sell based on your circumstances. Remember you may not get back all the money you invest.</p>
            </div>
        </section>
        <!-- / news-risk-top -->           

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

                    [#if block.showRelated?has_content && block.showRelated?c == 'true']
                    [#if articleData.related?has_content]
                    <!-- related-news -->
                    <section id="related-news" class="row">

                        <!-- related-news title -->
                        <div class="col-md-2">                      
                            <h4 class="related-news-title">Related News</h4>
                        </div>
                        <!-- /related-news title -->

                        [#list articleData.related as relatedArticle]
                        [#assign related = cmsfn.contentById(relatedArticle, 'articles')]
                        <!--related article-->
                        <div class="col-md-5 related-article">
                            <h5 class="related-article-title">${related.title!}</h5>
                            <span class="related-article-date">${related.publishDate?string['dd/MM/yyyy']}</span>
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article/'+related.@name!}" class="read-more">Read more</a>
                        </div>
                        <!--/related article-->
                        [/#list]
                        
                    </section>
                    <!-- / related-news -->
                    [/#if]
                    [/#if]
                    [/#if]
                    [/#list]
                    [/#if]

                </div>
                <!-- / article-content -->

                <!-- news-risk-bottom -->
                <section id="news-risk-bottom" class="row news-risk">
                    <p>Neither industry information nor third party recommendations reflect the opinion of TD Direct Investing, and publication on this website does not constitute an endorsement. Industry news is provided for information purposes only. Occasionally, an opinion about whether to buy a specific investment may be provided by third parties. The content in Investing News is not a personal recommendation, and is not provided based on an assessment of your investing knowledge and experience, your financial situation or your investment objectives.</p>
                    <p>Services offered on an execution-only basis. If you have any doubt over the suitability of a particular investment for you or if you are uncertain how the pensions rules affect your personal circumstances then you should seek independent financial advice.</p>
                    <p class="remove-bottom">Past performance is not a reliable indicator of future results.</p>
                </section>
                <!-- / news-risk-bottom -->

                [#if articleData.promo?has_content]
                [#assign promo = cmsfn.contentById(articleData.promo, 'articlepromos')]
                <!-- article-promo -->
                <section id="article-promo">
                    [#if promo.title?has_content]
                    <h4 class="article-promo-title">${promo.title!}</h4>
                    [/#if]
                    [#if promo.text?has_content]
                    <p class="article-promo-text">${promo.text!}</p>
                    [/#if]
                    <div class="row">
                        [#if promo.risk?has_content]
                        <div class="col-xs-12 col-md-8 article-promo-risk">
                            <p class="remove-bottom">${promo.risk!}</p>
                        </div>
                        [/#if]
                        [#if promo.buttonLink?has_content]
                        <div class="col-xs-12 col-md-4 article-promo-button">
                            [#if promo.buttonLink == 'linkInternal' ]
                            <a href="${cmsfn.link('website', promo.buttonLinklinkInternal)!}" class="btn btn-${promo.buttonType!'green'}">${promo.buttonText!'Learn More'}</a>
                            [#elseif promo.buttonLink == 'linkExternal' ]
                            <a href="${promo.buttonLinklinkExternal!}" class="btn btn-${promo.buttonType!'green'}" target="_blank">${promo.buttonText!'Learn More'}</a>
                            [#elseif promo.buttonLink == 'linkStock' ]
                            [#assign segments = promo.buttonLinklinkStock?split('/')]
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+segments?last!}" class="btn btn-${promo.buttonType!'green'}">${promo.buttonText!'Learn More'}</a>
                            [#elseif promo.buttonLink == 'linkFund' ]
                            [#assign segments = promo.buttonLinklinkFund?split('/')]
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds/'+segments?last!}" class="btn btn-${promo.buttonType!'green'}">${promo.buttonText!'Learn More'}</a>
                            [#elseif promo.buttonLink == 'linkAsset' ]
                            <a href="${damfn.getAssetLink(promo.buttonLinklinkAsset)!}" class="btn btn-${promo.buttonType!'green'}">${promo.buttonText!'Learn More'}</a>
                            [/#if]
                        </div>
                        [/#if]
                    </div>
                </section>
                <!-- / article-promo -->
                [/#if]

            </div>
        </section>
        <!-- / article-content-wrap -->

        [#if articleData.tags?has_content]
        <!-- article-tags -->
        <section id="article-tags" class="row taxonomy-navs">
            <div class="col-md-12">
                <h6 class="taxonomy-title">Tags:</h6>
                <nav class="taxonomy">
                    [#list articleData.tags as tag]
                    [#assign tagMap = cmsfn.contentById(tag, 'articletags')]
                    <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/tag/'+tagMap.@name!}" class="label label-default term">${tagMap.title!}</a>
                    [/#list]
                </nav>
            </div>
        </section>
        <!-- / article-tags -->
        [/#if]

        <!-- news-views-nav-wrap -->
        <section id="nv-nav-wrap" class="">
            
            <!-- news-views-nav-->
            <nav class="nv-nav">
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news'!}" class="nv-nav-link" id="nv-all"><i class="fa fa-caret-left"></i> News &amp; Views</a>
                <a href="#" class="nv-nav-link" id="nv-category"><i class="fa fa-caret-left"></i> Category</a>
                <a href="#" class="nv-nav-link" id="nv-search"><i class="fa fa-caret-left"></i> Search Results</a>
            </nav>
            <!-- / news-views-nav-->

        </section>
        <!-- / news-views-nav-wrap-->

        <!-- subscribe-box-->
        <section id="subscribe-box" class="subscribe-affix">
            
            <!-- subscribe-box-content-->
            <div class="subscribe-box-content">
                
                <h4>Keep up to date with TD Direct Investing...</h4>
                <ul>
                    <li>Latest IPOs and shares offers</li>
                    <li>Market news &#38; events</li>
                </ul>

                <!-- general-signup -->
                <form action="http://mail.tddirectinvesting.co.uk/interface/list.php" id="signup_form" method="post">
                    <div class="form-group">
                        <input type="email" id="email" name="email" class="form-control" placeholder="Email" required="">
                        <input type="hidden" name="accName" value="TDD_Marketing">
                        <input type="hidden" name="listName" value="Marketable IPO customers">
                        <input type="hidden" name="fullEmailValidationInd" value="Y">
                        <input type="hidden" name="doubleOptin" value="false">
                        <input type="hidden" name="successUrl" value="https://www.tddirectinvesting.co.uk/signup-thanks">
                        <input type="hidden" name="errorUrl" value="https://www.tddirectinvesting.co.uk/signup-errors">                                    
                    </div>                       
                    <div class="form-group half-bottom">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" id="checkbox" name="ConfirmedUKResident[]" value="Yes">
                                <span class="checkbox-label">Please confirm you are a mainland UK resident</span>
                            </label>
                        </div>
                    </div>
                    <div class="form-group subscribe-button-wrap remove-bottom">
                        <input type="submit" class="btn btn-green subscribe-submit submit-btn" value="Subscribe">
                    </div>                    
                </form>
                <!-- / general-signup -->

            </div>
            <!-- /subscribe-box-content-->

        </section>
        <!-- /subscribe-box-->

        [#if articleData.author?has_content]
        [#assign author = cmsfn.contentById(articleData.author, 'articleauthors')]
        [#if author?has_content]
        <!-- article-author -->
        <section id="article-author" class="row">
            <div class="col-md-12">
                <h6 class="article-author-title">About the Author:</h6>
                <div class="row">
                    <div class="col-xs-2 article-author-image">
                        [#if author.image?has_content]
                        [#assign rendition = damfn.getRendition(author.image, '100x100')!]
                        <img src="${rendition.getLink()!}" alt="${author.title!}">
                        [/#if]
                    </div>
                    <div class="col-xs-10 article-author-bio">
                        [#if author.bio?has_content]
                        <p>${author.bio!}</a>
                        [/#if]
                    </div>
                </div>

            </div>
        </section>
        <!-- / article-author -->
        [/#if]
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