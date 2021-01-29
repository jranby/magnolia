        [#assign parentPage = cmsfn.page(content)]
        [#if content.bgImage?has_content]
        [#assign bgImage = damfn.getAsset(content.bgImage)!]
        <!-- main-top-alt -->
        <header id="main-top-alt" class="row[#if parentPage.alertDisplay?has_content && parentPage.alertDisplay == true && !cmsfn.editMode] hidden[/#if]" style="background-image: url(${bgImage.getLink()}); ">
        [#else]
        <!-- main-top-alt -->
        <header id="main-top-alt" class="row[#if parentPage.alertDisplay?has_content && parentPage.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">
        [/#if]

            <div class="col-xs-12 col-md-11 col-lg-9">
                [#if content.text?has_content]
                <p class="top-static">${content.text}</p>
                [/#if]
                [#if content.title?has_content]
                <h1 class="main-title half-bottom">${content.title}</h1>
                [/#if]
                [#if content.subtitle?has_content]
                <h2 class="main-subtitle add-bottom">${content.subtitle}</h2>
                [/#if]
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
                <a href="${buttonLinkHref!}" class="btn btn-${button.buttonType}" onclick="${tracking}">${button.buttonText}</a>
                [#elseif buttonLinkType == "linkExternal"]
                <a href="${button.buttonLinklinkExternal}" class="btn btn-${button.buttonType}" target="_blank" onclick="${tracking}">${button.buttonText}</a>
                [#elseif buttonLinkType == "linkAnchor"]
                <a href="#${button.buttonLinklinkAnchor}" class="btn btn-${button.buttonType}" onclick="${tracking}">${button.buttonText}</a>
                [#elseif buttonLinkType == "linkAsset"]
                [#assign asset = damfn.getAsset(button.buttonLinklinkAsset!) /]
                <a href="${asset.getLink()}" class="btn btn-${button.buttonType}" target="_blank" onclick="${tracking}">${button.buttonText}</a>                    
                [/#if]                
                [/#if]            
                [/#list]
                [/#if]

            </div>

        </header>
        <!-- / main-top-alt -->