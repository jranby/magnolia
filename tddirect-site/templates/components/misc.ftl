<!-- primary -->
<nav id="primary" class="pull-right" role="navigation">
    <ul class="menu has-children">
    [#list cmsfn.children(cmsfn.siteRoot(content), "mgnl:page") as child ]
        <li>
            <a href="#">${child.segment}</a>
            <ul class="sub-menu">
            [#list cmsfn.children(child, "mgnl:page") as childn ]
                    <li>
                        <a href="${cmsfn.link(childn)}">${childn.title!}</a>
                    </li>
            [/#list]
            </ul>
        </li>
    [/#list]

    </ul>
</nav>
<!-- / pimary -->


        
    <div class="row">
       <div class="col-md-12">
           <h4> You're in ${content.segment!"NO segment defined"}</h4>
       </div>

    </div>