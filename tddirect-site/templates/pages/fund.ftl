<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign term = ctx.getParameter('fund')!?html]
[#assign currentSite = cmsfn.siteRoot(content)!]
[#assign fund = fundfn.getFundNode(term)!]

</head>
<body class="fund[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    [#if currentSite == 'UK']
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLKD9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    [/#if]

    [@cms.area name="header" /]

    [#if fund?has_content]
    [#assign fund = cmsfn.asContentMap(fund)!]
    [#assign sedol = fund.sedol!]
    [#assign iframeSrc = fund.iframeSrc!]
    [#assign articles = fundfn.getFundArticles(5, 0, fund.@uuid)]
    <!-- main -->
    <main id="main" class="container">

        [@cms.area name="alert" /]

        <!-- fund-top -->
        <header id="fund-top" class="row[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <div id="fund-info" class="col-sm-8">

                <h1 class="fund-title">${fund.title!}</h1>

                <!-- breadcrumbs -->
                <div class="breadcrumbs">
                    <ol class="breadcrumb">                 
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))!'#'}">Home</a></li>
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds'!}">Investment Funds</a></li>
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds'!}">Funds</a></li>                    
                        <li class="active">${fund.title}</li>
                    </ol>
                </div>
                <!-- / breadcrumbs -->

                <!-- investment-disclaimer -->
                <div id="investment-disclaimer" class="alert alert-warning remove-bottom" role="alert">
                    <p class="remove-bottom">The value of your investments can go up or down and you may get back less than you originally invested. Past performance is not a reliable indicator of future returns.</p>
                </div>
                <!-- / investment-disclaimer -->

            </div>

            <div id="fund-data" class="col-sm-4">
                
                <h2 class="fund-current"></h2>
                <p class="fund-timestamp"></p>

                <div id="fund-deets" class="row">
                    <div class="col-xs-12">
                        <span class="fund-type"></span>
                    </div>
                    <div class="col-xs-12">
                        <span class="fund-provider"></span>
                    </div>
                    <div class="col-xs-12">
                        <span class="fund-id"></span>
                    </div>                    
                    <div class="col-xs-12">
                        <span class="fund-sedol"></span>
                    </div>                    
                </div>

                <div class="fund-buttons half-top">
                    <a href="#" class="btn btn-orange fund-buy" data-sedol="${sedol!}">Buy Now</a>
                    <a href="#iframe-td" class="btn btn-white view-report">View Detailed Report</a>
                </div>

            </div>

        </header>
        <!-- / share-top -->

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-12">

                <div class="row add-bottom">

                    <!-- fund-graph-wrap -->
                    <div id="fund-graph-wrap" class="col-md-9">

                        <h3 class="fund-block-title">Performance growth of £1,000 as at today's date.</h3>

                        <div id="fund-graph"></div>

                    </div>
                    <!-- / fund-graph-wrap -->

                    <!-- fund-chart-wrap -->
                    <div id="fund-chart-wrap" class="col-md-3">

                        <h3 class="fund-block-title text-center">Pie Chart</h3>

                        <div id="fund-chart"></div>

                    </div>
                    <!-- / fund-chart-wrap -->

                </div>

                <div class="fund-buttons text-center add-bottom">
                    <a href="#" class="btn btn-orange fund-buy" data-sedol="${sedol!}">Buy Now</a>
                    <a href="#iframe-td" class="btn btn-white view-report">View Detailed Report</a>
                </div>

                [#if fund.iframeSrc?has_content]
                <!-- iframe -->
                <iframe width="100%" scrolling="no" frameborder="0" src="${fund.iframeSrc}" id="iframe-td" name="iframe-td" class="hidden"></iframe>
                <!-- / iframe -->
                [/#if]

            </div>
            <!-- / main-content -->

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
    [#else]
    <!-- main -->
    <main id="main" class="container">

        [@cms.area name="alert" /]

        [@cms.area name="main-top" /]

        [@cms.area name="section-choices" /]

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter has-sidebar[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-8">

                [@cms.area name="main-content" /]

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
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/moment/moment.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/amcharts.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/serial.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/pie.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/themes/light.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/plugins/dataloader/dataloader.js"></script>
    <script>
        var sedol = '${sedol!}';
    </script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/fund.js"></script>

    [@cms.area name="analytics" /]

</body>
</html>