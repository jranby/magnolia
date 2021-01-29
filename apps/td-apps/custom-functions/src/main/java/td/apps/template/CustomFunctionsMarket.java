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
import info.magnolia.jcr.util.NodeUtil; 
import info.magnolia.jcr.wrapper.I18nNodeWrapper;
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

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger; 
import org.slf4j.LoggerFactory; 

import com.google.gson.Gson;

public class CustomFunctionsMarket {

    private static final Logger log = LoggerFactory.getLogger(CustomFunctionsMarket.class);

    // ---------------------------------------------------------------------
 
    @Inject
    public CustomFunctionsMarket() {
    }

    // ---------------------------------------------------------------------
 
    /**
     * Returns a market node by it's name property.
     *
     * @return node object
     * throws RepositoryException when stock is not found.
     */
    public Node getMarketNode(String name) throws RepositoryException {

        Node node = null;

        try { 

            Session session = MgnlContext.getJCRSession("markets");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:market] WHERE NAME() = '" + name + "'", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();
            
            if (nodes.hasNext()) { 
                node = nodes.nextNode(); 
            }

        } catch (RepositoryException e) {

            log.error(e.getMessage(), e);
        }

        return node;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getMarketArticles(int perPage, int offset, String marketUuid) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS m WHERE CONTAINS(m.markets, '" + marketUuid + "') AND (m.publishDate IS NULL OR m.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY m.publishDate desc", "JCR-SQL2");
            
            query.setLimit(perPage);
            query.setOffset(offset);
            
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();

            int count = 1;

            while (nodes.hasNext() && count <= perPage) {
                itemsListPaged.add(new I18nNodeWrapper(nodes.nextNode()));
                count++;
            }

        } catch (RepositoryException e) {

        }

        return itemsListPaged;
    }
}