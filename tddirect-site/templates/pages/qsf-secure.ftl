[@cms.page /]

    <!-- CSS -->
    <link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/style.css">
    <link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/secure.css">
    <link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/ii.css">
    
    <!-- JS -->
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/jquery.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/bootstrap.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/cookie/js.cookie.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/fitvids/jquery.fitvids.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/amcharts.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/serial.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/pie.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/porthole/porthole.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/amcharts/themes/light.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/qsf.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/secure.js"></script>

    
	<main id="main" class="container">

    	[#if content.html?has_content]
    	${cmsfn.decode(content).html!""}
    	[/#if]

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

	</main>