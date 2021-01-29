        [#assign parentPage = cmsfn.page(content)]
        [#assign pageNode = state.getCurrentURI()]
        [#if content.links?has_content]
        [#if content.bootstrapColumns == 'none']
        
        <!-- section-choices-alt -->
        <section id="section-choices-alt" class="row[#if parentPage.alertDisplay?has_content && parentPage.alertDisplay == true] hidden[/#if]">

            <ul class="choices">
            
                [#list cmsfn.children(content.links) as link]
                [#assign slugId = link.linkText?replace(" ", "-")]
                [#if link.linkUrl?has_content && link.linkUrllinkInternal?has_content]
                [#assign linkContent = cmsfn.contentById(link.linkUrllinkInternal, "website")]
                [#assign linkContentPath = linkContent.@path]
                [#if linkContentPath?contains('/UK')]
                    [#assign linkPath = linkContentPath?keep_after('/UK')]
                [#elseif linkContentPath?contains('/IE')]
                    [#assign linkPath = linkContentPath?keep_after('/IE')]
                [#elseif linkContentPath?contains('/CS')]
                    [#assign linkPath = linkContentPath?keep_after('/CS')]
                [/#if]
                <li id="${slugId?lower_case}" class="choice[#if linkPath == pageNode] current[/#if]">
                    [#assign linkHref = cmsfn.link("website", link.linkUrllinkInternal)!]
                    <a href="${linkHref!}" class="btn">${link.linkText}</a>
                </li>
                </li>
                [#else]
                <li id="${slugId?lower_case}" class="choice">
                    [#assign linkHref = link.linkUrllinkExternal!]
                    <a href="${linkHref!}" class="btn" target="_blank">${link.linkText}</a>
                </li>
                </li>                    
                [/#if]
                [/#list]

            </ul>

        </section>
        <!-- / section-choices-alt -->
        [#else]
        
        <!-- section-choices -->
        <section id="section-choices" class="row[#if parentPage.alertDisplay?has_content && parentPage.alertDisplay == true] hidden[/#if]">

            <ul class="choices">
            
                [#list cmsfn.children(content.links) as link]
                [#assign slugId = link.linkText?replace(" ", "-")]
                [#if link.linkUrl?has_content && link.linkUrllinkInternal?has_content]
                [#assign linkContent = cmsfn.contentById(link.linkUrllinkInternal, "website")]
                [#assign linkContentPath = linkContent.@path]
                [#if linkContentPath?contains('/UK')]
                    [#assign linkPath = linkContentPath?keep_after('/UK')]
                [#elseif linkContentPath?contains('/IE')]
                    [#assign linkPath = linkContentPath?keep_after('/IE')]
                [#elseif linkContentPath?contains('/CS')]
                    [#assign linkPath = linkContentPath?keep_after('/CS')]
                [/#if]
                <li id="${slugId?lower_case}" class="${content.bootstrapColumns + " "!}choice[#if linkPath == pageNode] current[/#if]">
                    [#assign linkHref = cmsfn.link("website", link.linkUrllinkInternal)!]
                    <a href="${linkHref!}" class="btn">${link.linkText}</a>
                </li>
                </li>
                [#else]
                <li id="${slugId?lower_case}" class="${content.bootstrapColumns + " "!}choice">
                    [#assign linkHref = link.linkUrllinkExternal!]
                    <a href="${linkHref!}" class="btn" target="_blank">${link.linkText}</a></li>
                </li>
                [/#if]
                [/#list]

            </ul>

        </section>
        <!-- / section-choices -->
        [/#if]
        [/#if]
