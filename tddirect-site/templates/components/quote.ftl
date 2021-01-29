                
                <!-- main-content-block -->
                <div id="${content.@uuid}" class="main-content-block quote text-center">

                    [#if content.quote?has_content]
                    <blockquote>
                        <span class="quote-text">${content.quote!}</span>
                        [#if content.author?has_content]
                        <cite>- <span class="cite-author">${content.author!}[#if content.location?has_content]<span class="cite-location">${content.location!}[/#if]</cite>
                        [/#if]
                    </blockquote>
                    [/#if]

                </div>
                <!-- / main-content-block -->
