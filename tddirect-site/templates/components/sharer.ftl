    
        [#assign article = ctx.getParameter('article')!?html]
        [#if article?has_content]
        [#assign articleData = cmsfn.contentByPath('/' + article, 'articles')]
        [#if articleData.banner?has_content]
        <!-- sharer -->
        <div class="sharer-wrap hidden-xs">

            <a href="#" class="sharer"><i class="fa fa-share-alt"></i></a>

            <nav class="social-sharers">
                <a href="http://www.facebook.com/sharer/sharer.php?u=https://www.tddirectinvesting.co.uk/investment-news/article/${articleData.@name!}&title=${articleData.title?replace(' ','+')!}" class="share" id="fb" title="Share on Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
                <a class="share" id="tw" href="http://twitter.com/share?url=https://www.tddirectinvesting.co.uk/investment-news/article/${articleData.@name!}&text=${articleData.title?replace(' ','+')!}&hashtags=" title="Tweet on Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
                <a class="share" id="in" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.tddirectinvesting.co.uk/investment-news/article/${articleData.@name!}&title=${articleData.title?replace(' ','+')!}" title="Share on LinkedIn" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a class="share" id="gp" href="https://plus.google.com/share?url=https://www.tddirectinvesting.co.uk/investment-news/article/${articleData.@name!}" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" title="Share on Google+" target="_blank"><i class="fa fa-google-plus"></i></a>
            </nav>        

        </div>
        <!-- / sharer -->
        [/#if]
        [/#if]
    