    
    [#assign currentSite = cmsfn.siteRoot(content)]
    [#if currentSite == 'UK' || currentSite == 'IE']
    <!-- ii-notice -->
    <div id="ii-notice" class="ii-notice disclaimer collapsed">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <a href="#" class="ii-notice-hide">Show</a>
                    <h3 class="ii-notice-title">TD Direct Investing Is Owned By Interactive Investor Limited</h3>
                    <p class="ii-notice-text remove-bottom"><img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/logo/ii-disclaimer-logo.png" alt="TD Direct Investing Is Owned By Interactive Investor Limited" class="pull-right ii-notice-logo" /> On 2nd June 2017 TD Direct Investing (Europe) Limited was sold to Interactive Investor Limited and is no longer affiliated with The Toronto-Dominion Bank. The TD logo and TD Direct Investing name are used under licence. The Toronto-Dominion Bank is not responsible for this website or content therein, except in relation to the Savings Account which is provided by TD Bank N.V.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- / ii-notice -->
    [/#if]
    