<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign pageNode = state.getCurrentURI()]
[#assign currentSite = cmsfn.siteRoot(content)]

</head>
<body class="home[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]
    
    [@cms.area name="header" /]

    [@cms.area name="notice" /]

    [@cms.area name="hero" /]

    <!-- main -->
    <main id="main" class="container">
        
        [@cms.area name="helper"/]

        <!-- front-widgets -->
        <section id="front-widgets" class="row">
            [@cms.area name="front-widgets"/]

        </section>
        <!-- / front-widgets -->

        [@cms.area name="spiel" /]

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
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>

    [@cms.area name="analytics" /]

</body>
</html>