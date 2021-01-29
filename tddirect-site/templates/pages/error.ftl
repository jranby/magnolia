<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign currentSite = cmsfn.siteRoot(content)]

</head>
<body class="error[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

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

            <div class="col-xs-12 col-md-9 col-lg-9">
                <h1 class="main-title half-bottom">We’re sorry, we can’t<br />seem to find that page...</h1>
                <p class="remove-bottom">We have recently updated our site and the page you’re looking for may have changed or may no longer exist.</p>
            </div>

            <div class="col-xs-12 col-md-3 col-lg-3 hidden">
                <img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/gifs/lionel.gif" alt="Hello">
            </div>            

        </header>
        <!-- / main-top -->

        [#if currentSite == 'UK']
        <!-- error-blocks -->
        <section id="error-blocks" class="row">

            <div class="col-xs-12">
                <p>Here’s a list of our most popular pages - you may find what you’re looking for here.</p>
            </div>

            <div class="col-xs-12 col-md-3 error-block">
                <h4 class="error-block-title">Accounts</h4>
                <ul class="error-links">
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing'!}">Share Dealing</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'stocks-and-shares-isa'!}">Stocks &amp; Shares ISA</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp'!}">SIPP</a></li>
                </ul>
            </div>            

            <div class="col-xs-12 col-md-3 error-block">
                <h4 class="error-block-title">Investments</h4>
                <ul class="error-links">
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares'!}">Shares</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/us-and-international'!}">US &amp; International Shares</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds'!}">Investment Funds</a></li>
                </ul>
            </div>

            <div class="col-xs-12 col-md-3 error-block">
                <h4 class="error-block-title">Pensions</h4>
                <ul class="error-links">
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp'!}">SIPP</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/transfer-my-pension'!}">Transfer Your Pension</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/pension-calculator'!}">Pension Calculator</a></li>
                </ul>
            </div>

            <div class="col-xs-12 col-md-3 error-block">
                <h4 class="error-block-title">Help &amp; Support</h4>
                <ul class="error-links">
                    <li><a href="https://help.ii.co.uk/system/templates/selfservice/ii/help/customer/locale/en-GB/portal/402800000001013" target="_blank">Help Centre</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'contact-us'!}">Contact Us</a></li>
                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'glossary'!}">Glossary</a></li>
                </ul>
            </div>                                    

        </section>
        <!-- error-blocks -->

        <!-- get-searching -->
        <section id="get-searching" class="row">

            <div class="col-xs-12">
                
                <p class="add-bottom">Alternatively, you can search below.</p>

                <!-- main-search -->
                <form id="main-search" class="navbar-form" action="${ctx.contextPath}/UK/search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search here..." name="q" id="search-term">
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </form>
                <!-- / main-search -->             

            </div>

        </section>
        <!-- / get-searching -->
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
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/fitvids/jquery.fitvids.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>

    [@cms.area name="analytics" /]

</body>
</html>