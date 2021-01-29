                [#-- Renders a video with an HTML5 tag or by embedding a video service code--]
                [#macro video content]
                    [#if content.videoType?has_content]
                        [#assign videoCaption = content.videoCaption!]
                        [#assign videoCredit = content.videoCredit!]

                        [#if content.scale?boolean]
                            [#assign scaleClass = "scalable-video"]
                        [#else]
                            [#assign scaleClass = "non-scalable-video"]
                        [/#if]
                        [#if content.videoType == "asset" && content.source??]
                            [#assign video = damfn.getAsset(content.source)]

                            [#assign videoTitle = ""]
                            [#if video.title?has_content]
                                [#assign videoTitle = video.title]
                            [/#if]
                            [#if video.link?has_content]
                                [#assign videoSrc = video.link]
                            [/#if]
                            [#if video.mimeType?has_content]
                                [#assign assetType = video.mimeType]
                            [/#if]                            

                            [#-- Video caption / credit; Falls back to asset's properties --]
                            [#if !videoCaption?has_content]
                                [#assign videoCaption = video.caption!videoTitle!]
                            [/#if]

                            [#if !videoCredit?has_content]
                                [#assign videoCredit = video.copyright!]
                            [/#if]

                            [#if content.poster?has_content]
                                [#assign assetPoster = damfn.getAsset(content.poster)!]
                                [#if assetPoster?has_content]
                                    [#assign poster = 'poster="${assetPoster.link}"']
                                [/#if]
                            [/#if]

                            [#if content.preload?has_content]
                                [#assign preload = 'preload="${content.preload}"']
                            [/#if]
                            [#if content.autoplay?has_content]
                                [#assign autoplay = content.autoplay?string("autoplay","")]
                            [/#if]
                            [#if content.loop?has_content]
                                [#assign loop = content.loop?string("loop","")]
                            [/#if]
                            [#if content.muted?has_content]
                                [#assign muted = content.muted?string("muted","")]
                            [/#if]
                            [#if content.controls?has_content]
                                [#assign controls = content.controls?string("controls","")]
                            [/#if]                                                                                                                
                        [/#if]
                        <div class="${scaleClass}">
                            <div class="video-wrapper">
                                [#if content.videoType == "asset"]
                                <video ${autoplay!} ${loop!} ${muted!} ${controls!} ${preload!} ${poster!}>
                                    <source src="${videoSrc!}" type="${assetType!}">
                                </video>
                                [#else]
                                ${cmsfn.decode(content).embed}
                                [/#if]
                            </div>
                            [#if videoCaption?has_content || videoCredit?has_content]
                            <div class="video-captions">
                                [#if videoCaption?has_content]
                                    <span class="video-caption">${videoCaption}</span>
                                [/#if]
                                [#if videoCredit?has_content]
                                    <span class="video-credit">${videoCredit}</span>
                                [/#if]
                            </div>
                            [/#if]
                        </div>
                    [/#if]
                [/#macro]
                                    