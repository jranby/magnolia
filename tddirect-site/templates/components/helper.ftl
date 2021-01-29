        <!-- helper-wrap -->
        <section id="helper-wrap" class="row">

            <!-- how-to-help -->
            <div id="how-to-help">

                [#include '/tddirect-site/templates/components/quick-quote.ftl']
                [#assign currentSite = cmsfn.siteRoot(content)]

                [#if content.title?has_content]<h2 class="helper-title">${content.title}</h2>[/#if]
                [#if content.subtitle?has_content]<h3 class="helper-subtitle">${content.subtitle}</h3>[/#if]
                [#if currentSite == 'UK']
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'get-started'!}" class="btn btn-orange">Choose An Account</a>
                [#elseif currentSite == 'IE']
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started'!}" class="btn btn-orange">Choose An Account</a>
                [#elseif currentSite == 'CS']
                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'getting-started'!}" class="btn btn-orange">Choose An Account</a>
                [/#if]
            </div>
            <!-- / how-to-help -->

            [#if (content.blocks)?has_content ]
            <!-- helper-blocks -->
            <div id="helper-blocks" class="no-gutter">
                [#list cmsfn.children(content.blocks) as block ]
                
                <div class="col-xs-12 col-md-4 helper-block">
                    [#assign linkHref = cmsfn.link("website", block.link)!]
                    <h4 class="helper-block-title"><a href="${linkHref!}">${block.title!}</a></h4>
                    [#if block.bgIcon?has_content]
                    [#assign bgIcon = damfn.getAsset(block.bgIcon)!]
                    <div class="helper-block-text" style="background-image: url(${bgIcon.getLink()}); ">
                        <p>${block.text!}</p>
                    </div>
                    [#else]
                    <div class="helper-block-text">
                        <p>${block.text!}</p>
                    </div>
                    [/#if]
                    <a href="${linkHref}" class="btn btn-${block.linkType!}">${block.linkText!}</a>
                </div>
                [/#list]

            </div>
            <!-- / helper-blocks -->
            [/#if]           

        </section>
        <!-- / helper-wrap -->