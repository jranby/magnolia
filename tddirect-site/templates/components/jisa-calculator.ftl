                [#assign id = content.title!content.subtitle!content.@uuid/]
                [#assign slugId = id?replace(" ", "-")]              
                
                <!-- main-content-block -->
                <div id="${slugId?lower_case}" class="main-content-block jisa-calculator">

                    <h2 class="main-content-title">Eligibility checker</h2>

                    <p>Transferring a Child Trust Fund or Junior ISA to us is easy, and you can do it when you open your account online. Use our <b>Eligibility Checker</b> below to confirm what transfer you need to make, by entering your child's date of birth.</p>

                    <div class="form-group calc-wrap half-bottom">
                        <label for="date-chooser"><b>Child's Date of Birth</b></label>
                        <input type="text" value="dd/mm/yyyy" id="date-chooser" class="form-control">
                    </div>

                    <div class="jisa-message"></div>

                    <div class="jisa-result"></div>

                </div>
                <!-- / main-content-block -->
