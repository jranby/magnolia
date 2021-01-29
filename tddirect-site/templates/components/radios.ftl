                [#assign parentPage = cmsfn.page(content)]
                [#if parentPage.segment?has_content && parentPage.segment != 'none']
                <!-- main-content-block -->
                <div class="main-content-block">

                    <h3 class="main-content-title">Get started today</h3>          

                    [#if parentPage.segment = "sipp"]
                    <p>You'll be asked to produce a Key Features Illustration before you open a TD SIPP. This gives you important information to help you decide if a TD SIPP is right for you. You’ll be taken to AJ Bell’s site to do this, our partner in providing the TD SIPP.</p>

                    <div id="choices" class="choices">
                        <div class="radio">
                            <label>
                                <input value="0" name="choice" class="choice" type="radio" data-choice="continue" checked="checked">I don't have an account
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input value="1" name="choice" class="choice" type="radio" data-choice="login-account">I already have an account
                            </label>
                        </div>
                        <div class="choices-buttons">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'td-sipp-service-changes'!}" id="continue" class="btn btn-orange">Continue</a>
                            <a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=accountUpgrades" id="login-account" class="btn btn-orange hidden">Login To Your Account</a>
                        </div>
                    </div>
                    [#elseif parentPage.segment = "isa"]
                    <p>We'd like to remind you that this is a self-select stocks & shares ISA, where you make your own investment decisions. This is particularly important to bear in mind if you are transferring a cash ISA into a Stocks and Shares ISA.</p>
                    <p>The value of your investments can go up or down and you may not get back all the money you invest. Please be aware we do not currently offer a Flexible Stocks and Shares ISA.</p>

                    <div id="choices" class="choices">
                        <div class="radio">
                            <label>
                                <input value="0" name="choice" class="choice" type="radio" data-choice="continue" checked="checked">I don't have an account
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input value="1" name="choice" class="choice" type="radio" data-choice="login-account">I already have an account
                            </label>
                        </div>
                        <div class="choices-buttons">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/starting-your-td-isa-application'!}" id="continue" class="btn btn-orange">Continue</a>
                            <a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=accountUpgrades" id="login-account" class="btn btn-orange hidden">Login To Your Account</a>
                        </div>
                    </div>
                    [#elseif parentPage.segment = "trading"]
                    <p>The application is quick, easy and secure. You can save your application and return to it at any time.</p>

                    <div id="choices" class="choices">
                        <div class="radio">
                            <label>
                                <input value="0" name="choice" class="choice" type="radio" data-choice="continue" checked="checked">I don't have an account
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input value="1" name="choice" class="choice" type="radio" data-choice="login-account">I already have an account
                            </label>
                        </div>
                        <div class="choices-buttons">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/starting-your-td-trading-application'!}" id="continue" class="btn btn-orange">Continue</a>
                            <a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=accountUpgrades" id="login-account" class="btn btn-orange hidden">Login To Your Account</a>
                        </div>
                    </div>   
                    [#elseif parentPage.segment = "technical-insights"]

                    <div id="choices" class="choices">
                        <div class="radio">
                            <label>
                                <input value="0" name="choice" class="choice" type="radio" data-choice="continue" checked="checked">I don't have an account
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input value="1" name="choice" class="choice" type="radio" data-choice="login-account">I already have an account
                            </label>
                        </div>
                        <div class="choices-buttons">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'get-started'!}" id="continue" class="btn btn-orange">Choose an Account</a>
                            <a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=technical-insights" id="login-account" class="btn btn-orange hidden">Login To Your Account</a>
                        </div>
                    </div>   
                    [#elseif parentPage.segment = "jisa"]
                    <div id="choices" class="choices">
                        <div class="radio">
                            <label>
                                <input value="0" name="choice" class="choice" type="radio" data-choice="continue" checked="checked">I don't have an account
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input value="1" name="choice" class="choice" type="radio" data-choice="login-account">I already have an account
                            </label>
                        </div>
                        <div class="choices-buttons">
                            <div id="login-account">
                                <ul class="tick-list">
                                    <li>Login to your account and go to Products/Services and Open New Account choosing Junior ISA</li>
                                    <li>Complete the online application</li>
                                    <li>If you’ve chosen to transfer you can see the progress in your account</li>
                                </ul>
                                <a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=accountUpgrades" class="btn btn-orange">Open a Junior ISA now</a>
                            </div>
                            <div id="continue" class="hidden">
                                <p>You need to have an existing TD Direct Investing account before you can open a Junior ISA.</p>
                                <a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=atp" class="btn btn-orange">Choose an Account</a>
                            </div>

                        </div>
                    </div>   
                    [#elseif parentPage.segment = "atp"]
                    <p>Advanced Trading Platform is an extra subscription package if you hold a Trading Account. If you have other accounts with us like a TD SIPP or an ISA you can also manage your portfolios through the Advanced Trading Platform, but you'll need to link them to a Trading Account first.</p>

                    <div id="choices" class="choices">
                        <div class="radio">
                            <label>
                                <input value="0" name="choice" class="choice" type="radio" data-choice="continue" checked="checked">I have a Trading account
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input value="0" name="choice" class="choice" type="radio" data-choice="no-trading">I don't have a Trading account
                            </label>
                        </div>

                        <div class="choices-buttons">
                            <div id="no-trading">
                                <p>If you haven't got a Trading Account with us you'll need to apply for one before subscribing for the Advanced Trading Platform. </p>
                                <ul class="tick-list">
                                    <li>Apply for a Trading Account.</li>
                                    <li>Once your Trading Account is up and running, Login and click on the Advanced Trading menu button</li>
                                    <li>Select your data & price package and subscribe. Your 2 week free trial will start as soon as your subscription is confirmed.</li>
                                    <li>You can modify your data package or unsubscribe at any time by clicking on the Modify My Package button.</li>
                                </ul>
                                <a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=accountUpgrades" class="btn btn-orange">Open a Trading account</a>
                            </div>
                            <div id="continue" class="hidden">
                                <ul class="tick-list">
                                    <li>Click the button below to login to your account</li>
                                    <li>Select your data & price package and subscribe. Your 2 week free trial will start as soon as your subscription is confirmed.</li>
                                    <li>You can modify your data package or unsubscribe at any time by clicking on the Modify My Package button.</li>
                                </ul>
                                <a href="https://secure.ii.co.uk/webbroker2/login.jsp?destination_op=atp" class="btn btn-orange">Subscribe Now</a>
                            </div>

                        </div>
                    </div>          
                    [/#if]
                </div>
                <!-- / main-content-block -->
                [/#if]