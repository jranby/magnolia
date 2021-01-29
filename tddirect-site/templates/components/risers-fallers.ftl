                
                    <!-- risers-fallers -->
                    <div id="risers-fallers" class="${content.bootstrapColumns!"col-md-4"} add-bottom">

                        <!-- market-feeds -->        
                        <div id="market-feeds">
                    
                            <h2 class="market-title">Top Risers &amp; Fallers</h2>

                            <!-- market-select -->
                            <select id="market-select" class="form-control half-bottom" name="market-select">
                                <option value="1" selected="selected">FTSE 100</option>
                                <option value="2">FTSE 250</option>
                                <option value="3">FTSE Techmark</option>
                            </select>
                            <!-- / market-select -->                            
                                        
                            <ul class="market-links cf">
                                <li class="market-link current" data-ebb="risers">Risers</li>
                                <li class="market-link" data-ebb="fallers">Fallers</li>
                            </ul>
                                        
                            <div id="market" class="market-content no-gutter cf">
                                <span class="market-disclaimer">Prices delayed by 15 minutes</span>
                                <div id="market-risers" class="col-xs-12"></div>
                                <div id="market-fallers" class="col-xs-12"></div>
                            </div>
                                        
                        </div>
                        <!-- / market-feeds -->                        

                    </div>
                    <!-- / risers-fallers -->

                    <!-- latest-market-news -->
                    <div id="latest-market-news" class="${content.bootstrapColumns!"col-md-4"} add-bottom hidden">
                        
                        <h2 class="latest-market-news-title">Latest Market News</h2>
                        
                        <div class="latest-market-news-wrap">
                            
                            <img src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/banners/market-news-banner.png" alt="Latest Market News" title="Latest Market News" />

                            <div class="latest-market-news-overlay">
                                <div class="latest-market-news-content">
                                    <h3 class="latest-market-news-title">Latest Market News</h3>
                                    <p>Keep up to date with us</p>
                                    <a href="http://ican.tddirectinvesting.co.uk/market-news/" class="btn btn-orange read-more" target="_blank">Read Market News</a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <!-- / latest-market-news -->                    