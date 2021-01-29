/*
 *  TD Direct Custom Templating Functions
 *  is a custom module for Magnolia CMS 5+
 *
 *  Copyright (C) 2017  TD Direct Investing Ltd
 *
 */

package td.apps.news.template;

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


public class ArticlesTemplate <RD extends RenderableDefinition> extends RenderingModelImpl {

	private final TemplatingFunctions templatingFunctions;
	private final TemplateTypeHelper templateTypeFunctions;

    // ---------------------------------------------------------------------
 
    @Inject
    public ArticlesTemplate(Node content, RD definition, RenderingModel<?> parent, TemplatingFunctions templatingFunctions, TemplateTypeHelper templateTypeFunctions) {
        
        super(content, definition, parent);
        this.templatingFunctions = templatingFunctions;
        this.templateTypeFunctions = templateTypeFunctions;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public Node getLatestArticle() throws RepositoryException {

        Node node = null;

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
            query.setLimit(1);
            
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();
            
            if (nodes.hasNext()) { 
                node = nodes.nextNode();
            }

        } catch (RepositoryException e) {

        }

        return node;
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

            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            //Query query = queryManager.createQuery("select * from [mgnl:article] AS p ORDER BY p.[mgnl:created] desc", "JCR-SQL2");
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
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
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
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
    public Node getLatestArticleByCategory(String categoryUuid) throws RepositoryException {

        Node node = null;

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE ISDESCENDANTNODE(p,'/') AND CONTAINS(p.categories, '" + categoryUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
            query.setLimit(1);
            
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();
            
            if (nodes.hasNext()) { 
                node = nodes.nextNode();
            }

        } catch (RepositoryException e) {

        }

        return node;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getArticlesByCategory(String path, int perPage, int offset, String categoryUuid) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.categories, '" + categoryUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
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
    public long getArticlesByCategoryCount(String categoryUuid) throws RepositoryException {

        long totalCount = 0;

        try {
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.categories, '" + categoryUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
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
            
            Session session = MgnlContext.getJCRSession("articlecategories");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:articlecategory] AS c ORDER BY c.title asc", "JCR-SQL2");
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

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public Node getLatestArticleByTag(String tagUuid) throws RepositoryException {

        Node node = null;

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.tags, '" + tagUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
            query.setLimit(1);
            
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();
            
            if (nodes.hasNext()) { 
                node = nodes.nextNode();
            }

        } catch (RepositoryException e) {

        }

        return node;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getArticlesByTag(String path, int perPage, int offset, String tagUuid) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try {
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.tags, '" + tagUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
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
    public long getArticlesByTagCount(String tagUuid) throws RepositoryException {

        long totalCount = 0;

        try {
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.tags, '" + tagUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
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
    public List<Node> getTags() throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try {
            Session session = MgnlContext.getJCRSession("articletags");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:articletag]", "JCR-SQL2");
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

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public Node getLatestArticleByStock(String stockUuid) throws RepositoryException {

        Node node = null;

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.stocks, '" + stockUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
            query.setLimit(1);
            
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();
            
            if (nodes.hasNext()) { 
                node = nodes.nextNode();
            }

        } catch (RepositoryException e) {

        }

        return node;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getArticlesByStock(String path, int perPage, int offset, String stockUuid) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try {
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.stocks, '" + stockUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
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
    public long getArticlesByStockCount(String stockUuid) throws RepositoryException {

        long totalCount = 0;

        try {
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.stocks, '" + stockUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
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
    public Node getLatestArticleByFund(String fundUuid) throws RepositoryException {

        Node node = null;

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.funds, '" + fundUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
            query.setLimit(1);
            
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();
            
            if (nodes.hasNext()) { 
                node = nodes.nextNode();
            }

        } catch (RepositoryException e) {

        }

        return node;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getArticlesByFund(String path, int perPage, int offset, String fundUuid) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try {
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.funds, '" + fundUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
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
    public long getArticlesByFundCount(String fundUuid) throws RepositoryException {

        long totalCount = 0;

        try {
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.funds, '" + fundUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
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
    public Node getLatestArticleByMarket(String marketUuid) throws RepositoryException {

        Node node = null;

        try { 
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.markets, '" + marketUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
            query.setLimit(1);
            
            QueryResult queryResult = query.execute();
            NodeIterator nodes = queryResult.getNodes();
            
            if (nodes.hasNext()) { 
                node = nodes.nextNode();
            }

        } catch (RepositoryException e) {

        }

        return node;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get latest blog posts offset for pagination and limited
     *
     * @return string
     */ 
    public List<Node> getArticlesByMarket(String path, int perPage, int offset, String marketUuid) throws RepositoryException {

        final List<Node> itemsListPaged = new ArrayList<>(0);

        try {
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.markets, '" + marketUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            
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
    public long getArticlesByMarketCount(String marketUuid) throws RepositoryException {

        long totalCount = 0;

        try {
            
            Session session = MgnlContext.getJCRSession("articles");
            QueryManager queryManager = session.getWorkspace().getQueryManager();
            Query query = queryManager.createQuery("select * from [mgnl:article] AS p WHERE CONTAINS(p.markets, '" + marketUuid + "') AND (p.publishDate IS NULL OR p.publishDate <= CAST('" + LocalDateTime.now() + "' AS DATE)) ORDER BY p.publishDate desc", "JCR-SQL2");
            QueryResult queryResult = query.execute();
            NodeIterator nodeIterator = queryResult.getNodes();
            
            totalCount = nodeIterator.getSize();

        } catch (RepositoryException e) {

        }

        return totalCount;
    }    
}