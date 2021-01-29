                    
                    [#assign currentSite = cmsfn.siteRoot(content)]
                    [#assign originalURI = state.originalURI!]
                    [#assign originalURL = state.originalURL?replace(originalURI,'')!]
                    [#if currentSite == 'UK']
                    <!-- mobile-menu -->
                    <nav id="mobile-menu" class="pull-right" role="navigation">
                        <ul class="menu has-children">
                            <li>
                                <a href="#">Accounts</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing'!}">Share Dealing</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'stocks-and-shares-isa'!}">Stocks &amp; Shares ISA</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'junior-isa'!}">Junior ISA</a>
                                    </li>                                    
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp'!}">SIPP</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'other-accounts'!}">Other Accounts</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Investments</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares'!}">Shares</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds'!}">Investment Funds</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'etps/etfs'!}">ETFs</a>
                                    </li>
                                     <li>
                                     <a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds'!}">Investment Funds</a>
                                     </li>

                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/bonds-and-gilts'!}">Bonds &amp; Gilts</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'other-investments'!}">Other Investments</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'how-to-guides'!}">Getting Started With Investing</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}">Rates &amp; Charges</a>
                            </li>
                            <li class="magnify">
                                <a href="#"><i class="fa fa-search"></i></a>
                            </li>
                            <li class="burger">
                                <a href="#"><i class="fa fa-bars"></i><span> Menu</span></a>

                                <!-- mobile-megamenu -->
                                <div class="mobile-megamenu">

                                    <nav id="mobile-nav" class="mobile-menu">

                                        <button class="action action-close hidden" aria-label="Close Menu"><i class="fa fa-times"></i></button>

                                        <div class="mobile-menu-wrap">
                                            <ul id="mobile-menu-main" data-menu="mobile-menu-main" class="menu-level menu-level-current">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-accounts" href="#">Accounts</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-investments" href="#">Investments</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-pensions" href="#">Pensions</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-find-investments" href="#">Find Investments</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-getting-started" href="#">Discover More</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-tools-apps" href="#">Tools &amp; Apps</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-help-support" href="#">Help &amp; Support</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-rates-charges" href="#">Rates &amp; Charges</a></li>
                                            </ul>

                                            <!-- submenu-accounts -->
                                            <ul data-menu="submenu-accounts" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing'!}" class="mobile-menu-link">Share Dealing</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'stocks-and-shares-isa'!}" class="mobile-menu-link">Stocks &amp; Shares ISA</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp'!}" class="mobile-menu-link">SIPP</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'junior-isa'!}" class="mobile-menu-link">Junior ISA</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'other-accounts'!}" class="mobile-menu-link">Other Accounts</a></li>
                                            </ul>
                                            <!-- / submenu-accounts -->

                                            <!-- submenu-investments -->
                                            <ul data-menu="submenu-investments" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares'!}" class="mobile-menu-link">Shares</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/us-and-international'!}" class="mobile-menu-link">US &amp; International Shares</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds'!}" class="mobile-menu-link">Investment Funds</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-trusts'!}" class="mobile-menu-link">Investment Trusts</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'etps/etfs'!}">ETFs</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/bonds-and-gilts'!}" class="mobile-menu-link">Bonds &amp; Gilts</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'ipos'!}" class="mobile-menu-link">IPOs</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'other-investments'!}" class="mobile-menu-link">Other Investments</a></li>
                                            </ul>
                                            <!-- / submenu-investments -->

                                            <!-- submenu-pensions -->
                                            <ul data-menu="submenu-pensions" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp'!}" class="mobile-menu-link">SIPP</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/transfer-my-pension'!}" class="mobile-menu-link">Transfer Your Pension</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/pension-calculator'!}" class="mobile-menu-link">Pension Calculator</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/knowledge-centre'!}" class="mobile-menu-link">Planning for Retirement</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/income-drawdown'!}" class="mobile-menu-link">Income Drawdown</a></li>
                                            </ul>
                                            <!-- / submenu-pensions -->

                                            <!-- submenu-find-investments -->
                                            <ul data-menu="submenu-find-investments" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news'!}" class="mobile-menu-link">Investing News</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views'!}" class="mobile-menu-link">Interactive Investor Views</a></li>
                                                <li class="mobile-menu-item"><a href="http://ican.tddirectinvesting.co.uk/market-news/" target="_blank" class="mobile-menu-link">Stock Market News: <span class="live">Live</span></a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/recommended'!}" class="mobile-menu-link">Recommended Funds</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/quick-start-funds'!}" class="mobile-menu-link">Quick Start Funds</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-outlook'!}" class="mobile-menu-link">Investment Outlook</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'best-of-british-fund-managers'!}" class="mobile-menu-link">Best of British Fund Managers</a></li>
                                            </ul>
                                            <!-- / submenu-find-investments -->

                                            <!-- submenu-getting-started -->
                                            <ul data-menu="submenu-getting-started" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'using-your-account'!}" class="mobile-menu-link">Using your account</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'how-to-guides'!}" class="mobile-menu-link">Investing videos &amp; guides</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/knowledge-centre'!}">Planning for retirement</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'customer-stories'!}" class="mobile-menu-link">Customer Stories</a></li>
                                            </ul>
                                            <!-- / submenu-getting-started -->

                                            <!-- submenu-tools-apps -->
                                            <ul data-menu="submenu-tools-apps" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>                                            
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'mobile-trading-apps'!}" class="mobile-menu-link">Mobile Trading Apps</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'advanced-trading-platform'!}" class="mobile-menu-link">Advanced Trading Platform</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/technical-insights'!}" class="mobile-menu-link">Technical Insights</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'sipp/pension-calculator'!}" class="mobile-menu-link">Pension Calculator</a></li>
                                            </ul>
                                            <!-- / submenu-tools-apps -->

                                            <!-- submenu-help-support -->
                                            <ul data-menu="submenu-help-support" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>                                            
                                                <li class="mobile-menu-item"><a href="https://help.ii.co.uk/system/templates/selfservice/ii/help/customer/locale/en-GB/portal/402800000001013" target="_blank" class="mobile-menu-link">Help Centre</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'about-us'!}" class="mobile-menu-link">About Us</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'transfer-to-us'!}" class="mobile-menu-link">Transfer To Us</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'retrieve-application'!}" class="mobile-menu-link">Retrieve Application</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'useful-forms'!}" class="mobile-menu-link">Useful Forms</a></li>
                                            </ul>
                                            <!-- / submenu-help-support -->

                                            <!-- submenu-rates-charges -->
                                            <ul data-menu="submenu-rates-charges" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>                                            
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}" class="mobile-menu-link">Our Rates &amp; Charges</a></li>
                                            </ul>
                                            <!-- / submenu-rates-charges -->

                                        </div>


                                    </nav>

                                </div>
                                <!-- / mobile-megamenu -->

                            </li>
                            [#if originalURL?contains('magnoliaPublic') || originalURL?contains('public') || originalURL?contains('tddirectinvesting')]
                            <li id="menu-login"><a href="https://secure.ii.co.uk/webbroker2/"><i class="fa fa-lock"></i><span> Login</span></a></li>
                            [#else]
                            <li id="menu-login"><a href="https://ev3tdw.tdwh-test.co.uk/webbroker2/"><i class="fa fa-lock"></i><span> Login</span></a></li>
                            [/#if]
                        </ul>
                    </nav>
                    <!-- / mobile-menu -->
                    [#elseif currentSite == 'IE']
                    <!-- mobile-menu -->
                    <nav id="mobile-menu" class="pull-right" role="navigation">
                        <ul class="menu has-children">
                            <li>
                                <a href="#">Accounts</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/trading-account'!}">Trading Account</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/derivatives-trading'!}">Derivatives Trading</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/financial-spread-trading-account'!}">Financial Spread Trading</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/savings-account'!}">Savings Accounts</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Investments</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/irish-stocks'!}">Irish Stocks</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/uk-investments'!}">UK Investments</a>
                                    </li>
                                    <li>
                                        <a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/international-stocks'!}">International Stocks</a>
                                    </li>                                   
                                </ul>
                            </li>
                            <li>
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}">Rates &amp; Charges</a>
                            </li>
                            <li class="magnify">
                                <a href="#"><i class="fa fa-search"></i></a>
                            </li>
                            <li class="burger">
                                <a href="#"><i class="fa fa-bars"></i><span> Menu</span></a>

                                <!-- mobile-megamenu -->
                                <div class="mobile-megamenu">

                                    <nav id="mobile-nav" class="mobile-menu">

                                        <button class="action action-close hidden" aria-label="Close Menu"><i class="fa fa-times"></i></button>

                                        <div class="mobile-menu-wrap">
                                            <ul id="mobile-menu-main" data-menu="mobile-menu-main" class="menu-level menu-level-current">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-accounts" href="#">Accounts</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-investments" href="#">Investments</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-more-from-your-account" href="#">More From Your Account</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-help-support" href="#">Help &amp; Support</a></li>
                                                <li class="mobile-menu-item"><a class="mobile-menu-link" data-submenu="submenu-rates-charges" href="#">Rates &amp; Charges</a></li>
                                            </ul>

                                            <!-- submenu-accounts -->
                                            <ul data-menu="submenu-accounts" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/trading-account'!}" class="mobile-menu-link">Trading Account</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/derivatives-trading'!}" class="mobile-menu-link">Derivatives Trading</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/financial-spread-trading-account'!}" class="mobile-menu-link">Financial Spread Trading</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/savings-account'!}" class="mobile-menu-link">Savings Accounts</a></li>
                                            </ul>
                                            <!-- / submenu-accounts -->                                         

                                            <!-- submenu-investments -->
                                            <ul data-menu="submenu-investments" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/irish-stocks'!}" class="mobile-menu-link">Irish Stocks</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/uk-investments'!}" class="mobile-menu-link">UK Investments</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'what-can-you-invest-in/international-stocks'!}" class="mobile-menu-link">International Stocks</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/types-of-accounts/derivatives-trading/forex-trading'!}" class="mobile-menu-link">Foreign Exchange</a></li>
                                            </ul>
                                            <!-- / submenu-investments -->                                           

                                            <!-- submenu-more-from-your-account -->
                                            <ul data-menu="submenu-more-from-your-account" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/order-types'!}" class="mobile-menu-link">Order Types</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/transferring-to-us'!}" class="mobile-menu-link">Transferring to us</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/watchlist'!}" class="mobile-menu-link">Watchlist</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/learn-about-investing'!}" class="mobile-menu-link">Learn about investing</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/glossary'!}" class="mobile-menu-link">Glossary</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'more-from-your-account/charitable-donations'!}" class="mobile-menu-link">Charitable donations</a></li>
                                            </ul>
                                            <!-- / submenu-more-from-your-account -->                                          

                                            <!-- submenu-help-support -->
                                            <ul data-menu="submenu-help-support" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>                                            
                                                <li class="mobile-menu-item"><a href="https://help.ii.co.uk/system/templates/selfservice/ii/help/customer/locale/en-GB/portal/402800000001010" target="_blank" class="mobile-menu-link">Help Centre</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'about-us'!}" class="mobile-menu-link">About Us</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'useful-forms'!}" class="mobile-menu-link">Useful Forms</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/how-to-trade'!}" class="mobile-menu-link">How To Trade</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started/fund-my-account'!}" class="mobile-menu-link">Fund My Account</a></li>
                                            </ul>
                                            <!-- / submenu-help-support -->

                                            <!-- submenu-rates-charges -->
                                            <ul data-menu="submenu-rates-charges" class="menu-level">
                                                <li class="mobile-menu-item"><a class="mobile-menu-link mobile-menu-link-back" href="#">Back</a></li>                                            
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges'!}" class="mobile-menu-link">Brokerage Services</a></li>
                                                <li class="mobile-menu-item"><a href="${cmsfn.link(cmsfn.siteRoot(content))+'rates-and-charges/administration-and-other'!}" class="mobile-menu-link">Administration &amp; Other Charges</a></li>
                                            </ul>
                                            <!-- / submenu-rates-charges -->

                                        </div>

                                    </nav>

                                </div>
                                <!-- / mobile-megamenu -->

                            </li>
                            [#if originalURL?contains('magnoliaPublic') || originalURL?contains('public') || originalURL?contains('interactiveinvestor') || originalURL?contains('tddirectinvesting')]
                            <li id="menu-login"><a href="https://secure.interactiveinvestor.ie/ireland/"><i class="fa fa-lock"></i><span> Login</span></a></a></li>
                            [#else]
                            <li id="menu-login"><a href="https://ev3tdw.tdwh-test.co.uk/ireland/"><i class="fa fa-lock"></i><span> Login</span></a></a></li>
                            [/#if]
                        </ul>
                    </nav>
                    <!-- / mobile-menu -->
                    [#elseif currentSite == 'CS']
                    
                    <!-- mobile-menu -->
                    <nav id="mobile-menu" class="pull-right" role="navigation">
                      
                    </nav>
                    <!-- / mobile-menu -->
                    [/#if]
                    