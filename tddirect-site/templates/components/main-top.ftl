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
                <h1 class="main-title ${titleMargin!}">${cmsfn.decode(content).title}[#if content.subtitle?has_content] <span>(${content.subtitle})</span>[/#if]</h1>
                [#else]
                <h1 class="main-title ${titleMargin!}">${cmsfn.decode(content).title}[#if content.subtitle?has_content] <span>(${content.subtitle})</span>[/#if]</h1>
                [/#if]

                [#if !parentPage.hideBreadcrumbs?has_content || parentPage.hideBreadcrumbs == false]
                <!-- breadcrumbs -->
                <div class="breadcrumbs">
                    <ol class="breadcrumb">
                        [#list cmsfn.ancestors(parentPage, "mgnl:page") as crumb]
                        <li><a href="${cmsfn.link(crumb)}">${crumb.title}</a></li>
                        [/#list]
                        <li class="active">${parentPage.titleBreadcrumbs!parentPage.title}</li>
                    </ol>
                </div>
                <!-- / breadcrumbs -->
                [/#if]

                [#if content.text?has_content]${cmsfn.decode(content).text}[/#if]  
                   
                [#if content.list?has_content]
                <ul class="tick-list">
                    [#list content.list as link]
                    <li>${link}</li>
                    [/#list]
                </ul>
                [/#if]

            </div>

            <div class="col-xs-12">

                <!-- main-search -->
                <form id="main-search" class="navbar-form pull-right hidden">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for funds..." name="srch-term" id="srch-term">
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </form>
                <!-- / main-search -->

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