    
        [#assign parentPage = cmsfn.page(content)]
        [#if parentPage.alertDisplay?has_content && parentPage.alertDisplay == true]
        <!-- risk-alert -->
        <section id="risk-alert" class="wrap" data-alert-uuid="${content.@uuid!}">
            <div class="alert alert-warning remove-bottom" role="alert">
                <div class="row">
                    <div class="col-xs-12 half-bottom">
                        [#if parentPage.alertTitle?has_content]
                        <h3 class="alert-heading">${parentPage.alertTitle!}</h3>
                        [/#if]
                        [#if parentPage.alertText?has_content]
                        ${cmsfn.decode(parentPage).alertText!}
                        [/#if]
                    </div>
                    <div class="col-xs-12 text-center alert-buttons">
                        <a href="#" class="btn btn-orange risk-alert-choice" data-alert-choice="ok">I Accept</a>
                        <a href="#" class="btn btn-green risk-alert-choice" data-alert-choice="cancel">I Don't Accept</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- / risk-alert -->
        [/#if]
    