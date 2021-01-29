[@cms.page /]
[#if content.html?has_content]
${cmsfn.decode(content).html!""}
[/#if]