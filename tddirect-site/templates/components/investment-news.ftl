                
                    <!-- investment-news -->
                    <div id="investment-news" class="${content.bootstrapColumns!"col-md-4"} add-bottom">

                        <h2 class="investment-news-title">Investment News</h2>

                        <article class="investment-news-article">
                            [#if content.buttonInternalLink?has_content]
                            [#assign buttonUrlHref = cmsfn.link('website', content.buttonInternalLink)]
                            <a href="${buttonUrlHref}" class="click-out"></a>
                            [#elseif content.buttonExternalLink?has_content]
                            <a href="${content.buttonExternalLink}" class="click-out"></a>
                            [/#if]
                            [#if content.image?has_content]
                            [#assign image = damfn.getAsset(content.image!)/]
                            <img src="${image.getLink()}" alt="Investment News Article">
                            [/#if]
                            [#if content.category?has_content && content.category != 'none']
                            <span class="tag-overlay">${content.category}</span>
                            [/#if]
                            <div class="investment-news-article-overlay">
                                <div class="investment-news-article-content">
                                    [#if content.title?has_content]
                                    <h4 class="investment-news-article-title">${content.title}</h4>
                                    [/#if]
                                    [#if content.date?has_content]
                                    <span class="investment-news-article-date">${content.date?string['dd/MM/yyyy']}</span>
                                    [/#if]
                                    [#if content.buttonInternalLink?has_content]
                                    [#assign buttonUrlHref = cmsfn.link('website', content.buttonInternalLink)]
                                    <a href="${buttonUrlHref}" class="btn btn-green read-more">Read More</a>
                                    [#elseif content.buttonExternalLink?has_content]
                                    <a href="${content.buttonExternalLink}" class="btn btn-green read-more" target="_blank">Read More</a>
                                    [/#if]                                     
                                </div>
                            </div>
                        </article>

                    </div>
                    <!-- / investment-news -->