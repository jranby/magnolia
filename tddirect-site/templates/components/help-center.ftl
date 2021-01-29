                <!-- help-center-block -->
                <div id="${content.@uuid}" class="help-center-block">

                    [#if content.title?has_content]
                    <h3 class="help-center-title">${content.title}</h3>
                    [/#if]

                    <div class="row add-bottom">                       
                        <div class="col-md-9">
                            [#if content.text?has_content]
                            ${cmsfn.decode(content).text}
                            [/#if]
                        </div>
                        <div class="col-md-3">
                            [#if content.buttonLink?has_content && (content.buttonLinklinkInternal?has_content || content.buttonLinklinkExternal?has_content)]                   
                            [#assign buttonLinkType = content.buttonLink]
                            [#if buttonLinkType == "linkInternal"]
                            [#assign buttonLinkHref = cmsfn.link('website', content.buttonLinklinkInternal)!]
                            <a href="${buttonLinkHref}" class="btn btn-${content.buttonType!'green'}">${content.buttonTitle}</a>
                            [#elseif buttonLinkType == "linkExternal"]
                            <a href="${content.buttonLinklinkExternal}" class="btn btn-${content.buttonType!'green'}" target="_blank">${content.buttonTitle}</a>
                            [/#if]
                            [/#if]
                        </div>
                    </div>
                    [#if content.topics?has_content]

                    <!-- help-center-topics -->
                    <nav id="help-center-topics" class="row add-bottom">

                            [#list cmsfn.children(content.topics) as topic]
                            <a href="#" class="col-xs-12 col-md-5ths topic" target="_blank">
                                [#if topic.icon?has_content]
                                <div class="topic-icon-wrap">
                                    [#assign icon = damfn.getAsset(topic.icon)!]
                                    <img src="${icon.getLink()}" alt="${topic.title!}" title="${topic.title!}" class="topic-image" />
                                </div>
                                [/#if]
                                [#if topic.title?has_content]
                                <span class="topic-title">${topic.title!}</span>
                                [/#if]
                            </a>
                            [/#list]

                    </nav>
                    <!-- / help-center-topics -->
                    [/#if]

                </div>
                <!-- / help-center-block -->
                
