                [#if content.panels?has_content]
                [#list cmsfn.children(content.panels) as panel]
                [#assign id = panel.@uuid/]
                [#if panel.theme?has_content]
                [#assign theme = panel.theme]
                [#else]
                [#assign theme = 'light']
                [/#if]                
                <!-- icon-panel -->
                <div id="${id}" class="${content.bootstrapColumns!'col-md-4'} ${theme}">
                    <div class="panel icon-panel remove-bottom text-center">
                        [#if panel.bgIcon?has_content]
                        [#assign bgIcon = damfn.getAsset(panel.bgIcon)!]
                        <img src="${bgIcon.getLink()};" alt="${panel.title!}" title="${panel.title!}" class="half-bottom" />
                        [/#if]
                        <div class="panel-heading">
                            [#if panel.title?has_content]
                            <h3 class="panel-title">${panel.title!}</h3>
                            [/#if]
                        </div>
                        <div class="panel-body">
                            [#if panel.text?has_content]
                            ${cmsfn.decode(panel).text!''}
                            [/#if]                                    
                        </div>
                    </div>
                </div>
                <!-- / icon-panel -->
                [/#list]
                [/#if]
