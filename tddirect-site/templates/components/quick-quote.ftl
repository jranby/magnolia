                [#assign currentSite = cmsfn.siteRoot(content)]
                <!-- quick-quote-wrap -->
                <span class="quick-quote-wrap">

                    <a href="#" class="quick-quote-toggler pull-right text-left">
                        <span class="quick-quote-text text-left">Share Prices</span>
                        <i class="fa fa-search"></i>
                    </a>

                    <!-- quick-quote -->
                    <div class="quick-quote">

                        <div class="row">
                            <div class="col-xs-12">
                                <h3>Get A Quick Quote</h3>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-xs-6 half-bottom quick-quote-block">
                                <input name="quickEpic" type="text" id="quickEpic" class="form-control" placeholder="Enter EPIC or Symbol" />
                                <!--<input name="quickName" type="text" id="quickName" class="form-control" placeholder="Enter Name e.g. Barclays" />-->
                                [#if currentSite == 'UK']
                                <a href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/search'!}" id="switchx" style="display:block;margin-top:5px;">Don't know the symbol?</a>
                                [/#if]
                            </div>
                            
                            <div class="col-xs-6 half-bottom quick-quote-block">

                            <select name="marketID" id="marketID" class="form-control">
                                <option label="UK Equities" value="UkEquities" selected="selected">UK Equities</option>
                                <option label="US" value="US">US</option>
                                <option label="Canada" value="CA">Canada</option>
                                <option label="Australia" value="AUS">Australia</option>
                                <option label="Belgium" value="BE">Belgium</option>
                                <option label="France" value="P">France</option>
                                <option label="Germany" value="XE">Germany</option>
                                <option label="Hong Kong" value="HK">Hong Kong</option>
                                <option label="Ireland" value="IE">Ireland</option>
                                <option label="Italy" value="IT">Italy</option>
                                <option label="Netherlands" value="AM">Netherlands</option>
                                <option label="Singapore" value="SG">Singapore</option>
                                <option label="Spain" value="ES">Spain</option>
                            </select>

                        </div>

                        <div class="col-xs-12 quick-quote-block">
                            <a href="#" id="getPrice" class="btn btn-orange">Get A Quote</a>
                        </div>

                    </div>

                    <div id="quoteResults" class="row">
                        <div class="col-xs-12">
                            <h4 id="shortName"></h4>
                            [#if currentSite == 'UK']
                            <a class='btn btn-green pull-right' id='quick_quote_trade' style='display: block;' href='https://secure.ii.co.uk/webbroker2?destination_op=trade'>Trade</a>
                            [/#if]
                            <span id="bid-price"><strong><span class="bid-label">Bid Price</span></strong> <span id="bidPrice"></span><br/></span>
                            <span id="offer-price"><strong><span class="offer-label">Offer Price</span></strong> <span id="offerPrice"></span></span>
                            <span id="day-change"><strong>Day Change:</strong> <i id="dayChangeArrow" aria-hidden="true"></i> <span id="priceChangeOnDay"></span> ( <span id="dayPercentageChange"></span> )<br/></span>
                            <span id="quote-disclaimer" style="font-size:11px"><strong>Prices delayed by 15 minutes</strong></span>
                        </div>
                    </div>

                    <div id="noQuoteResults" class="row">
                        <div class="col-xs-12">
                            <h4 id="shortName"></h4>
                        </div>
                    </div>                        

                    <div class="quick-quote-preloader">
                        <img id="preloader" src="${ctx.contextPath}/.resources/tddirect-site/webresources/images/preloader.gif" alt="Preloading" />
                    </div>


                </div>
                <!-- / quick-quote -->

            </span>
            <!-- / quick-quote-wrap -->