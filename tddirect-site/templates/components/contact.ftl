                [#assign id = content.title!content.@uuid/]
                [#assign slugId = id?replace(" ", "-")]
                [#if content.bgIcon?has_content]
                [#assign bgIcon = damfn.getAsset(content.bgIcon!)/]
                <!-- contact-block -->
                <div id="${slugId?lower_case}" class="contact-block" style="background-image: url(${bgIcon.getLink()});">
                [#else]
                <!-- contact-block -->
                <div id="${slugId?lower_case}" class="contact-block">
                [/#if]

                    [#if content.title?has_content]
                    <h3 class="contact-title">${content.title}</h3>
                    [/#if]

                    [#if content.text?has_content]
                    ${cmsfn.decode(content).text}
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
                    [#elseif buttonLinkType == "linkAsset"]
                    [#assign asset = damfn.getAsset(content.buttonLinklinkAsset!) /]
                    <a href="${asset.getLink()}" class="btn btn-${content.buttonType!'green'}" target="_blank" onclick="${tracking}">${content.buttonTitle}</a>                    
                    [/#if]
                    [/#if]

                </div>
                <!-- / contact-block -->
                
