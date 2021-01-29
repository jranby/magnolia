<!DOCTYPE html>
<html lang="en">
<head>

[@cms.page /]
[@cms.area name="head" /]
[#assign currentSite = cmsfn.siteRoot(content)]

</head>
<body class="compliance[#if currentSite?has_content] ${currentSite?lower_case}[/#if]">

    <!-- main -->
    <main id="main" class="container" style="margin-top: 0;">
        
        <!-- main-content-wrap -->
        <section id="main-content-wrap" class="row no-gutter[#if content.alertDisplay?has_content && content.alertDisplay == true && !cmsfn.editMode] hidden[/#if]">

            <!-- main-content -->
            <div id="main-content" class="col-md-12">

                [#assign tasks = cmsfn.contentByPath('/tasks', 'tasks')]

                [#if tasks?has_content]

                [#list cmsfn.children(tasks) as year]

                <div class="year add-bottom">
                    <h2>Year: ${year.@name!}</h2>
                    
                    [#list cmsfn.children(year) as month]

                    <div class="month add-top">
                        <h3 class="half-bottom">Month: ${month.@name?number + 1!}</h3>

                        [#list cmsfn.children(month) as day]
                        
                        <div class="day">

                            <h4 class="half-bottom">Day: ${day.@name!}</h4>

                            <table class="table">

                            <tr>
                                <th style="width: 35%">
                                    Page
                                </th>
                                <th style="width: 10%">
                                    User
                                </th>
                                <th style="width: 45%">
                                    Comment
                                </th>
                                <th style="width: 10%">
                                    Status
                                </th>
                            </tr>
                            [#list cmsfn.children(day) as change]
                            <tr>
                                <td>[#if change.content.path?has_content]${change.content.path!}[/#if]</td>
                                <td>
                                    [#if change.content.requestor?has_content]
                                    ${change.content.requestor!}
                                    [/#if]
                                </td>
                                <td>
                                    [#if change.content.comment?has_content]
                                    ${change.content.comment!}
                                    [/#if]
                                </td>
                                <td>
                                    [#if change.status?has_content]
                                    ${change.status?keep_after('info.magnolia.task.Task$Status:')!}
                                    [/#if]
                                </td>
                                [/#list]
                            </tr>                            

                        </table>

                        [/#list]

                    </div>

                    [/#list]

                </div>

                [/#list]

                [/#if]

            </div>
            <!-- / main-content -->

        </section>
        <!-- / main-content-wrap -->

    </main>
    <!-- / main -->

    <!-- JS -->
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/jquery.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/bootstrap.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>

</body>
</html>