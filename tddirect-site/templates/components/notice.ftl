    
        <!-- notice -->
        <section id="notice" class="wrap">
            <div class="container">
                <div class="alert alert-${content.bootstrapAlert!"info"} remove-bottom" role="alert">
                    <div class="row">
                        <div class="col-xs-12">
                            [#if content.noticeTitle?has_content]
                            <h3 class="alert-heading">${content.noticeTitle!}</h3>
                            [/#if]
                            [#if content.noticeText?has_content]
                            ${cmsfn.decode(content).noticeText!}
                            [/#if]
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- / notice -->
    