[#assign page = cmsfn.page(content)]
[#assign node = cmsfn.asJCRNode(page) /]
[#assign site = sitefn.site()!]
[#assign theme = sitefn.theme(site)!]
[#assign currentSite = cmsfn.siteRoot(page)]
[#assign template = node.getProperty("mgnl:template").getValue().getString() /]
[#assign fund = ctx.getParameter('fund')!?html]
[#assign stock = ctx.getParameter('stock')!?html]
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
	[#assign myNode = fundfn.getFundNode(fund)]
	[#assign myMap = cmsfn.asContentMap(myNode)]
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
	[#assign myNode = stockfn.getStockNode(stock)]
	[#assign myMap = cmsfn.asContentMap(myNode)]
[/#if]

<!-- Base Meta Tags -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<meta name="description" content="View the latest report on ${myMap.title!}. Voted ADVFN Best Managed Funds Provider 2016. Capital at risk.">
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<meta name="description" content="View the latest ${myMap.title!} share price. Voted ADVFN Best Low Cost Stockbroker 2016. Capital at risk.">
[#else]
<meta name="description" content="${page.description!}">
[/#if]
[#if page.keywords?has_content]
<meta name="keywords" content="${page.keywords!}">
[/#if]
[#if currentSite == 'CS']
<meta name="author" content="Computershare">
[#else]
<meta name="author" content="TD Direct Investing">
[/#if]
[#if page.robots?has_content && page.robots != 'none']
<meta name="robots" content="${page.robots}">
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
<title>${page.metaTitle!page.title! + ' – Computershare'}</title>
[#else]
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<title>${myMap.title!}</title>
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<title>${myMap.title!} Share Price</title>
[#else]
<title>${page.metaTitle!page.title! + ' – TD Direct Investing'}</title>
[/#if]
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
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<link rel="canonical" href="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds/'+myMap.@name!}" />
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<link rel="canonical" href="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+myMap.@name!}" />
[#else]
[#if page.canonical?has_content]
<link rel="canonical" href="${cmsfn.link('website', page.canonical)}" />
[#elseif page.canonicalExternal?has_content]
<link rel="canonical" href="${page.canonicalExternal}" />
[#else]
<link rel="canonical" href="${cmsfn.link(page)}" />
[/#if]
[/#if]

[#if currentSite == 'UK']
<!-- Facebook Opengraph -->
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<meta property="og:url" content="${cmsfn.link(cmsfn.siteRoot(content))+'investment-funds/funds/'+myMap.@name!}" />
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<meta property="og:url" content="${cmsfn.link(cmsfn.siteRoot(content))+'share-dealing/shares/'+myMap.@name!}" />
[#else]
[#if page.ogUrl?has_content]
<meta property="og:url" content="${cmsfn.link('website', page.ogUrl)}" />
[#elseif page.ogUrlExternal?has_content]
<meta property="og:url" content="${page.ogUrlExternal}" />
[#else]
<meta property="og:url" content="${cmsfn.link(page)}" />
[/#if]
[/#if]
<meta property="og:type" content="website" />
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<meta property="og:title" content="${myMap.title!}" />
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<meta property="og:title" content="${myMap.title!} Share Price" />
[#else]
<meta property="og:title" content="${page.ogTitle!page.metaTitle!page.title! + ' – TD Direct Investing'}" />
[/#if]
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<meta property="og:description" content="View the latest report on ${myMap.title!}. Voted ADVFN Best Managed Funds Provider 2016. Capital at risk." />
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<meta property="og:description" content="View the latest ${myMap.title!} share price. Voted ADVFN Best Low Cost Stockbroker 2016. Capital at risk." />
[#else]
<meta property="og:description" content="${page.ogDescription!page.description!}" />
[/#if]
[#if page.ogImage?has_content]
[#assign ogImage = damfn.getAsset(page.ogImage!)/]
<meta property="og:image" content="${ogImage.getLink()}" />
[#else]
<meta property="og:image" content="${ctx.contextPath}/.resources/tddirect-site/webresources/images/opengraph/fb.jpg" />
[/#if]
<meta property="og:locale" content="en_GB" />

<!-- Twitter Card -->
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<meta name="twitter:card" content="${myMap.title!}">
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<meta name="twitter:card" content="${myMap.title!} Share Price">
[#else]
<meta name="twitter:card" content="${page.ogTitle!page.metaTitle!page.title! + ' – TD Direct Investing'}">
[/#if]
<meta name="twitter:site" content="@TDDirect_UK">
<meta name="twitter:creator" content="@TDDirect_UK">
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<meta name="twitter:title" content="${myMap.title!}">
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<meta name="twitter:title" content="${myMap.title!} Share Price">
[#else]
<meta name="twitter:title" content="${page.ogTitle!page.metaTitle!page.title! + ' – TD Direct Investing'}">
[/#if]
[#if template == 'tddirect-site:pages/fund' && fund?has_content]
<meta name="twitter:description" content="View the latest report on ${myMap.title!}. Voted ADVFN Best Managed Funds Provider 2016. Capital at risk.">
[#elseif template == 'tddirect-site:pages/share-index' && stock?has_content]
<meta name="twitter:description" content="View the latest ${myMap.title!} share price. Voted ADVFN Best Low Cost Stockbroker 2016. Capital at risk.">
[#else]
<meta name="twitter:description" content="${page.ogDescription!page.description!}">
[/#if]
[#if page.ogImage?has_content]
[#assign ogImage = damfn.getAsset(page.ogImage!)/]
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
