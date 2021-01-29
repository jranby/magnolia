                
                    <!-- best-buys -->
                    <div id="best-buys" class="${content.bootstrapColumns!"col-md-4"} add-bottom">

                        <h2 class="best-buys-title">${content.title!'Most Popular Stocks'}</h2>

                        [#if content.date?has_content]
                        <p class="best-buys-notice">Shares most traded by our customers on<br />${content.date?string['EEEE, MMMM d, yyyy']} (as at ${content.date?string['HH:mm']?lower_case} GMT)</p>
                        [/#if]

                        [#if content.stocks?has_content]
                        <!-- items -->
                        <div class="items">
                            [#list cmsfn.children(content.stocks) as stock]
                            <div class="item cf">
                                <div class="item-data cf">
                                    <div class="item-name">${stock.stockTitle}</div>
                                    <div class="item-gain item-rise"><span class="item-price">53.83 <span class="item-currency">GBP</span></span> - <i class="glyphicon glyphicon-arrow-up"></i> <span class="item-price-diff">6.25</span></div>
                                    <div class="item-progress">
                                        <div class="item-bought" style="width:${stock.stockBought}%;" title="Buy Ratio: ${stock.stockBought}%"></div>
                                        <div class="item-sold" style="width:${stock.stockSold}%" title="Sell Ratio: ${stock.stockSold}%"></div>
                                    </div>
                                </div>
                                <div class="item-report">
                                    [#assign segments = stock.stockLink?split('/')]
                                    <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+segments?last!}" class="btn btn-green">View Report</a>
                                </div>
                            </div>
                            [/#list]

                        </div>
                        <!-- / items -->
                        [/#if]

                        <p class="best-buys-disclaimer">Buy to Sell ratio of our customer trades at the time specified</p>

                    </div>
                    <!-- / best-buys -->