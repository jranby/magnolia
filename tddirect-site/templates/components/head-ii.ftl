[#assign page = cmsfn.page(content)]
[#assign site = sitefn.site()!]
[#assign theme = sitefn.theme(site)!]
[#assign pageNode = state.getCurrentURI()]
[#assign currentSite = cmsfn.siteRoot(page)]
[#if pageNode?contains('/article')]
[#assign term = ctx.getParameter('article')!?html]
[#assign data = cmsfn.contentByPath('/' + term, 'ii-views-articles')!]
[#assign type = 'article']
[#elseif pageNode?contains('/category')]
[#assign term = ctx.getParameter('category')!?html]
[#assign data = cmsfn.contentByPath('/' + term, 'ii-views-categories')!]
[#assign type = 'object']
[#else]
[#assign data = page]
[#assign type = 'website']
[/#if]

<!-- Base Meta Tags -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${data.text!data.excerpt!}">
<meta name="keywords" content="${data.keywords!}">
[#if currentSite == 'CS']
<meta name="author" content="Computershare">
[#else]
<meta name="author" content="TD Direct Investing">
[/#if]
[#if data.robots?has_content && data.robots != 'none']
<meta name="robots" content="${data.robots}">
[/#if]

[#if currentSite == 'UK']
<!-- Verification Meta -->
<meta name="google-site-verification" content="BW82c_u7JN5moH1o3XrpTiF2-3YO6qLV2LgG4QdDrkQ" />
<meta name="norton-safeweb-site-verification" content="g845970aritbywd57lgh-59ilf6r-31dwz5tyi6xmeozlzbp3k0ry05ttros641qin2lhgwa2azd1a6fyl706a7lskmduj6v8rth1cuddz-5qylk-lmz9rywi1vhi98n">
[#elseif currentSite == 'IE']
<!-- Verification Meta -->
<meta name="google-site-verification" content="EeNrcCDfercXggWg96wozao10RR_99pJSIGdvZl4tOI" />
[/#if]

[#if currentSite == 'CS']
<title>${data.metaTitle!data.title!} – Computershare</title>
[#else]
<title>${data.metaTitle!data.title!}</title>
[/#if]

<!-- CSS -->
<link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/bootstrap.min.css">
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.0-beta.1/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
<link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/style.css">
[#if currentSite == 'CS']
<link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/cs.css">
[/#if]
<!--[if IE]>
<link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/ie.css">
<![endif]-->
<link rel="stylesheet" href="${ctx.contextPath}/.resources/tddirect-site/webresources/css/ii.css">

<!-- Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700">

<!-- Favicons -->
[#if currentSite == 'CS']
<link rel="icon" type="image/x-icon" href="${ctx.contextPath}/.resources/tddirect-site/webresources/images/favicons/favicon.ico" />
[#else]
<link rel="icon" type="image/x-icon" href="${ctx.contextPath}/.resources/tddirect-site/webresources/images/favicons/favicon-ii.ico" />
[/#if]

<!-- Canonical URL -->
[#if pageNode?contains('/article')]
<link rel="canonical" href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views/article/'+data.@name?remove_ending('/')!}" />
[#elseif pageNode?contains('/category')]
<link rel="canonical" href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views/category/'+data.@name?remove_ending('/')!}" />
[#else]
<link rel="canonical" href="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views'!}" />
[/#if]

[#if currentSite == 'UK']
<!-- Facebook Opengraph -->
[#if pageNode?contains('/article')]
<meta property="og:url" content="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views/article/'+data.@name?remove_ending('/')!}" />
[#elseif pageNode?contains('/category')]
<meta property="og:url" content="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views/category/'+data.@name?remove_ending('/')!}" />
[#else]
<meta property="og:url" content="${cmsfn.link(cmsfn.siteRoot(content))+'ii-views'!}" />
[/#if]
<meta property="og:type" content="${type!}" />
<meta property="og:title" content="${data.ogTitle!data.metaTitle!data.title! + ' – TD Direct Investing'}" />
<meta property="og:description" content="${data.ogDescription!data.description!data.excerpt!}" />
[#if data.ogImage?has_content]
[#assign ogImage = damfn.getAsset(data.ogImage!)/]
<meta property="og:image" content="${ogImage.getLink()}" />
[#else]
<meta property="og:image" content="${ctx.contextPath}/.resources/tddirect-site/webresources/images/opengraph/fb.jpg" />
[/#if]
<meta property="og:locale" content="en_GB" />

<!-- Twitter Card -->
<meta name="twitter:card" content="${data.ogTitle!data.metaTitle!data.title! + ' – TD Direct Investing'}">
<meta name="twitter:site" content="@TDDirect_UK">
<meta name="twitter:creator" content="@TDDirect_UK">
<meta name="twitter:title" content="${data.ogTitle!data.metaTitle!data.title! + ' – TD Direct Investing'}">
<meta name="twitter:description" content="${data.ogDescription!data.description!data.excerpt!}">
[#if data.ogImage?has_content]
[#assign ogImage = damfn.getAsset(data.ogImage!)/]
<meta name="twitter:image" content="${ogImage.getLink()}">
[#else]
<meta name="twitter:image" content="${ctx.contextPath}/.resources/tddirect-site/webresources/images/opengraph/fb.jpg">
[/#if]
[/#if]

<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

[#if currentSite == 'UK']
<!-- JSON-LD -->
<script type="application/ld+json">
{
	"@context": "http://schema.org",
	"@type": "WebSite",
	"url": "https://www.tddirectinvesting.co.uk",
	"potentialAction": {
		"@type": "SearchAction",
		"target": "https://www.tddirectinvesting.co.uk/search?q={search_term_string}",
		"query-input": "required name=search_term_string"
	 },
	"@type": "Organization",
	"name": "TD Direct Investing",
	"alternateName": "TDDI",
	"legalName" : "TD Direct Investing (Europe) Limited",
	"url": "https://www.tddirectinvesting.co.uk",
	"logo": "https://www.tddirectinvesting.co.uk${ctx.contextPath}/.resources/tddirect-site/webresources/images/logo/logo.png",
	"foundingDate": "1997",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Exchange Court, Duncombe Street",
		"addressLocality": "Leeds",
		"addressRegion": "West Yorkshire",
		"postalCode": "LS1 4AX",
		"addressCountry": "UK"
	},
	"contactPoint": {
		"@type": "ContactPoint",
		"contactType": "customer support",
		"telephone": "[+44345 607 6001]"
	},
	"sameAs": [ 
		"https://www.youtube.com/channel/UCfEPXFAJw9ei7Hu_w09wAPw",
		"https://www.facebook.com/TD-Direct-Investing-Europe-178170962520445/",
		"http://twitter.com/tddirect_uk",
		"https://www.linkedin.com/company/td-direct-investing-europe-",
		"http://plus.google.com/+TddirectinvestingUk"
	]
}
</script>
[/#if]

[#if currentSite == 'UK']
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WHLKD9');</script>
<!-- End Google Tag Manager -->
[/#if]
