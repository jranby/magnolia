                [#assign id = content.@uuid/]
                [#assign slugId = id?replace(" ", "-")]
                
                <!-- main-content-block -->
                <div id="${slugId?lower_case}" class="main-content-block">

                    [#if content.panels?has_content]
                    <div class="row equal panel-wrap">
                        [#list cmsfn.children(content.panels) as panel]
                        <div class="${content.bootstrapColumns!"col-md-4"}">
                            <div class="panel panel-basic">

                                [#if panel.bgIcon?has_content]
                                [#assign bgIcon = damfn.getAsset(panel.bgIcon)!]
                                <img src="${bgIcon.getLink()};" alt="${panel.title!}" title="${panel.title!}" class="pull-right" />
                                [/#if]

                                <div class="panel-heading">
                                    [#if panel.title?has_content]
                                    <h3 class="panel-title">${panel.title!}</h3>
                                    [/#if]
                                </div>
                                <div class="panel-body">

                                    [#-- Text --]
                                    [#if panel.text?has_content]
                                    ${cmsfn.decode(panel).text!""}
                                    [/#if]

                                    [#-- Button --]
                                    [#if panel.buttonInternalLink?has_content]
                                    [#assign buttonUrlHref = cmsfn.link('website', panel.buttonInternalLink)!]
                                    <a href="${buttonUrlHref}" class="btn btn-${panel.buttonType!'green'}">${panel.buttonText!'Add Button Title'}</a>
                                    [#elseif panel.buttonExternalLink?has_content]
                                    <a href="${panel.buttonExternalLink}" class="btn btn-${panel.buttonType!'green'}" target="_blank">${panel.buttonText!'Add Button Title'}</a>                
                                    [/#if]                                    

                                </div>
                            </div>
                        </div>
                        [/#list]
                    </div>
                    [/#if]

                </div>
                <!-- / main-content-block -->
