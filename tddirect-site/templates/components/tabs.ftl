                [#assign id = content.title!content.subtitle!content.@uuid/]
                [#assign slugId = id?replace(" ", "-")]
                
                <!-- main-content-block -->
                <div id="${slugId?lower_case}" class="main-content-block">

                    [#if content.tabs?has_content]
                    <div class="row tabs-wrap extra-width">

                        <!-- ${slugId?lower_case}-tabs -->
                        <ul id="${slugId?lower_case}-tabs" class="tab-links border-bottom cf">
                            [#list cmsfn.children(content.tabs) as tab]
                            <li class="tab-link[#if tab_index == 0] current[/#if]" data-tab="${tab.slug!}"><span>${tab.title!}</span></li>
                            [/#list]
                        </ul>
                        <!-- / ${slugId?lower_case}-tabs -->

                        <!-- ${slugId?lower_case}-panes -->
                        [#list cmsfn.children(content.tabs) as tab]
                        <div class="tab-content ${slugId?lower_case}-pane[#if tab_index == 0] current[/#if]" id="${tab.slug!}">

                            [#-- Text --]
                            [#if tab.text?has_content]
                            ${cmsfn.decode(tab).text!""}
                            [/#if]

                            [#-- Chart --]
                            [#if tab.chart?has_content]
                            <div id="${tab.chart}" class="chart-wrap" [#if tab.chartHeight?has_content]style="height:${tab.chartHeight}px;"[#else]style="height:2000px;"[/#if]></div>
                            [/#if]                            

                            [#-- Button --]
                            [#if tab.buttonLink?has_content]
                            [#assign buttonLinkHref = cmsfn.link('website', tab.buttonLink)!]
                            <a href="${buttonLinkHref}" class="btn btn-green">${tab.buttonText!'Add Button Title'}</a>
                            [/#if]

                        </div>
                        [/#list]
                        <!-- / ${slugId?lower_case}-panes -->


                    </div>
                    [/#if]

                </div>
                <!-- / main-content-block -->
