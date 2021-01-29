/*
 *  TD Direct Custom Templating Functions
 *  is a custom module for Magnolia CMS 5+
 *
 *  Copyright (C) 2017  TD Direct Investing Ltd
 *
 */

package td.apps.template;

import info.magnolia.context.MgnlContext;
import info.magnolia.cms.core.AggregationState;
import info.magnolia.cms.i18n.I18nContentSupport;
import info.magnolia.jcr.util.ContentMap;
import info.magnolia.rendering.template.type.TemplateTypeHelper;
import info.magnolia.templating.functions.TemplatingFunctions;
import info.magnolia.rendering.model.RenderingModel;
import info.magnolia.rendering.model.RenderingModelImpl;
import info.magnolia.rendering.template.RenderableDefinition;

import javax.inject.Inject;
import javax.inject.Provider;
import javax.jcr.Node;
import javax.jcr.NodeIterator; 
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.Query; 
import javax.jcr.query.QueryManager; 
import javax.jcr.query.QueryResult;

import org.slf4j.Logger; 
import org.slf4j.LoggerFactory; 


public class CustomFunctionsTemplate <RD extends RenderableDefinition> extends RenderingModelImpl {

	private final TemplatingFunctions templatingFunctions;
	private final TemplateTypeHelper templateTypeFunctions;

    // ---------------------------------------------------------------------
 
    @Inject
    public CustomFunctionsTemplate(Node content, RD definition, RenderingModel<?> parent, TemplatingFunctions templatingFunctions, TemplateTypeHelper templateTypeFunctions) {
        super(content, definition, parent);
        this.templatingFunctions = templatingFunctions;
        this.templateTypeFunctions = templateTypeFunctions;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Outputs a test string
     *
     * @return string
     */ 
    public String getTest() {
        return "Test Succeeded!";
    }

    // ---------------------------------------------------------------------
    
}