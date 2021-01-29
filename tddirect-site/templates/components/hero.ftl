    [#if content.image?has_content]
    [#assign image = damfn.getAsset(content.image!)/]
    [#assign rendition = damfn.getRendition(content.image,'1920')]
    [#assign currentSite = cmsfn.siteRoot(content)]
    [#if content.theme?has_content]
    [#assign theme = content.theme]
    [#else]
    [#assign theme = 'light']
    [/#if]
    <!-- hero -->
    <section id="hero" class="wrap ${theme}" style="background-image: url(${rendition.getLink()!});">
        <div class="container">
            <div class="row">
                <div id="hero-content" class="col-xs-12 col-md-10 col-lg-8">
                    [#if content.title?has_content]
                    <h1>${content.title}</h1>
                    [/#if]
                    [#if content.midtitle?has_content]
                    <p class="lead">${content.midtitle}</p>
                    [/#if]
                    [#if content.subtitle?has_content]
                    <p class="rear">${content.subtitle}</p>
                    [/#if]
                    [#if content.link?has_content || content.risk?has_content]
                    <ul class="list-unstyled cf">
                        [#if content.link?has_content]
                        [#assign tracking = '']
                        [#if content.linkTagCategory?has_content && content.linkTagAction?has_content && content.linkTagLabel?has_content]
                        [#assign tracking = 'dataLayer.push({\'event\': \'GAEvent\', \'category\': \'${content.linkTagCategory}\', \'action\': \'${content.linkTagAction}\', \'label\': \'${content.linkTagLabel}\'});']
                        [/#if]
                        [#if content.linklinkInternal?has_content]
                        <li><a href="${cmsfn.link("website", content.linklinkInternal)!}" class="btn btn-[#if currentSite == 'CS']orange[#else]white[/#if]" onclick="${tracking}">Find Out More</a></li>
                        [#elseif content.linklinkExternal?has_content]
                        <li><a href="${content.linklinkExternal!}" class="btn btn-[#if currentSite == 'CS']orange[#else]white[/#if]" onclick="${tracking}" target="_blank">Find Out More</a></li>
                        [#elseif content.linklinkStock?has_content]
                        [#assign segments = content.linklinkStock?split('/')]
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+segments?last!}" class="btn btn-[#if currentSite == 'CS']orange[#else]white[/#if]" onclick="${tracking}">Find Out More</a></li>
                        [#elseif content.linklinkFund?has_content]
                        [#assign segments = content.linklinkFund?split('/')]
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds/'+segments?last!}" class="btn btn-[#if currentSite == 'CS']orange[#else]white[/#if]" onclick="${tracking}">Find Out More</a></li>
                        [#elseif content.linklinkArticle?has_content]
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article'+content.linklinkArticle!}" class="btn btn-[#if currentSite == 'CS']orange[#else]white[/#if]" onclick="${tracking}">Find Out More</a></li>
                        [#elseif content.linklinkAsset?has_content]
                        <li><a href="${damfn.getAssetLink(content.linklinkAsset)!}" class="btn btn-[#if currentSite == 'CS']orange[#else]white[/#if]" onclick="${tracking}" target="_blank">Find Out More</a></li>
                        [/#if]
                        [/#if]
                        [#if content.risk?has_content]
                        <li>${content.risk!}</li>
                        [/#if]
                    </ul>
                    [/#if]
                </div>
            </div>
        </div>
    </section>
    <!-- / hero -->
    [/#if]