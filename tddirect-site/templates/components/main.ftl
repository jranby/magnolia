                [#assign id = content.title!content.subtitle!content.@uuid/]
                [#assign slugId = id?replace(" ", "-")]
                [#assign classes = 'main-content-block cf']
                [#if content.extraWidth?? && content.extraWidth = true][#assign classes = classes + ' extra-width'][/#if]
                [#if content.padded?? && content.padded = true][#assign classes = classes + ' padded'][/#if]
                [#if content.bordered?? && content.bordered = true][#assign classes = classes + ' bordered'][/#if]
                [#if content.shaded?? && content.shaded = true][#assign classes = classes + ' shaded'][/#if]
                
                <!-- main-content-block -->
                <div id="${slugId?lower_case}" class="${classes}">

                    [#-- Title --]
                    [#if content.title?has_content]
                    [#if !content.titleH1?has_content || content.titleH1 == false]
                    <h2 class="main-content-title-large">${content.title}</h2>
                    [#else]
                    <h1 class="main-content-title-large">${content.title}</h1>
                    [/#if]
                    [/#if]

                    [#-- Subtitle --]
                    [#if content.subtitle?has_content]
                    <h3 class="main-content-title">${content.subtitle}</h3>
                    [/#if]

                    [#-- Image --]
                    [#if content.image?has_content]
                    [#assign rendition = damfn.getAsset(content.image)!]
                    [#include "/tddirect-site/templates/macros/image.ftl"]
                    [@image rendition content false def.parameters /]
                    [/#if]

                    [#-- Video --]
                    [#assign videoHtml = ""]
                    [#if content.videoType?has_content && (content.videoType == "asset" && content.source??) || content.videoType?has_content && content.videoType == "embed"]
                    [#include "/tddirect-site/templates/macros/video.ftl"]
                    [#assign videoHtml][@video content/][/#assign]
                    [#assign videoDivClass = 'video-container no-gutter']
                    [#if content.videoAlign?has_content]
                    [#assign videoDivClass = videoDivClass + ' ' + content.videoAlign!]
                    [#if content.videoAlign != 'none']
                    [#if content.videoColumns?has_content]
                    [#assign videoColumns = content.videoColumns]
                    [#else]
                    [#assign videoColumns = 'col-md-6']
                    [/#if]
                    [#assign videoDivClass = videoDivClass + ' col-xs-12 ' + videoColumns]
                    [/#if]
                    [/#if]                   
                    <div class="${videoDivClass}">
                        ${videoHtml}
                    </div>
                    [/#if]
                    
                    [#-- Text --]
                    [#if content.text?has_content]
                    ${cmsfn.decode(content).text}
                    [/#if]

                    [#-- List --]
                    [#if content.listItems?has_content]
                    [#if content.listType == 'number']
                    <ol class="list ${content.listType + "-list"!}[#if content.columns?? && content.columns = true] list-cols[/#if]">
                        [#list content.listItems as item]
                        <li>${item}</li>
                        [/#list]
                    </ol>
                    [#else]
                    <ul class="list ${content.listType + "-list"!}[#if content.columns?? && content.columns = true] list-cols[/#if]">
                        [#list content.listItems as item]
                        <li>${item}</li>
                        [/#list]
                    </ul>
                    [/#if]
                    [/#if]

                    [#-- Button --]
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
                    <a href="${content.buttonLinklinkAnchor}" id="${content.buttonLinklinkAnchor}" class="btn btn-${content.buttonType!'green'}" onclick="${tracking}">${content.buttonTitle}</a>
                    [#elseif buttonLinkType == "linkAsset"]
                    <a href="${damfn.getAssetLink(content.buttonLinklinkAsset)}" class="btn btn-${content.buttonType!'green'}" target="_blank" onclick="${tracking}">${content.buttonTitle}</a>                    
                    [/#if]
                    [/#if]

                </div>
                <!-- / main-content-block -->
