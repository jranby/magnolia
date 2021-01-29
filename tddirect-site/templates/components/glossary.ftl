                [#assign id = content.id!content.title]
                [#assign slugId = id?replace(" ", "-")]
                
                <!-- main-content-block -->
                <div id="${slugId?lower_case}" class="main-content-block">

                    [#if content.title?has_content]
                    <h2 class="main-content-title-large">${content.title}</h2>
                    [/#if]
                    
                    [#if content.text?has_content]
                    ${cmsfn.decode(content).text}
                    [/#if]

                </div>
                <!-- / main-content-block -->
