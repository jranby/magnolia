
        [#assign currentSite = cmsfn.siteRoot(content)]
        [#assign page = cmsfn.page(content)]
        [#assign node = cmsfn.asJCRNode(page) /]
        [#assign template = node.getProperty("mgnl:template").getValue().getString() /]
        [#if currentSite == 'UK']
        [#if template != 'tddirect-site:pages/ii-archive' && template != 'tddirect-site:pages/ii-article']
        <!-- footer-blocks -->
        <section id="footer-blocks" class="row no-gutter">

            [@cms.area name="help"/]
            
            [@cms.area name="webchat"/]

            [@cms.area name="connect"/]

        </section>
        <!-- / footer-blocks -->

        [/#if]
        <!-- footer -->
        <footer id="footer" class="row text-center">

            <!-- footer-links -->
            <nav id="footer-links">
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'contact-us'!}" class="footer-link">Contact Us</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'compensation-arrangements'!}" class="footer-link">Compensation Arrangements</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'terms-of-service'!}" class="footer-link">Terms</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'privacy-policy'!}" class="footer-link">Privacy Policy</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'disclosures'!}" class="footer-link">Disclosures</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'keeping-you-safe'!}" class="footer-link">Security</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'sitemap'!}" class="footer-link">Sitemap</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'accessibility'!}" class="footer-link">Accessibility</a>
            </nav>
            <!-- / footer-links -->

            <p>&copy; ${.now?string('yyyy')} TD Direct Investing (Europe) Limited. All Rights Reserved.</p>
            <p>TD Direct Investing (Europe) Limited is authorised and regulated by the Financial Conduct Authority and is owned by Interactive Investor Limited who is a licensed user of the TD marks.</p>

            <!-- symantec -->
            <div id="symantec" class="text-center">
                <script type="text/javascript" src="https://seal.websecurity.norton.com/getseal?host_name=www.tddirectinvesting.co.uk&amp;size=S&amp;use_flash=NO&amp;use_transparent=YES&amp;lang=en"></script><br />
                <a href="http://www.symantec.com/ssl-certificates" target="_blank"  style="color:#000000; text-decoration:none; font:bold 7px verdana,sans-serif; letter-spacing:.5px; text-align:center; margin:0px; padding:0px;">ABOUT SSL CERTIFICATES</a>
            </div>
            <!-- / symantec -->

        </footer>
        <!-- / footer -->
        [#elseif currentSite == 'IE']
        <!-- footer-blocks -->
        <section id="footer-blocks" class="row no-gutter">

            [@cms.area name="help"/]
            
            [@cms.area name="webchat"/]

        </section>
        <!-- / footer-blocks -->

        <!-- footer -->
        <footer id="footer" class="row text-center">

            <!-- footer-links -->
            <nav id="footer-links">
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'contact-us'!}" class="footer-link">Contact Us</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'compensation-arrangements'!}" class="footer-link">Compensation Arrangements</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'terms-of-service'!}" class="footer-link">Terms</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'privacy-policy'!}" class="footer-link">Privacy Policy</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'disclosures'!}" class="footer-link">Disclosures</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'keeping-you-safe'!}" class="footer-link">Security</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'sitemap'!}" class="footer-link">Sitemap</a>
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'accessibility'!}" class="footer-link">Accessibility</a>
            </nav>
            <!-- / footer-links -->

            <p>&copy; ${.now?string('yyyy')} Interactive Investor Services Limited. All Rights Reserved.</p>
            <p>Interactive Investor Services Limited is authorised and regulated by the Financial Conduct Authority.</p>

        </footer>
        <!-- / footer -->
        [#elseif currentSite == 'CS']
        <!-- footer -->
        <footer id="footer" class="row text-center">

            <!-- footer-links -->
            <nav id="footer-links">
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'disclosures'!}" class="footer-link">Disclosures</a>
            </nav>
            <!-- / footer-links -->

            <p>Computershare Brokerage Services provided by TD Direct Investing (Europe) Limited. Incorporated in England and Wales under registration number 2101863. Registered office: Exchange Court, Duncombe Street, Leeds, LS1 4AX, United Kingdom. Authorised and regulated by the Financial Conduct Authority, 25 The North Colonnade, Canary Wharf, London, E14 5HS, United Kingdom (Financial Services Register Firm Reference Number 141282), member of the London Stock Exchange and NEX Exchange. <a href="https://www.tddirectinvesting.co.uk">www.tddirectinvesting.co.uk</a> For the purposes of the brokerage services, any contract is between you and TD Direct Investing (Europe) Limited, which has been sold to Interactive Investor Limited and is no longer affiliated with The Toronto-Dominion Bank. The TD Direct Investing name is used under licence. The Toronto-Dominion Bank is not responsible for this communication or content herein.</p>

            <p><strong>Compensation Arrangements (see also section 25 of our Terms of Service)</strong>.<br /><em>TD Direct Investing (Europe) Limited</em></p>

            <p>Computershare Share Dealing Services are provided by TD Direct Investing and are covered by the protected investment business scheme operated by the Financial Services Compensation Scheme. This scheme may in certain circumstances pay compensation to clients if they are eligible and if the regulated firm is unable or is likely to be unable to meet its liabilities to clients including when the firm becomes insolvent. Compensation may be available to eligible investors in respect of protected claims up to a maximum of £50,000 per claimant. Further information is available on the FSCS website at <a href="http://www.fscs.org.uk">www.fscs.org.uk</a></p>

            <p>Your cash is pooled with those of other clients and deposited with a number of Financial Institutions. The UK deposits are protected under the FSCS to a value of £85,000. In the interests of diversifying the risk we may invest a proportion of the pooled money in a Country outside the UK where we cannot guarantee that the money will be protected by similar Deposit Guarantee Scheme to the FSCS. The FSCS publish some useful material on this matter on  <a href="http://www.fscs.org.uk/what-we-cover/questions-and-answers/qas-about-investments" target="_blank" >www.fscs.org.uk/what-we-cover/questions-and-answers/qas-about-investments</a></p>

        </footer>
        <!-- / footer -->
        [/#if]
        