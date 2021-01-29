                
                <!-- main-content-block -->
                <div id="content.@uuid" class="main-content-block cf">

                    <!-- sipp-prospect-signup -->
                    <form action="http://mail.tddirectinvesting.co.uk/interface/list.php" id="sipp-prospect-signup" method="post">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label for="first_name">First name</label>
                                    <input type="text" name="first_name" class="form-control" placeholder="" required="">
                                </div>
                                <div class="form-group">
                                    <label for="surname">Surname</label>
                                    <input type="text" name="surname" class="form-control" placeholder="" required="">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" name="email" class="form-control" placeholder="" required="">
                                </div>
                                <div class="form-group">
                                    <input type="hidden" name="accName" value="TDD_Marketing">
                                    <input type="hidden" name="listName" value="SIPP Prospects">
                                    <input type="hidden" name="fullEmailValidationInd" value="Y">
                                    <input type="hidden" name="doubleOptin" value="false">
                                    <input type="hidden" name="successUrl" value="https://www.tddirectinvesting.co.uk/signup-thanks">
                                    <input type="hidden" name="errorUrl" value="https://www.tddirectinvesting.co.uk/signup-errors">                                    
                                </div>
                                <div class="form-group">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" id="checkbox" name="has_account[]" value="Yes">
                                            <span class="checkbox-label">I’ve already got an account with TDDI</span>
                                        </label>
                                    </div>
                                    <input type="submit" class="btn btn-green" value="Keep Me Informed">
                                </div>
                            </div>
                        </div>                                
                    </form>
                    <!-- / sipp-prospect-signup -->

                </div>
                <!-- / main-content-block -->
