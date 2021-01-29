<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign currentSite = cmsfn.siteRoot(content)]

</head>
<body class="contact[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    [#if content.bgImage?has_content]
    [#assign rendition = damfn.getRendition(content.bgImage,'1920')]
    <!-- hero-alt -->
    <section id="hero-alt" class="wrap" style="background-image: url(${rendition.getLink()}); "></section>
    <!-- / hero-alt -->
    [#else]
    <!-- hero-alt -->
    <section id="hero-alt" class="wrap"></section>
    <!-- / hero-alt -->    
    [/#if]

    <!-- main -->
    <main id="main" class="container">
        
        [@cms.area name="main-top" /]

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter has-sidebar">

            <!-- main-content -->
            <div id="main-content" class="col-md-8">

                [@cms.area name="contact-blocks" /]

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