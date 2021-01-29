            [#if content.bgImage?has_content]
            [#assign bgImage = damfn.getAsset(content.bgImage!)/]
            <!-- front-widget -->
            <div class="col-md-6 front-widget ${content.class!""}" style="background-image: url(${bgImage.getLink()}); ">
            [#else]
            
            <!-- front-widget -->
            <div class="col-md-6 front-widget ${content.class!""}">
            [/#if]

                [#if content.title?has_content]
                <h3 class="front-widget-type-title">${content.title}</h3>
                [/#if]
                [#if content.subtitle?has_content]
                <h4 class="front-widget-title">${content.subtitle}</h4>
                [/#if]
                [#if content.text?has_content]
                ${cmsfn.decode(content).text}
                [/#if]
                [#if content.buttons?has_content]
                [#list cmsfn.children(content.buttons) as button]
                [#if button.buttonLink?has_content]
                [#assign buttonLinkType = button.buttonLink]
                [#if buttonLinkType == "linkInternal"]
                [#assign buttonLinkHref = cmsfn.link("website", button.buttonLinklinkInternal)!]
                <a href="${buttonLinkHref}" class="btn btn-widget btn-${button.buttonType}">${button.buttonText}</a>
                [#elseif buttonLinkType == "linkExternal"]
                <a href="${button.buttonLinklinkExternal}" class="btn btn-widget btn-${button.buttonType}" target="_blank">${button.buttonText}</a>
                [/#if]
                [/#if]            
                [/#list]
                [/#if]

            </div>
            <!-- / front-widget -->
