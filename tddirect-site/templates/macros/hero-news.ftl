    [#macro hero type term data contento title='Investment News &amp; Ideas']

    [#if data.image?has_content || data.banner?has_content || data.bgImage?has_content || contento.image?has_content]
    [#if contento.image?has_content]
    [#assign rendition = damfn.getRendition(contento.image,'1920')]
    [#elseif data.image?has_content]
    [#assign rendition = damfn.getRendition(data.image,'1920')]
    [#elseif data.banner?has_content]
    [#assign rendition = damfn.getRendition(data.banner,'1920')]
    [#elseif data.bgImage?has_content]
    [#assign rendition = damfn.getRendition(data.bgImage,'1920')]
    [/#if]
    <!-- hero-news -->
    <section id="hero-news" class="wrap" style="background-image: url(${rendition.getLink()!}); ">
        <div class="container">
            <div class="row">
                <div class="hero-title-wrap">
                    [#if type == 'archive']
                    <h1 class="hero-title">Investing News</h1>
                    [#else]
                    [#if term == 'ii-views']
                    <img src="${damfn.getAssetLink("jcr:9f28cde2-d579-484d-9741-412c094a51e3")}" alt="Interactive Investor Views" class="hero-logo" />
                    [/#if]
                    <h1 class="hero-title">${title!}</h1>
                    [#if term != 'ii-views']
                    <h2 class="hero-subtitle">Investing News</h2>
                    [/#if]
                    [/#if]
                </div>
            </div>
        </div>
    </section>
    <!-- / hero-news -->
    [#else]
    <!-- hero-news -->
    <section id="hero-news" class="wrap">
        <div class="container">
            [#if type == 'archive']
            <h1 class="hero-title">Investing News</h1>
            [#else]
            <h1 class="hero-title">${title!}</h1>
            <h2 class="hero-subtitle">Investing News</h2>
            [/#if]
        </div>    
    </section>
    <!-- / hero-news -->    
    [/#if] 

    [/#macro]
                                    