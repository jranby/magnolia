                [#assign id = content.title!content.subtitle!content.@uuid/]
                [#assign slugId = id?replace(" ", "-")]
                
                <!-- main-content-block -->
                <div id="${slugId?lower_case}" class="main-content-block">

                    [#-- Title --]
                    [#if content.title?has_content]
                    <h2 class="main-content-title-large">${content.title}</h2>
                    [/#if]

                    [#-- Subtitle --]
                    [#if content.subtitle?has_content]
                    <h3 class="main-content-title">${content.subtitle}</h3>
                    [/#if]
                    
                    [#-- Text --]
                    [#if content.text?has_content]
                    ${cmsfn.decode(content).text}
                    [/#if]
                    
                    [#-- Chart --]
                    [#if content.chartID?has_content]
                    <div id="${content.chartID}" class="chart-wrap" [#if content.chartHeight?has_content]style="height:${content.chartHeight}px;"[#else]style="height:2000px;"[/#if]></div>
                    [/#if]

                </div>
                <!-- / main-content-block -->
