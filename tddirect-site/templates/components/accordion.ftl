                [#assign id = content.@uuid!content.title/]
                [#assign slugId = id?replace(" ", "-")]
                
                <!-- main-content-block -->
                <div id="${slugId?lower_case}" class="main-content-block">
                    [#if content.title?has_content]
                    <h2 class="main-content-title">${content.title}</h2>
                    [/#if]
                    [#if content.panels?has_content]                    
                    <div class="panel-group" id="accordion-${content.@uuid}" role="tablist" aria-multiselectable="true">
                        [#list cmsfn.children(content.panels) as panel]
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="panel-heading-${slugId?lower_case}-${panel_index}">
                                <h4 class="panel-title">
                                    [#if panel.title?has_content]
                                    <a role="button" data-toggle="collapse" data-parent="#accordion-${content.@uuid}" href="#collapse-${slugId?lower_case}-${panel_index}"[#if panel_index == 0] aria-expanded="false" [/#if]aria-controls="collapse-${panel_index}">${panel.title!}</a>
                                    [/#if]
                                </h4>
                            </div>
                            <div id="collapse-${slugId?lower_case}-${panel_index}" class="panel-collapse collapse[#if panel_index == 0] in-[/#if]" role="tabpanel" aria-labelledby="panel-heading-${slugId?lower_case}-${panel_index}">
                                <div class="panel-body">
                                    [#if panel.text?has_content]
                                    ${cmsfn.decode(panel).text!""}
                                    [/#if]
                                </div>
                            </div>
                        </div>
                        [/#list]
                    </div>
                    [/#if]

                </div>
                <!-- / main-content-block -->
