                [#assign classes = 'main-content-block main-content-block-list cf']
                <!-- main-content-block -->
                <div id="${content.@uuid}" class="${classes!}">
                    [#if content.list?has_content]
                    [#if content.type == 'number']
                    <ol class="list ${content.type + "-list"!}">
                    [#else]
                    <ul class="list ${content.type + "-list"!}">
                    [/#if]
                        [#list cmsfn.children(content.list) as field]
                        [#if field.linklinkInternal?has_content]
                        <li><a href="${cmsfn.link("website", field.linklinkInternal)!}">${field.text}</a></li>
                        [#elseif field.linklinkExternal?has_content]
                        <li><a href="${field.linklinkExternal!}" target="_blank">${field.text!}</a></li>
                        [#elseif field.linklinkStock?has_content]
                        [#assign segments = field.linklinkStock?split('/')]
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+segments?last!}">${field.text!}</a></li>
                        [#elseif field.linklinkFund?has_content]
                        [#assign segments = field.linklinkFund?split('/')]
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds/'+segments?last!}">${field.text!}</a></li>
                        [#elseif field.linklinkArticle?has_content]
                        <li><a href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-news/article'+field.linklinkArticle!}">${field.text!}</a></li>
                        [#elseif field.linklinkAsset?has_content]
                        <li><a href="${damfn.getAssetLink(field.linklinkAsset)!}" target="_blank">${field.text!}</a></li>
                        [#else]
                        <li>${field.text!}</li>
                        [/#if]
                        [/#list]
                    [#if content.type == 'number']
                    </ol>
                    [#else]
                    </ul>
                    [/#if]
                    [/#if]
                </div>
                <!-- / main-content-block -->
