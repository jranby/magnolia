        <!-- ii-sitewide-notice -->
        <section class="ii-sitewide-notice collapsed">
            <div class="container">
                <div class="row">
                    <div class="alert" role="alert">
                        <button type="button" class="close ii-sitewide-notice-hide"><i class="fa fa-times"></i></button>
                        [#if currentSite == 'UK']
                        <p class="remove-bottom"><i class="fa fa-info-circle"></i> TD Direct Investing is changing to interactive investor. Our changes will be complete by December. <a href="${cmsfn.link(cmsfn.siteRoot(content))+'future-of-ii'!}" class="ii-sitewide-notice-more hidden">Read More</a></p>
                        [#elseif currentSite == 'IE']
                        <p class="remove-bottom"><i class="fa fa-info-circle"></i> Welcome to interactive investor, proud owner of TD Direct Investing.</p>
                        [/#if]
                    </div>
                </div>
            </div>    
        </section>
        <!-- / ii-sitewide-notice -->