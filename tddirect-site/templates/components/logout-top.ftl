        [#assign parentPage = cmsfn.page(content)]
        [#if content.bgImage?has_content]
        [#assign bgImage = damfn.getAsset(content.bgImage)!]
        <!-- main-top -->
        <header id="main-top" class="row[#if parentPage.alertDisplay?has_content && parentPage.alertDisplay == true && !cmsfn.editMode] hidden[/#if]" style="background-image: url(${bgImage.getLink()}); ">
        [#else]
        <!-- main-top -->
        <header id="main-top" class="row[#if parentPage.alertDisplay?has_content && parentPage.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">
        [/#if]

            <div class="col-xs-12 col-md-11 col-lg-8">

                [#if content.title?has_content]
                [#if parentPage.hideBreadcrumbs?has_content && parentPage.hideBreadcrumbs == true]
                    [#assign titleMargin = " half-bottom"]
                [/#if]
                <h1 class="main-title ${titleMargin!}">${content.title!}[#if content.subtitle?has_content] <span>(${content.subtitle})</span>[/#if]</h1>
                [#else]
                <h1 class="main-title ${titleMargin!}">${content.title}[#if content.subtitle?has_content] <span>(${content.subtitle})</span>[/#if]</h1>
                [/#if]

                [#if content.text?has_content]${cmsfn.decode(content).text}[/#if]  

            </div>

            <div class="col-xs-12">

                [#if content.buttons?has_content]
                [#list cmsfn.children(content.buttons) as button]
                [#if button.buttonLink?has_content]
                [#assign tracking = '']
                [#if button.buttonTagCategory?? && button.buttonTagAction?? && button.buttonTagLabel??]
                [#assign tracking = 'dataLayer.push({\'event\': \'GAEvent\', \'category\': \'${button.buttonTagCategory}\', \'action\': \'${button.buttonTagAction}\', \'label\': \'${button.buttonTagLabel}\'});']
                [/#if]                
                [#assign buttonLinkType = button.buttonLink]
                [#if buttonLinkType == "linkInternal"]
                [#assign buttonLinkHref = cmsfn.link("website", button.buttonLinklinkInternal)!]
                <a href="${buttonLinkHref}" class="btn btn-${button.buttonType}" onclick="${tracking}">${button.buttonText}</a>
                [#elseif buttonLinkType == "linkExternal"]
                <a href="${button.buttonLinklinkExternal}" class="btn btn-${button.buttonType}" target="_blank" onclick="${tracking}">${button.buttonText}</a>
                [#elseif buttonLinkType == "linkAnchor"]
                <a href="#" id="${button.buttonLinklinkAnchor}" class="btn btn-${button.buttonType}" onclick="${tracking}">${button.buttonText}</a>
                [#elseif buttonLinkType == "linkAsset"]
                [#assign asset = damfn.getAsset(button.buttonLinklinkAsset!) /]
                <a href="${asset.getLink()}" class="btn btn-${button.buttonType}" target="_blank" onclick="${tracking}">${button.buttonText}</a>                    
                [/#if]                
                [/#if]            
                [/#list]
                [/#if]

            </div>

        </header>
        <!-- / main-top -->