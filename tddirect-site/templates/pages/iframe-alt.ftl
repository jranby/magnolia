<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign currentSite = cmsfn.siteRoot(content)]

</head>
<body class="iframe[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

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

        [@cms.area name="alert" /]
        
        [@cms.area name="main-top" /]

        [@cms.area name="section-choices" /]

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter has-sidebar[#if content.alertDisplay?has_content && content.alertDisplay == true] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-8[#if content.reducePadding?has_content && content.reducePadding == true][/#if]">

                [@cms.area name="main-content" /]

                [#if content.iframeSrc?has_content]
                <!-- iframe -->
                <div class="iframe-container">
                    <iframe src="${content.iframeSrc}" id="iframe-td" name="iframe-td" [#if content.iframeHeight?has_content]style="height:${content.iframeHeight}px;"[#else]style="height:1040px;"[/#if]></iframe>
                </div>
                <!-- / iframe -->
                [/#if]

                [@cms.area name="main-bottom" /]

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
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/fitvids/jquery.fitvids.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>

    [@cms.area name="analytics" /]

</body>
</html>