<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign currentSite = cmsfn.siteRoot(content)]

</head>
<body class="qsf[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

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

        [@cms.area name="section-choices" /]

        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-12">

                [@cms.area name="main-content" /]

            </div>
            <!-- / main-content -->

        </section>
        <!-- / main-content-wrap -->

        <!-- qsf-panels -->
        <section id="qsf-panels" class="row[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            [#assign top = cmsfn.contentByPath('/', 'qsf')]
            [#assign funds = cmsfn.children(top, 'mgnl:qsf')]
            [#if funds?has_content]
            [#list funds as fund]
            [#assign id = fund.@uuid/]
            <!-- qsf-panel -->
            <div id="${id}" class="col-md-4 qsf-panel-wrap closed">                
                <div class="panel qsf-panel">
                    <div class="panel-heading">
                        <div class="row no-gutter">
                            <div class="speedometer-wrap percent-${fund.riskPercent!'20'}">
                                <div class="speedometer speedometer-sm play ${fund.risk}-risk">
                                    <div class="dial">
                                        <div class="bar">
                                            <div class="half-circle half-circle-bg"></div>
                                            <div class="half-circle half-circle-speed animated"></div>
                                            <div class="half-circle half-circle-cover"></div>
                                        </div>
                                    </div>
                                    <div class="whatdafook">
                                    RISK
                                    </div>
                                </div>
                            </div>
                            <div class="qsf-top col-xs-12 col-sm-12 col-md-9">
                                <img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/logo/vanguard-logo.png" alt="Vanguard" />
                                <h3 class="panel-title">${fund.title}</h3>
                            </div>                            
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="cf no-gutter remove-bottom qsf-overview">
                            [#if fund.introList?has_content]
                            <ul class="caret-list qsf-intro-list">
                                [#list fund.introList as item]
                                <li>${item}</li>
                                [/#list]
                            </ul>
                            [/#if]
                            [#if fund.intro?has_content]
                            <div class="qsf-intro">
                                ${cmsfn.decode(fund).intro!}
                            </div>
                            [/#if]
                        </div>
                        <div class="cf no-gutter qsf-detail">
                            <div class="col-md-8 qsf-text">
                                [#if fund.objective?has_content]
                                <div class="qsf-objective">
                                    <h3 class="qsf-title">Fund Information</h3>
                                    ${fund.objective!}
                                    <div class="qsf-more-wrap text-right">
                                        <a href="#" class="btn btn-white qsf-more">Read More</a>
                                    </div>
                                </div>
                                [/#if]
                                <div class="qsf-reasons">
                                    [#if fund.why?has_content]
                                    <div class="qsf-why">
                                        <h3 class="qsf-title">Why Buy This Fund?</h3>
                                        ${cmsfn.decode(fund).why!}
                                    </div>
                                    [/#if]
                                    [#if fund.comments?has_content]
                                    <div class="qsf-comments add-bottom">
                                        <h3 class="qsf-title">Fund Manager</h3>
                                        ${cmsfn.decode(fund).comments!}
                                    </div>
                                    [/#if]
                                </div>
                                [#if fund.video?has_content]
                                <div class="qsf-video half-top" data-video-src="${fund.video!}">
                                    <iframe class="qsf-video-src" height="280" width="500" src="${fund.video!}" frameborder="0"></iframe>
                                </div>
                                [/#if]
                                <div class="qsf-view-chart-wrap add-top text-right">
                                    <a href="#" class="btn btn-green qsf-view-graph" data-sedol="${fund.sedol!}">View Performance Chart</a>
                                </div>                                
                            </div>
                            <div class="col-md-4 qsf-side">
                                <div class="qsf-chart add-bottom">
                                    <div id="qsf-chart-${fund.sedol!}" class="qsf-chart-output"></div>
                                </div>
                                <div id="qsf-meta-${fund.sedol!}" class="qsf-meta">
                                    <ul class="none-list">
                                        [#if fund.discountedFee?has_content]
                                        <li>Discounted Initial Fee : <span class="discounted-fee">${fund.discountedFee!}</span> <a role="button" data-toggle="popover" data-placement="top" data-trigger="focus" title="Discounted Initial Fee" data-content="Some funds carry an upfront cost imposed by the Fund Manager, referred to as an Initial Sales Charge, that in the majority of cases we have discounted for you" tabindex="0" ><i class="fa fa-question-circle" aria-hidden="true"></i></a></li>
                                        [/#if]
                                        <li>Ongoing Charge : <span class="ongoing-charge"></span> <a role="button" data-toggle="popover" data-placement="top" data-trigger="focus" title="Ongoing Charges" data-content="Funds carry an on-going or annual management charge imposed by the Fund Manager for covering the cost of managing the fund." tabindex="0" ><i class="fa fa-question-circle" aria-hidden="true"></i></a></li>
                                        <li>Year To Date Return : <span class="ytd-return"></span></li>
                                        [#if fund.riskRating?has_content]
                                        <li>Risk Rating : <span class="risk-rating">${fund.riskRating!}</span> <a role="button" data-toggle="popover" data-placement="top" data-trigger="focus" title="Risk Rating" tabindex="0"  data-content="The Risk and Reward profile of a Fund is found in the Key Investor Information Document (KIID) and demonstrates where the Fund ranks in terms of its potential risk and reward. The higher the rank (e.g. 5, 6 or 7) the greater the potential reward but the greater the risk of losing money. It is based on past data, may change over time and may not be a reliable indication of the future risk profile of the Fund . You should be aware that even the lowest risk class (e.g. 1, 2 or 3) can lose you money and that extreme market circumstances can mean you suffer losses in all cases."><i class="fa fa-question-circle" aria-hidden="true"></i></a></li>
                                        [/#if]
                                    </ul>
                                </div>
                            </div> 
                        </div>
                        <div class="qsf-performance half-top">
                            <h4>Performance growth of £1,000 as at today's date.</h4>
                            <div id="qsf-graph-${fund.sedol!}" class="qsf-graph-output"></div>
                            <p class="qsf-disclaimer">Source: Morningstar. Past performance is not a reliable indicator of future returns.</p>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <div class="qsf-footer-close">
                            <a href="#" class="btn btn-green qsf-toggler" data-sedol="${fund.sedol!}" data-fund-uuid="${id}">Read More</a>
                        </div>
                        <div class="cf no-gutter qsf-footer-open">
                            <div class="col-md-8 qsf-docs">
                                <ul class="doc-list">
                                    [#if fund.brochure?has_content]
                                    [#assign asset = damfn.getAsset(fund.brochure!) /]
                                    <li><a href="${asset.getLink()}" target="_blank">Vanguard Fund Brochure</a></li>
                                    [/#if]
                                    [#if fund.kiid?has_content]
                                    <li><a href="${fund.kiid!}" target="_blank">Key Investor Information Document</a></li>
                                    [/#if]
                                    [#if fund.factsheet?has_content]
                                    <li><a href="${fund.factsheet!}" target="_blank">Fund Factsheet</a></li>
                                    [/#if]
                                </ul>
                            </div>
                            <div class="col-md-4 qsf-invest text-right">
                                <a href="#" class="btn btn-orange qsf-buy" data-sedol="${fund.sedol!}">Invest Now</a>
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
            <!-- / qsf-panel -->

            [/#list]
            [/#if]
        </section>
        <!-- / qsf-panels -->

        <!-- main-bottom-wrap -->
        <section id="main-bottom-wrap" class="row no-gutter[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-bottom -->
            <div id="main-bottom" class="col-md-12">

                [@cms.area name="main-bottom" /]

            </div>
            <!-- / main-bottom -->

        </section>
        <!-- / main-bottom-wrap -->

        [@cms.area name="footer" /]

    </main>
    <!-- / main -->

    <!-- qsf-modal -->
    <div class="modal fade modal-vertical-centered" id="qsf-modal" tabindex="-1" role="dialog" aria-labelledby="qsfModalLabel">
        
        <!-- modal-dialog -->
        <div class="modal-dialog" role="document">
            
            <!-- modal-content -->
            <div class="modal-content">
                
                <!-- modal-header -->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times-circle"></i></span></button>
                    <h3 class="modal-title" id="qsfModalLabel">Buy Selected Fund</h3>
                </div>
                <!-- / modal-header -->
                
                <!-- modal-body -->
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <p>You should be aware that investments can fall as well as rise and you may not get back all the moneythat you invest.</p>
                            <p>If you’re unsure about thesuitability of a particular investment or think you need a personalrecommendation, you should speak to a suitably qualified financial adviser.</p>
                        </div>
                    </div>
                    <div class="row half-bottom padded">
                        <div class="col-sm-6">
                            <h4>Existing TD Direct Investing Customer</h4>
                            <a class="btn btn-orange login-buy-link" href="">Login and Buy</a>
                        </div>                      
                        <div class="col-sm-6">
                            <h4>New Customer? Open an account with us</h4>
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
    <!-- / qsf-modal -->  

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
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/amcharts.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/serial.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/pie.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/themes/light.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/qsf.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>

    [@cms.area name="analytics" /]

</body>
</html>