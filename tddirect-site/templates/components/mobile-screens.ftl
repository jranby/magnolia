        [#assign parentPage = cmsfn.page(content)]
        <!-- main-content-wrap -->
        <section class="row[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if] screen-content current mobile">

            <div class="col-md-5 text-center">

                [#if content.imageMobile?has_content]
                [#assign image = damfn.getAsset(content.imageMobile)!]
                <img src="${image.getLink()};" alt="${content.titleMobile!}" title="${content.titleMobile!}" class="" />
                [/#if]

            </div>

            <div class="col-md-7">

                [#if content.titleMobile?has_content]
                <h3 class="screen-title">${content.titleMobile!}</h3>
                [/#if]
                [#if content.textMobile?has_content]
                ${cmsfn.decode(content).textMobile!''}
                [/#if]
                [#if content.featuresMobile??]
                <h3 class="screen-title add-top">Features</h3>
                <div class="panel-group add-bottom" id="accordion-mobile" role="tablist" aria-multiselectable="true">
                [#list cmsfn.children(content.featuresMobile) as feature]
                    <div class="panel panel-light">
                        <div class="panel-heading" role="tab" id="${feature.@uuid}">
                            <h4 class="panel-title">
                                [#if feature.title?has_content]
                                <a role="button" data-toggle="collapse" data-parent="#accordion-mobile" href="#collapse-${feature.@uuid}"[#if feature_index == 0] aria-expanded="false" [/#if]aria-controls="collapse-${feature.@uuid}"><i class="fa fa-angle-down" style="margin-right: 8px;"></i>${feature.title!}</a>
                                [/#if]
                            </h4>
                        </div>
                        <div id="collapse-${feature.@uuid}" class="panel-collapse collapse[#if feature_index == 0] in-[/#if]" role="tabpanel" aria-labelledby="${feature.@uuid}">
                            <div class="panel-body">
                                [#if feature.text?has_content]
                                ${cmsfn.decode(feature).text!""}
                                [/#if]
                            </div>
                        </div>
                    </div>
                [/#list]
                </div>
                [/#if]

                <div class="row">
                    [#if content.androidLinkMobile?has_content]
                    <div class="col-md-6 text-center">
                        <a href="${content.androidLinkMobile!}" target="_blank"><img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/apps/googleplay.jpg" alt="Get It On Google Play" /></a>
                    </div>
                    [/#if]
                    [#if content.iosLinkMobile?has_content]
                    <div class="col-md-6 text-center">
                        <a href="${content.iosLinkMobile!}" target="_blank"><img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/apps/appstore.jpg" alt="Download On The App Store" /></a>
                    </div>
                    [/#if]
                </div>

            </div>

        </section>
        <!-- / main-content-wrap -->
                