            [#-- Renders an image (asset) rendition --]
            [#macro image image content useOriginal=false definitionParameters={}]
                [#if image?has_content]
                    [#assign imageMap = damfn.getAssetMap(content.image)]              
                    [#-- Fallback text for alt text --]
                    [#assign assetTitle = i18n['image.no.alt']]
                    [#assign assetTitle = '']
                    [#if imageMap?? && imageMap.title?has_content]
                        [#assign assetTitle = imageMap.title]
                    [/#if]

                    [#-- Alt text and title --]
                    [#assign imageAlt = content.imageAltText!content.imageTitle!assetTitle!]
                    [#assign imageTitle = content.imageTitle!content.imageAltText!assetTitle!]

                    [#assign imageLink = image.link]
                    [#-- For PNGs/GIFs it might be useful to use render the original asset and therefore bypassing imaging --]
                    [#if useOriginal]
                        [#assign imageLink = imageMap.link]
                    [/#if]

                    [#-- Image caption / credit; Falls back to asset's properties --]
                    [#assign imageCaption = content.imageCaption!imageMap.caption!""]
                    [#assign imageCredit = content.imageCredit!imageMap.copyright!""]

                    [#-- CSS --]
                    [#assign divClass = 'main-content-image no-gutter']
                    [#if content.imageAlign?has_content]
                        [#assign divClass = divClass + ' ' + content.imageAlign!]
                        [#assign imgClass = content.imageAlign!]
                    [/#if]
                    [#if content.imageAlign != 'aligncenter']
                        [#assign divClass = divClass + ' col-xs-12 col-md-6']
                    [/#if]

                    <figure class="${divClass}">

                        [#if content.imageLink?has_content && (content.imageLinklinkInternal?has_content || content.imageLinklinkExternal?has_content)]
                        [#assign imageLinkType = content.imageLink]
                        [#if imageLinkType == "linkInternal"]
                        [#assign imageLinkHref = cmsfn.link("website", content.imageLinklinkInternal)!]
                        <a href="${imageLinkHref}">
                            <img src="${imageLink}" alt="${imageAlt}" title="${imageTitle}" class="" />
                        </a>
                        [#elseif imageLinkType == "linkExternal"]
                        <a href="${content.imageLinklinkExternal}">
                            <img src="${imageLink}" alt="${imageAlt}" title="${imageTitle}" class="" />
                        </a>
                        [/#if]
                        [#else]
                        <img src="${imageLink}" alt="${imageAlt}" title="${imageTitle}" class="" />
                        [/#if]

                        [#if imageCaption?has_content]
                        <figcaption class="image-caption">${imageCaption}</figcaption>
                        [/#if]
                        [#if imageCredit?has_content]
                        <figcaption class="image-credit"><cite>${imageCredit}</cite></figcaption>
                        [/#if]

                    </figure>                        

                [/#if]
            [/#macro]                
                                