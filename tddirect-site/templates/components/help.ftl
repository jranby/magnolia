
            [#assign currentSite = cmsfn.siteRoot(content)]
            <div id="help-support-block" class="col-sm-offset-1 col-sm-3 footer-block">
                <h4 class="footer-block-title">Help and Support</h4>
                <p class="footer-block-spiel">Having trouble? We're here to help.</p>
                [#if currentSite == 'IE']
                <a href="https://help.ii.co.uk/system/templates/selfservice/ii/help/customer/locale/en-GB/portal/402800000001010" class="btn btn-green footer-block-link" target="_blank">View Help Section</a>
                [#else]
                <a href="https://help.ii.co.uk/system/templates/selfservice/ii/help/customer/locale/en-GB/portal/402800000001013" class="btn btn-green footer-block-link" target="_blank">View Help Section</a>
                [/#if]
            </div>
            