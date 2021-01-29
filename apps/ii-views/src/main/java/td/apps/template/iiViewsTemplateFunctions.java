/*
 *  TD Direct II Views Template Functions
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

public class iiViewsTemplateFunctions {

    // ---------------------------------------------------------------------
 
    @Inject
    public iiViewsTemplateFunctions() {
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest ii views posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getArticles(String path, int perPage, int offset) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try { 

            Session session = MgnlContext.getJCRSession("ii-views-articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:ii-views-article] AS p WHERE (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
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


    // ---------------------------------------------------------------------
 
    /**
     * Get latest ii views posts count
     *
     * @return string
     */ 
    public long getArticlesCount() throws RepositoryException {

        long totalCount = 0;

        try {
            
            Session session = MgnlContext.getJCRSession("ii-views-articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:ii-views-article] AS p WHERE (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodeIterator = queryResult.getNodes();
            
            totalCount = nodeIterator.getSize();

        } catch (RepositoryException e) {

        }

        return totalCount;
    }
}