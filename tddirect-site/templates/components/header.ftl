    [#assign currentSite = cmsfn.siteRoot(content)]
    <!-- header -->
    <header id="header" class="wrap">
        
        <!-- header-top -->
        <div id="header-top" class="wrap-inner">
            <div class="container">
                <div class="row">
                    [#if currentSite == 'UK']
                    
                    <!-- logo -->
                    <a class="logo-ii" href="${cmsfn.link(cmsfn.siteRoot(content))!'#'}"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 36 36"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1.466" y1="1.466" x2="34.534" y2="34.534"><stop offset="0" stop-color="#00F0F0"/><stop offset=".995" stop-color="#FF78FF"/></linearGradient><path d="M0 5.006C0 2.24 2.238 0 5.006 0h25.99C33.758 0 36 2.238 36 5.006v25.99C36 33.758 33.762 36 30.994 36H5.006C2.24 36 0 33.762 0 30.994V5.006z" fill="url(#a)"/><g><path d="M19.147 8.017c0-1.85 1.534-3.35 3.426-3.35S26 6.167 26 8.017c0 .89-.36 1.742-1.002 2.37s-1.515.983-2.424.983c-1.893-.002-3.427-1.502-3.427-3.353zm5.74 22.72c0 .33-.273.596-.61.596H20.93c-.336 0-.61-.266-.61-.595V14.075c0-.33.273-.595.61-.595h3.347c.336 0 .61.266.61.595v16.663zm-11.46-13.96c-1.387 0-2.636-.816-3.167-2.068-.53-1.253-.237-2.694.743-3.652s2.454-1.245 3.734-.726c1.28.52 2.115 1.74 2.115 3.095 0 1.85-1.533 3.35-3.426 3.35zm2.33 13.96c0 .33-.272.596-.61.596h-3.346c-.335 0-.608-.266-.608-.595v-11.01c0-.328.272-.594.61-.594h3.346c.336 0 .61.266.61.595v11.008z" fill="#FFF"/></g></svg></a>
                    <!-- / logo -->
                    [#elseif currentSite == 'IE']

                    <!-- logo -->
                    <a class="logo-ii" href="${cmsfn.link(cmsfn.siteRoot(content))!'#'}"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 36 36"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1.466" y1="1.466" x2="34.534" y2="34.534"><stop offset="0" stop-color="#00F0F0"/><stop offset=".995" stop-color="#FF78FF"/></linearGradient><path d="M0 5.006C0 2.24 2.238 0 5.006 0h25.99C33.758 0 36 2.238 36 5.006v25.99C36 33.758 33.762 36 30.994 36H5.006C2.24 36 0 33.762 0 30.994V5.006z" fill="url(#a)"/><g><path d="M19.147 8.017c0-1.85 1.534-3.35 3.426-3.35S26 6.167 26 8.017c0 .89-.36 1.742-1.002 2.37s-1.515.983-2.424.983c-1.893-.002-3.427-1.502-3.427-3.353zm5.74 22.72c0 .33-.273.596-.61.596H20.93c-.336 0-.61-.266-.61-.595V14.075c0-.33.273-.595.61-.595h3.347c.336 0 .61.266.61.595v16.663zm-11.46-13.96c-1.387 0-2.636-.816-3.167-2.068-.53-1.253-.237-2.694.743-3.652s2.454-1.245 3.734-.726c1.28.52 2.115 1.74 2.115 3.095 0 1.85-1.533 3.35-3.426 3.35zm2.33 13.96c0 .33-.272.596-.61.596h-3.346c-.335 0-.608-.266-.608-.595v-11.01c0-.328.272-.594.61-.594h3.346c.336 0 .61.266.61.595v11.008z" fill="#FFF"/></g></svg></a>
                    <!-- / logo -->
                    [/#if]

                    [@cms.area name="navigation"/]

                    [@cms.area name="mobile-menu"/]

                    [#assign currentSite = cmsfn.siteRoot(content)]
                    [#if currentSite == 'UK']
                    <!-- top-search -->
                    <form id="top-search" class="navbar-form" action="${ctx.contextPath}/UK/search">
                        <div class="input-group">
                            [#assign q = ctx.getParameter('q')!?html]
                            <input type="text" class="form-control" placeholder="Search for..." name="q" id="search-term" value="${q}" autocomplete="off" required>
                            <div class="input-group-btn">
                                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <!-- / top-search -->

                    <!-- top-search-mobile -->
                    <form id="top-search-mobile" class="" action="${ctx.contextPath}/UK/search">
                        <i class="glyphicon glyphicon-search icon-mag"></i>
                        <i class="fa fa-times icon-close"></i>
                        <input type="text" class="form-control" placeholder="Search for shares, funds, etf's and news" name="q" id="search-term-mobile" value="${q}" autocomplete="off" required>
                    </form>
                    <!-- / top-search-mobile -->
                    [/#if]

                </div>
            </div>
        </div>
        <!-- / header-top -->
        
        <!-- header-bottom -->
        <div id="header-bottom" class="wrap-inner">
            <div class="container">
                <div class="row">

                    <!-- stocks -->
                    <div class="row stocks">
                        <div id="FTSE100Decimal" class="col-md-5ths stock">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/ftse-100'!}"><span class="stock-index">FTSE100</span> - <span class="stock-value"></span> - <i class="glyphicon"></i> <span class="stock-change"></span></a>
                        </div>
                        <div id="FTSE250Decimal" class="col-md-5ths stock">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/ftse-250'!}"><span class="stock-index">FTSE250</span> - <span class="stock-value"></span> - <i class="glyphicon"></i> <span class="stock-change"></span></a>
                        </div>
                        <div id="TechmarkDecimal" class="col-md-5ths stock">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/ftse-techmark'!}"><span class="stock-index">FTSE Techmark</span> - <span class="stock-value"></span> - <i class="glyphicon"></i> <span class="stock-change"></span></a>
                        </div>
                        <div id="NASDAQDecimal" class="col-md-5ths stock">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/nasdaq'!}"><span class="stock-index">NASDAQ</span> - <span  class="stock-value"></span> - <i class="glyphicon"></i> <span class="stock-change"></span></a>
                        </div>
                        <div id="DJDecimal" class="col-md-5ths stock">
                            <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/dow-jones'!}"><span class="stock-index">Dow Jones</span> - <span class="stock-value"></span> - <i class="glyphicon"></i> <span class="stock-change"></span></a>
                        </div>
                    </div>
                    <!-- / stocks -->

                </div>
                
                <!-- stock-disclaimer -->
                <div class="stock-disclaimer">Prices delayed by 15 minutes</div>
                <!-- / stock-disclaimer -->

            </div>
        </div>
        <!-- / header-bottom -->

    </header>
    <!-- / header -->
