                    
                    [#assign currentSite = cmsfn.siteRoot(content)]
                    [#assign originalURI = state.originalURI!]
                    [#assign originalURL = state.originalURL?replace(originalURI,'')!]
                    [#if currentSite == 'UK']
                    <!-- primary -->
                    <nav id="primary" class="pull-right" role="navigation">
                        <ul class="menu has-children">
                            <li>
                                <a href="#">Accounts</a>
                                <ul class="sub-menu">
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing'!}">Share Dealing</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'stocks-and-shares-isa'!}">Stocks &amp; Shares ISA</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'junior-isa'!}">Junior ISA</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp'!}">SIPP</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'other-accounts'!}">Other Accounts</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Investments</a>
                                <ul class="sub-menu">
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares'!}">Shares</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds'!}">Investment Funds</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'etps/etfs'!}">ETFs</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-trusts'!}">Investment Trusts</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/bonds-and-gilts'!}">Bonds &amp; Gilts</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'other-investments'!}">Other Investments</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'how-to-guides'!}">Getting Started With Investing</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}">Rates &amp; Charges</a>
                            </li>
                            <li class="burger">
                                <a href="#"><i class="fa fa-bars"></i><span> Menu</span></a>

                                <!-- megamenu -->
                                <div class="megamenu">
                                    <div class="container">
                                        <div class="row add-bottom">
                                            <div class="col-sm-3 megamenu-block">
                                                <h3>Accounts</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing'!}">Share Dealing</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'stocks-and-shares-isa'!}">Stocks &amp; Shares ISA</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp'!}">SIPP</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'junior-isa'!}">Junior ISA</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'other-accounts'!}">Other Accounts</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-3 megamenu-block">
                                                <h3>Investments</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares'!}">Shares</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/us-and-international'!}">US &amp; International Shares</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds'!}">Investment Funds</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-trusts'!}">Investment Trusts</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'etps/etfs'!}">ETFs</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/bonds-and-gilts'!}">Bonds &amp; Gilts</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'ipos'!}">IPOs</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'other-investments'!}">Other Investments</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-3 megamenu-block">
                                                <h3>Pensions</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp'!}">SIPP</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/transfer-my-pension'!}">Transfer Your Pension</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/pension-calculator'!}">Pension Calculator</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/knowledge-centre'!}">Planning for Retirement</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/income-drawdown'!}">Income Drawdown</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-3 megamenu-block">
                                                <h3>Find Investments</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news'!}">Investing News</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views'!}">Interactive Investor Views</a></li>
                                                    <li><a href="http://ican.tddirectinvesting.co.uk/market-news/" target="_blank">Stock Market News: <span class="live">Live</span></a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/recommended'!}">Recommended Funds</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/quick-start-funds'!}">Quick Start Funds</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-outlook'!}">Investment Outlook</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'best-of-british-fund-managers'!}">Best of British Fund Managers</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3 megamenu-block">
                                                <h3>Discover More</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'using-your-account'!}">Using your account</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'how-to-guides'!}">Investing videos &amp; guides</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/knowledge-centre'!}">Planning for retirement</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'customer-stories'!}">Customer Stories</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-3 megamenu-block">
                                                <h3>Tools &amp; Apps</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'mobile-trading-apps'!}">Mobile Trading Apps</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'advanced-trading-platform'!}">Advanced Trading Platform</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/technical-insights'!}">Technical Insights</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/pension-calculator'!}">Pension Calculator</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-3 megamenu-block">
                                                <h3>Help &amp; Support</h3>
                                                <ul>
                                                    <li><a href="https://help.ii.co.uk/system/templates/selfservice/ii/help/customer/locale/en-GB/portal/402800000001013" target="_blank">Help Centre</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'about-us'!}">About Us</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'transfer-to-us'!}">Transfer To Us</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'retrieve-application'!}">Retrieve Application</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'useful-forms'!}">Useful Forms</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-3 megamenu-block">
                                                <h3>Rates &amp; Charges</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}">Our Rates &amp; Charges</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- / megamenu -->

                            </li>
                            [#if originalURL?contains('magnoliaPublic') || originalURL?contains('public') || originalURL?contains('tddirectinvesting')]
                            <li id="menu-login"><a href="https://secure.ii.co.uk/webbroker2/"><i class="fa fa-lock"></i><span> Login</span></a></li>
                            [#else]
                            <li id="menu-login"><a href="https://ev3tdw.tdwh-test.co.uk/webbroker2/"><i class="fa fa-lock"></i><span> Login</span></a></li>
                            [/#if]
                        </ul>
                    </nav>
                    <!-- / primary -->
                    [#elseif currentSite == 'IE']
                    <!-- primary -->
                    <nav id="primary" class="pull-right" role="navigation">
                        <ul class="menu has-children">
                            <li>
                                <a href="#">Accounts</a>
                                <ul class="sub-menu">
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/trading-account'!}">Trading Account</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/derivatives-trading'!}">Derivatives Trading</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/financial-spread-trading-account'!}">Financial Spread Trading</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/savings-account'!}">Savings Accounts</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Investments</a>
                                <ul class="sub-menu">
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/irish-stocks'!}">Irish Stocks</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/uk-investments'!}">UK Investments</a></li>
                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/international-stocks'!}">International Stocks</a></li>                                   
                                </ul>
                            </li>
                            <li>
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}">Rates &amp; Charges</a>
                            </li>
                            <li class="burger">
                                <a href="#"><i class="fa fa-bars"></i><span> Menu</span></a>

                                <!-- megamenu -->
                                <div class="megamenu">
                                    <div class="container">
                                        <div class="row add-bottom">
                                            <div class="col-sm-4 megamenu-block">
                                                <h3>Accounts</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/trading-account'!}">Trading Account</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/derivatives-trading'!}">Derivatives Trading</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/financial-spread-trading-account'!}">Financial Spread Trading</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/savings-account'!}">Savings Accounts</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-4 megamenu-block">
                                                <h3>Investments</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/irish-stocks'!}">Irish Stocks</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/uk-investments'!}">UK Investments</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/international-stocks'!}">International Stocks</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/derivatives-trading/forex-trading'!}">Foreign Exchange</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-4 megamenu-block">
                                                <h3>More from your account</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/order-types'!}">Order Types</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/transferring-to-us'!}">Transferring to us</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/watchlist'!}">Watchlist</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/learn-about-investing'!}">Learn about investing</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/glossary'!}">Glossary</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/charitable-donations'!}">Charitable donations</a></li>
                                                </ul>
                                            </div>                                           
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4 megamenu-block">
                                                <h3>Rates & Charges</h3>
                                                <ul>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}">Brokerage Services</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges/administration-and-other'!}">Administration & Other Charges</a></li>                                                 
                                                </ul>
                                            </div>
                                            <div class="col-sm-4 megamenu-block">
                                                <h3>Help & Support</h3>
                                                <ul>
                                                    <li><a href="https://help.ii.co.uk/system/templates/selfservice/ii/help/customer/locale/en-GB/portal/402800000001010" target="_blank">Help Centre</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'about-us'!}">About Us</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'useful-forms'!}">Useful Forms</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/how-to-trade'!}">How to Trade</a></li>
                                                    <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/fund-my-account'!}">Fund my account</a></li>
                                                </ul>
                                            </div>                                             
                                        </div>                                        
                                    </div>
                                </div>
                                <!-- / megamenu -->

                            </li>
                            [#if originalURL?contains('magnoliaPublic') || originalURL?contains('public') || originalURL?contains('interactiveinvestor') || originalURL?contains('tddirectinvesting')]
                            <li id="menu-login"><a href="https://secure.interactiveinvestor.ie/ireland/"><i class="fa fa-lock"></i><span> Login</span></a></a></li>
                            [#else]
                            <li id="menu-login"><a href="https://ev3tdw.tdwh-test.co.uk/ireland/"><i class="fa fa-lock"></i><span> Login</span></a></a></li>
                            [/#if]
                        </ul>
                    </nav>
                    <!-- / primary -->
                    [#elseif currentSite == 'CS']
                    
                    <!-- primary -->
                    <nav id="primary" class="pull-right" role="navigation">
                        
                    </nav>
                    <!-- / primary -->
                    [/#if]
                    