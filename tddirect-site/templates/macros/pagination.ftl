        [#function max x y]
            [#if (x<y)][#return y][#else][#return x][/#if]
        [/#function]
        [#function min x y]
            [#if (x<y)][#return x][#else][#return y][/#if]
        [/#function]
        [#macro pagination curPage totalPages type term='']
                    
            [#if curPage gt totalPages]
                [#return]
            [/#if]
            <!-- pagination -->
            <nav aria-label="${type?capitalize} Pagination" class="add-top text-center">
                <ul class="pagination">
                    [#local firstPage = 1]
                    [#local maxAdjacentInSeq = 1]
                    [#local maxSeq = 2 * maxAdjacentInSeq + 1]
                    [#local firstInSeq = max(curPage - maxAdjacentInSeq, firstPage)]
                    [#local lastInSeq = min(curPage + maxAdjacentInSeq, totalPages)]
                    [#local ellipsis = '...']
                    [#if type == 'search']
                        [#local baseUrl = cmsfn.link(cmsfn.siteRoot(content))+'search?q='+term]
                    [#elseif type == 'archive']
                        [#local baseUrl = cmsfn.link(cmsfn.siteRoot(content))+'investment-news']
                    [#elseif type == 'category']
                        [#local baseUrl = cmsfn.link(cmsfn.siteRoot(content))+'investment-news/category/'+term]
                    [#elseif type == 'tag']
                        [#local baseUrl = cmsfn.link(cmsfn.siteRoot(content))+'investment-news/tag/'+term]
                    [#elseif type == 'ii-archive']
                        [#local baseUrl = cmsfn.link(cmsfn.siteRoot(content))+'ii-views']
                    [#elseif type == 'alliance-news']
                        [#local baseUrl = cmsfn.link(cmsfn.siteRoot(content))+'alliance-news']
                    [/#if]
                    [#local baseUrl = baseUrl?keep_before('?')]
                    [#if curPage lt maxSeq]
                        [#local firstInSeq = firstPage]
                        [#local lastInSeq = min(maxSeq, totalPages)]
                    [/#if]
                    [#if curPage gt (totalPages - maxSeq + 1)]
                        [#local firstInSeq = max(totalPages - maxSeq + 1, firstPage)]
                        [#local lastInSeq = totalPages]
                    [/#if]
                    [#if curPage gt firstPage]
                    [#if (curPage - 1) = 1]
                    <li><a href="${baseUrl!}" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    [#else]
                    <li><a href="${baseUrl + '?page='+ (curPage - 1)!}" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    [/#if]
                    [/#if]
                    [#if firstInSeq gt firstPage]
                    <li><a href="${baseUrl!}">${firstPage}</a></li>
                    [#if firstInSeq gt (firstPage + 1)]
                    <li class="disabled"><span>${ellipsis}</span></li>
                    [/#if]
                    [/#if]
                    [#list firstInSeq..lastInSeq as i]
                    [#if i = firstPage]
                    <li[#if i = curPage] class="active"[/#if]><a href="${baseUrl!}">${i}</a></li>
                    [#else]
                    <li[#if i = curPage] class="active"[/#if]><a href="${baseUrl + '?page='+ i!}">${i}</a></li>
                    [/#if]
                    [/#list]
                    [#if lastInSeq lt totalPages]
                    [#if lastInSeq lt (totalPages - 1)]
                    <li class="disabled"><span>${ellipsis}</span></li>
                    [/#if]
                    <li><a href="${baseUrl + '?page='+ totalPages!}">${totalPages}</a></li>
                    [/#if]
                    [#if curPage lt totalPages]
                    <li><a href="${baseUrl + '?page='+ (curPage + 1)!}" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                    [/#if]                    
                </ul>
            </nav>
            <!-- / pagination -->

        [/#macro]
                                    