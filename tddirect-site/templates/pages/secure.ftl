[@cms.page /]
[#assign iframeSrc = content.iframeSrc!]

	<!-- CSS -->
	<link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/style.css">
    <link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/secure.css">
    <link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/ii.css">

    <!-- JS -->
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/jquery.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/libs/bootstrap.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/cookie/js.cookie.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/plugins/porthole/porthole.min.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/custom.js"></script>
    <script src="${ctx.contextPath}/.resources/tddirect-site/webresources/js/secure.js"></script>

	[#if content.html?has_content]
	${cmsfn.decode(content).html!""}
	[/#if]

    [#if content.iframeSrc?has_content]
    <!-- iframe -->
    <iframe width="100%" scrolling="no" frameborder="0" src="${iframeSrc}" id="iframe-secure" name="iframe-secure"></iframe>
    <!-- / iframe -->
    [/#if]