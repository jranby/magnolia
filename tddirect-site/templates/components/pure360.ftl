                [#assign id = content.title!content.@uuid/]
                [#assign slugId = id?replace(" ", "-")]

                <!-- widget -->
                <div id="${slugId?lower_case}" class="widget widget-signup ${content.class}">

                    [#if content.title?has_content]
                    <h4 class="widget-title half-bottom">${content.title}</h4>
                    [/#if]    
                    [#if content.text?has_content]
                    ${cmsfn.decode(content).text!""}
                    [/#if] 
                    
                    [#if content.form?has_content && content.form = 'signup']
                    <!-- general-signup -->
                    <form action="http://mail.tddirectinvesting.co.uk/interface/list.php" id="signup_form" method="post">
                        <div class="row half-bottom">
                            <div class="col-xs-12 col-md-6">
                                <label for="firstname">First name</label>
                                <input type="text" id="firstname" name="FirstName" class="form-control fiftywidth" placeholder="" required="">
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <label for="surname">Surname</label>
                                <input type="text" id="surname" name="LastName" class="form-control fiftywidth" placeholder="" required="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" id="email" name="email" class="form-control" placeholder="" required="">
                                    <input type="hidden" name="accName" value="TDD_Marketing">
                                    <input type="hidden" name="listName" value="Marketable IPO customers">
                                    <input type="hidden" name="fullEmailValidationInd" value="Y">
                                    <input type="hidden" name="doubleOptin" value="false">
                                    <input type="hidden" name="successUrl" value="https://www.tddirectinvesting.co.uk/signup-thanks">
                                    <input type="hidden" name="errorUrl" value="https://www.tddirectinvesting.co.uk/signup-errors">
                                </div>
                            </div>
                        </div>                        
                        <div class="form-group">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkbox" name="ConfirmedUKResident[]" value="Yes">
                                    <span class="checkbox-label">Please confirm you are a mainland UK resident</span>
                                </label>
                            </div>
                        </div>
                        <input type="submit" class="btn btn-green newsletter-submit submit-btn" value="Register">
                    </form>
                    <!-- / general-signup -->
                    [#elseif content.form?has_content && content.form = 'lloyds']
                    <!-- lloyds-ipo -->
                    <form action="http://mail.tddirectinvesting.co.uk/interface/list.php" id="signup_form" method="post">
                        <div class="row half-bottom">
                            <div class="col-xs-12 col-md-6">
                                <label for="firstname">First name</label>
                                <input type="text" id="firstname" name="FirstName" class="form-control" placeholder="" autofocus="" required="">
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <label for="surname">Surname</label>
                                <input type="text" id="surname" name="LastName" class="form-control" placeholder="" required="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" id="email" name="email" class="form-control" placeholder="" required="">
                                    <input type="hidden" name="accName" value="TDD_Marketing">
                                    <input type="hidden" name="listName" value="Marketable IPO customers">
                                    <input type="hidden" name="fullEmailValidationInd" value="Y">
                                    <input type="hidden" name="doubleOptin" value="false">
                                    <input type="hidden" name="successUrl" value="https://www.tddirectinvesting.co.uk/lloyds-thanks">
                                    <input type="hidden" name="errorUrl" value="https://www.tddirectinvesting.co.uk/lloyds-error">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkbox" name="ConfirmedUKResident[]" value="Yes">
                                    <span class="checkbox-label">Please confirm you are a mainland UK resident</span>
                                </label>
                            </div>
                        </div>
                        <input type="submit" class="btn btn-green submit-btn ipo-register" value="Register your interest">
                    </form>
                    <!-- / lloyds-ipo -->
                    [/#if]

                </div>
                <!-- / widget -->
