                [#assign componentParentPage = cmsfn.page(content)]
                <!-- risk-top -->
                <div id="risk-top" class="row add-bottom">

                    <div class="col-xs-12 col-md-9">
                
                        <h1 class="risk-title">${componentParentPage.title!}</h1>
                        [#if content.text?has_content]${cmsfn.decode(content).text!""}[/#if]

                    </div>

                </div>
                <!-- / risk-top -->

                <!-- risk-blocks -->
                <div id="risk-blocks" class="row add-bottom">

                    <!-- risk-block-left -->
                    <div id="risk-block-left" class="col-xs-12 col-md-6">

                        [#if content.leftRiskBlocks?has_content]
                        [#list cmsfn.children(content.leftRiskBlocks) as block]
                        <div class="risk-block">
                            <h3 class="risk-block-title">${block.title!}</h3>
                            ${cmsfn.decode(block).text}
                        </div>
                        [/#list]
                        [/#if]

                    </div>
                    <!-- / risk-block-left -->

                    <!-- risk-block-right -->
                    <div id="risk-block-right" class="col-xs-12 col-md-6">

                        [#if content.rightRiskBlocks?has_content]
                        [#list cmsfn.children(content.rightRiskBlocks) as block]
                        <div class="risk-block">
                            <h3 class="risk-block-title">${block.title!}</h3>
                            ${cmsfn.decode(block).text}
                        </div>
                        [/#list]
                        [/#if]

                    </div>
                    <!-- / risk-block-right -->

                </div>
                <!-- / risk-blocks -->

                <!-- risk-disclaimer -->
                [#if content.countrySelect?has_content && content.countrySelect == false]
                <div id="risk-disclaimer" class="row add-bottom">

                    <!-- risk-disclaimer-left -->
                    <div id="risk-disclaimer-left" class="col-xs-12 col-md-10">

                        [#if content.disclaimer?has_content]${cmsfn.decode(content).disclaimer!''}[/#if]

                    </div>
                    <!-- / risk-disclaimer-left -->

                    <!-- risk-disclaimer-right -->
                    <div id="risk-disclaimer-right" class="col-xs-12 col-md-2">

                        [#if content.buttonLink?has_content && (content.buttonLinklinkInternal?has_content || content.buttonLinklinkExternal?has_content)]
                        [#if content.buttonLink == "linkInternal"]
                        <a href="${cmsfn.link("website", content.buttonLinklinkInternal)!}" id="risk-disclaimer-btn" class="btn btn-orange">${content.buttonTitle}</a>
                        [#elseif content.buttonLink == "linkExternal"]
                        <a href="${content.buttonLinklinkExternal}" class="btn btn-orange" id="risk-disclaimer-btn" target="_blank">${content.buttonTitle}</a>
                        [/#if]
                        [/#if]

                    </div>
                    <!-- / risk-disclaimer-right -->

                </div>
                [#else]
                <div id="risk-disclaimer" class="row">

                    <!-- risk-disclaimer-left -->
                    <div id="risk-disclaimer-left" class="col-xs-12 add-bottom text-center">

                        [#if content.disclaimer?has_content]${cmsfn.decode(content).disclaimer!''}[/#if]

                    </div>
                    <!-- / risk-disclaimer-left -->

                    <!-- risk-disclaimer-country-select -->
                    <div id="risk-disclaimer-country-select" class="col-xs-6 half-bottom">

                        <dl class="country-select-dropdown pull-right">
                            <dt><a href="#" class="btn btn-white-alt country-select-toggle"><span class="country-result">Select your country</span> <span class="caret"></span></a></dt>
                            <dd>
                                <ul id="country-select">
                                    <li><a id="gb" class="country" href="#"><img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/flags/gb.png" alt="United Kingdom" /> United Kingdom</a></li>
                                    <li><a id="ge" class="country" href="#"><img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/flags/ge.png" alt="Guernsey" /> Guernsey</a></li>
                                    <li><a id="ma" class="country" href="#"><img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/flags/ma.png" alt="Isle of Man" /> Isle of Man</a></li>
                                    <li><a id="je" class="country" href="#"><img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/flags/je.png" alt="Jersey" /> Jersey</a></li>
                                    <li><a id="ot" class="country" href="#"><img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/flags/other.png" alt="Other" /> Other</a></li>
                                </ul>
                            </dd>
                        </dl>                        

                    </div>
                    <!-- / risk-disclaimer-country-select -->

                    <!-- risk-disclaimer-right -->
                    <div id="risk-disclaimer-right" class="col-xs-6 half-bottom text-left">

                        [#if content.buttonLink?has_content && (content.buttonLinklinkInternal?has_content || content.buttonLinklinkExternal?has_content)]
                        [#if content.buttonLink == "linkInternal"]
                        <a href="${cmsfn.link("website", content.buttonLinklinkInternal)!}" id="risk-disclaimer-btn" class="btn btn-orange disabled">${content.buttonTitle}</a>
                        [#elseif content.buttonLink == "linkExternal"]
                        <a href="${content.buttonLinklinkExternal}" id="risk-disclaimer-btn" class="btn btn-orange disabled" target="_blank">${content.buttonTitle}</a>
                        [/#if]
                        [/#if]

                    </div>
                    <!-- / risk-disclaimer-right -->

                    <!-- risk-disclaimer-alert -->
                    <div id="risk-disclaimer-alert" class="col-xs-12 hidden">

                        <div class="alert alert-danger text-center">
                            <p class="remove-bottom">To open an account from another country, please visit <a href="http://internaxx.com/">Internaxx</a>, our international service.<br />To open a Trading Account you must be 18 or over and either a UK, Channel Islands or Isle of Man resident.</p>
                        </div>

                    </div>
                    <!-- / risk-disclaimer-alert -->


                </div>
                [/#if]
                <!-- / risk-disclaimer -->                