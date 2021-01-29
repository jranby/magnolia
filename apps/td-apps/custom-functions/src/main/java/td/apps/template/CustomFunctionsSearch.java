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
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.lang.reflect.Type;
import java.lang.StringBuilder;

import org.slf4j.Logger; 
import org.slf4j.LoggerFactory;

public class CustomFunctionsSearch {

    // ---------------------------------------------------------------------
 
    @Inject
    public CustomFunctionsSearch() {

    }

    // ---------------------------------------------------------------------
 
    /**
     * Returns a list of stocks matching the search query.
     *
     * @return node object
     * throws RepositoryException when stock is not found.
     */
    public List<Node> getArticles(String searchQuery) throws RepositoryException {

        final List<Node> articles = new ArrayList<>(0);

        String lowerSearchQuery = searchQuery.toLowerCase();

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS a WHERE lower(a.title) LIKE '%" + lowerSearchQuery + "%' ORDER BY a.[title] DESC", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();

            while (nodes.hasNext()) {
                articles.add(new I18nNodeWrapper(nodes.nextNode()));
            }

        } catch (RepositoryException e) {

        }

        return articles;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Returns a list of stocks matching the search query.
     *
     * @return node object
     * throws RepositoryException when stock is not found.
     */
    public List<Node> getStocks(String searchQuery) throws RepositoryException {

        final List<Node> stocks = new ArrayList<>(0);

        String lowerSearchQuery = searchQuery.toLowerCase();

        try { 
            
            Session session = MgnlContext.getJCRSession("stocks");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [stock] AS s WHERE lower(s.title) LIKE '%" + lowerSearchQuery + "%' OR lower(s.instrumentId) = '" + lowerSearchQuery + "' ORDER BY s.[title] DESC", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();

            while (nodes.hasNext()) {
                stocks.add(new I18nNodeWrapper(nodes.nextNode()));
            }

        } catch (RepositoryException e) {

        }

        return stocks;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Returns a list of funds matching the search query.
     *
     * @return node object
     * throws RepositoryException when stock is not found.
     */
    public List<Node> getFunds(String searchQuery) throws RepositoryException {

        final List<Node> funds = new ArrayList<>(0);

        String lowerSearchQuery = searchQuery.toLowerCase();

        try { 
            
            Session session = MgnlContext.getJCRSession("funds");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [fund] AS f WHERE lower(f.title) LIKE '%" + lowerSearchQuery + "%' OR lower(f.instrumentId) = '" + lowerSearchQuery + "' ORDER BY f.[title] DESC", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();

            while (nodes.hasNext()) {
                funds.add(new I18nNodeWrapper(nodes.nextNode()));
            }

        } catch (RepositoryException e) {

        }

        return funds;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Returns a list of markets matching the search query.
     *
     * @return node object
     * throws RepositoryException when stock is not found.
     */
    public List<Node> getMarkets(String searchQuery) throws RepositoryException {

        final List<Node> markets = new ArrayList<>(0);

        String lowerSearchQuery = searchQuery.toLowerCase();

        try { 
            
            Session session = MgnlContext.getJCRSession("markets");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:market] AS m WHERE lower(m.title) LIKE '%" + lowerSearchQuery + "%' OR NAME() = '" + searchQuery + "' ORDER BY m.[title] ASC", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();

            while (nodes.hasNext()) {
                markets.add(new I18nNodeWrapper(nodes.nextNode()));
            }

        } catch (RepositoryException e) {

        }

        return markets;
    }   
}