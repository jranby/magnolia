/*
 *  TD Direct Alliance News Functions
 *  is a custom module for Magnolia CMS 5+
 *
 *  Copyright (C) 2017  TD Direct Investing Ltd
 *
 */

package td.apps.util;

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

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger; 
import org.slf4j.LoggerFactory;

public class AllianceNewsFunctions {

    // ---------------------------------------------------------------------
 
    @Inject
    public AllianceNewsFunctions() {
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getArticles(String path, int perPage, int offset) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try { 

            Session session = MgnlContext.getJCRSession("alliance-news");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("SELECT * FROM [mgnl:alliance-news] AS a ORDER BY a.[date] DESC", "JCR-SQL2");
            
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
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public long getArticlesCount() throws RepositoryException {

        long totalCount = 0;

        try {
            
            Session session = MgnlContext.getJCRSession("alliance-news");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("SELECT * FROM [mgnl:alliance-news] AS a ORDER BY a.[date] DESC", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodeIterator = queryResult.getNodes();
            
            totalCount = nodeIterator.getSize();

        } catch (RepositoryException e) {

        }

        return totalCount;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getArticlesByCategory(String path, int perPage, int offset, String categoryCode) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try { 
            
            Session session = MgnlContext.getJCRSession("alliance-news");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("SELECT * FROM from [mgnl:alliance-news] AS a WHERE CONTAINS(a.categories, '" + categoryCode + "') ORDER BY a.[date] DESC", "JCR-SQL2");
            
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
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public long getArticlesByCategoryCount(String categoryCode) throws RepositoryException {

        long totalCount = 0;

        try {
            
            Session session = MgnlContext.getJCRSession("alliance-news");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("SELECT * FROM [mgnl:alliance-news] AS a WHERE CONTAINS(a.categories, '" + categoryCode + "') ORDER BY a.[date] DESC", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodeIterator = queryResult.getNodes();
            
            totalCount = nodeIterator.getSize();

        } catch (RepositoryException e) {

        }

        return totalCount;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getCategories() throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try {
            
            Session session = MgnlContext.getJCRSession("alliance-news-categories");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("SELECT * FROM [mgnl:alliance-news-category] AS c ORDER BY c.title asc", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();

            int count = 1;

            while (nodes.hasNext()) {
                itemsListPaged.add(new I18nNodeWrapper(nodes.nextNode()));
                count++;
            }

        } catch (RepositoryException e) {

        }

        return itemsListPaged;
    }

}