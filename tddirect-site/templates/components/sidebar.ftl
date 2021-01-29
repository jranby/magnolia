                [#assign id = content.title!content.@uuid/]
                [#assign slugId = id?replace(" ", "-")]
                <!-- widget -->
                <div id="${slugId?lower_case}" class="widget ${content.class}">

                    [#if content.bgIcon?has_content]
                    [#assign bgIcon = damfn.getAsset(content.bgIcon)]
                    <img src="${bgIcon.getLink()};" alt="${content.title!}" title="${content.title!}" class="pull-right" />
                    [/#if]

                    [#if content.title?has_content]
                    <h4 class="widget-title">${content.title}</h4>
                    [/#if]

                    [#if content.text?has_content]
                    ${cmsfn.decode(content).text}
                    [/#if]                 
                    
                    [#if content.list?has_content]
                    <ul class="widget-links">
                        [#list cmsfn.children(content.list) as field]
                        [#if field.linklinkInternal?has_content]
                        <li><a href="${cmsfn.link("website", field.linklinkInternal)!}">${field.linkText}</a></li>
                        [#elseif field.linklinkExternal?has_content]
                        <li><a href="${field.linklinkExternal!}" target="_blank">${field.linkText!}</a></li>
                        [#else]
                        <li>${field.linkText!}</li>
                        [/#if]
                        [/#list]
                    </ul>
                    [/#if]

                    [#if content.columns?has_content]
                    <div class="widget-cols-wrap">
                        [#list cmsfn.children(content.columns) as row]
                        <div class="widget-cols-row cf">
                            <div class="widget-col widget-col-left">${row.leftColumnText}</div>
                            <div class="widget-col widget-col-right">${row.rightColumnText}</div>
                        </div>
                        [/#list]  
                    </div>
                    [/#if]                                      

                    [#if content.buttonLink?has_content && (content.buttonLinklinkInternal?has_content || content.buttonLinklinkExternal?has_content || content.buttonLinklinkAnchor?has_content || content.buttonLinklinkAsset?has_content)]
                    [#assign tracking = '']
                    [#if content.buttonTagCategory?? && content.buttonTagAction?? && content.buttonTagLabel??]
                    [#assign tracking = 'dataLayer.push({\'event\': \'GAEvent\', \'category\': \'${content.buttonTagCategory}\', \'action\': \'${content.buttonTagAction}\', \'label\': \'${content.buttonTagLabel}\'});']
                    [/#if]                    
                    [#assign buttonLinkType = content.buttonLink]
                    [#if buttonLinkType == "linkInternal"]
                    [#assign buttonLinkHref = cmsfn.link('website', content.buttonLinklinkInternal)!]
                    <a href="${buttonLinkHref}" class="btn btn-${content.buttonType!'green'}" onclick="${tracking}">${content.buttonTitle}</a>
                    [#elseif buttonLinkType == "linkExternal"]
                    <a href="${content.buttonLinklinkExternal}" class="btn btn-${content.buttonType!'green'}" target="_blank" onclick="${tracking}">${content.buttonTitle}</a>
                    [#elseif buttonLinkType == "linkAnchor"]
                    <a href="#" id="${content.buttonLinklinkAnchor}" class="btn btn-${content.buttonType!'green'}" onclick="${tracking}">${content.buttonTitle}</a>
                    [#elseif buttonLinkType == "linkAsset"]
                    <a href="${damfn.getAssetLink(content.buttonLinklinkAsset)}" class="btn btn-${content.buttonType!'green'}" target="_blank" onclick="${tracking}">${content.buttonTitle}</a>                    
                    [/#if]
                    [/#if]

                </div>
                <!-- / widget -->
