                [#assign componentParentPage = cmsfn.page(content)]
                <!-- info-block -->                
                <div id="${content.@uuid}" class="main-content-block cf info-block">
                    <div class="row valigned">
                        <div class="col-xs-12 col-md-9">
                            [#if content.text?has_content]
                            ${cmsfn.decode(content).text}
                            [/#if]
                        </div>
                        <div class="col-xs-12 col-md-3 text-center">
                            [#if content.buttonLink?has_content]
                            [#assign linkHref = cmsfn.link("website", content.buttonLink)!]
                            <a href="${linkHref}" class="btn btn-${content.buttonType!'green'}">${content.buttonText!'Find Out More'}</a>
                            [/#if]
                        </div>
                    </div>
                </div>
                <!-- / info-block -->                