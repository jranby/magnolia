<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign pageNode = state.getCurrentURI()]
[#assign currentSite = cmsfn.siteRoot(content)]
[#assign originalURL = state.originalURL!"http://localhost:8080" /]

</head>
<body class="glossary[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

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
    <section id="hero-alt" class="wrap" style="background-image: url(${rendition.getLink()!}); "></section>
    <!-- / hero-alt -->
    [#else]
    <!-- hero-alt -->
    <section id="hero-alt" class="wrap"></section>
    <!-- / hero-alt -->    
    [/#if]

    <!-- main -->
    <main id="main" class="container">

        [@cms.area name="alert" /]

        [@cms.area name="main-top" /]

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-12">           

                <nav id="glossary-links" class="btn-group add-bottom">
                    <a href="#0-9" class="btn btn-default glossary-link">0-9</a>
                    <a href="#a" class="btn btn-default glossary-link">A</a>
                    <a href="#b" class="btn btn-default glossary-link">B</a>
                    <a href="#c" class="btn btn-default glossary-link">C</a>
                    <a href="#d" class="btn btn-default glossary-link">D</a>
                    <a href="#e" class="btn btn-default glossary-link">E</a>
                    <a href="#f" class="btn btn-default glossary-link">F</a>
                    <a href="#g" class="btn btn-default glossary-link">G</a>
                    <a href="#h" class="btn btn-default glossary-link">H</a>
                    <a href="#i" class="btn btn-default glossary-link">I</a>
                    <a href="#j" class="btn btn-default glossary-link">J</a>
                    <a href="#k" class="btn btn-default glossary-link">K</a>
                    <a href="#l" class="btn btn-default glossary-link">L</a>
                    <a href="#m" class="btn btn-default glossary-link">M</a>
                    <a href="#n" class="btn btn-default glossary-link">N</a>
                    <a href="#o" class="btn btn-default glossary-link">O</a>
                    <a href="#p" class="btn btn-default glossary-link">P</a>
                    <a href="#q" class="btn btn-default glossary-link">Q</a>
                    <a href="#r" class="btn btn-default glossary-link">R</a>
                    <a href="#s" class="btn btn-default glossary-link">S</a>
                    <a href="#t" class="btn btn-default glossary-link">T</a>
                    <a href="#u" class="btn btn-default glossary-link">U</a>
                    <a href="#v" class="btn btn-default glossary-link">V</a>
                    <a href="#w" class="btn btn-default glossary-link">W</a>
                    <a href="#x" class="btn btn-default glossary-link">X</a>
                    <a href="#y" class="btn btn-default glossary-link">Y</a>
                    <a href="#z" class="btn btn-default glossary-link">Z</a>
                </nav>

                [@cms.area name="main-content" /]

            </div>
            <!-- / main-content -->

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
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
                
    [@cms.area name="analytics" /]

</body>
</html>