/*
 *  TD Direct Alliance News Curl Functions
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
import info.magnolia.jcr.util.PropertyUtil; 
import info.magnolia.jcr.wrapper.I18nNodeWrapper;

import javax.inject.Inject;
import javax.inject.Provider;

import javax.jcr.Node;
import javax.jcr.Property;
import javax.jcr.NodeIterator; 
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.Query; 
import javax.jcr.query.QueryManager; 
import javax.jcr.query.QueryResult;

import java.util.Date;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Base64;
import java.util.Collection;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.lang.StringBuilder;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.StringReader;

import java.nio.charset.StandardCharsets;

import java.net.HttpURLConnection;
import java.net.URL;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Attr;
import org.w3c.dom.NodeList;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;

import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import org.slf4j.Logger; 
import org.slf4j.LoggerFactory;

public class AllianceNewsCurlFunctions {

    //private final AllianceNewsArticle allianceNewsArticle;

    // ---------------------------------------------------------------------
 
    @Inject
    public AllianceNewsCurlFunctions() {

        //this.allianceNewsArticle = allianceNewsArticle;

    }

    // ---------------------------------------------------------------------
 
    /**
     * Get XML Alliance News via Curl
     *
     * @return void
     */
    public static void getAllianceNews() {

        try {

            String baseUrl = "http://feedsv2.alliancenews.info:24413/content";
            String mostRecentChange = getMostRecentChange();

            if (mostRecentChange != null && !mostRecentChange.isEmpty()) {
                baseUrl = baseUrl + "/since/" + mostRecentChange;
            }

            URL url = new URL(baseUrl);
            String creds = "tddi:K05j28k155l2312jMA63c";
            byte[] authBytes = creds.getBytes(StandardCharsets.UTF_8);
            String encoding = Base64.getEncoder().encodeToString(authBytes);
            
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            //connection.setDoOutput(true);
            connection.setRequestProperty("Authorization", "Basic " + encoding);
            
            InputStream content = (InputStream)connection.getInputStream();
            BufferedReader br = new BufferedReader (new InputStreamReader (content));
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            
            while (line != null) {
                sb.append(line);
                //sb.append(System.lineSeparator());
                line = br.readLine();
            }
            
            String everything = sb.toString();
            Document xml = parseAllianceNewsXml(everything);
            NodeList since = getAllianceNewsXmlElements(xml, "most-recent-change");
            NodeList items = getAllianceNewsXmlElements(xml, "item");

            if (since.getLength() > 0) {
                String recentChangeInsert = since.item(0).getTextContent();
                setMostRecentChange(recentChangeInsert);
            }

            for (int i = 0; i < items.getLength(); i++) {

                URL itemUrl = new URL(items.item(i).getFirstChild().getTextContent());
	            HttpURLConnection itemConnection = (HttpURLConnection) itemUrl.openConnection();
	            
	            itemConnection.setRequestMethod("GET");
	            itemConnection.setRequestProperty("Authorization", "Basic " + encoding);
            
	            InputStream itemContent = (InputStream)itemConnection.getInputStream();
	            BufferedReader itemBr = new BufferedReader (new InputStreamReader (itemContent));
	            StringBuilder itemSb = new StringBuilder();
	            String itemLine = itemBr.readLine();
	            
	            while (itemLine != null) {
	                itemSb.append(itemLine);
	                itemLine = itemBr.readLine();
	            }

	            String itemEverything = itemSb.toString();
	            Document itemXml = parseAllianceNewsXml(itemEverything);
	            NodeList itemId = getAllianceNewsXmlElements(itemXml, "doc-id");
	            NodeList itemTitle = getAllianceNewsXmlElements(itemXml, "hl1");
                NodeList itemBlock = getAllianceNewsXmlElements(itemXml, "block");
                NodeList itemHead = getAllianceNewsXmlElements(itemXml, "head");
                NodeList itemDateTime = getAllianceNewsXmlElements(itemXml, "story.date");

	            createAllianceNewsArticle(itemId, itemTitle, itemBlock, itemHead, itemDateTime);
            }

        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    // ---------------------------------------------------------------------
 
    /**
     * Parse the Alliance News XML
     *
     * @param  String xml
     * 
     * @return Document
     */
    public static Document parseAllianceNewsXml(String xml) {
        
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder;
        InputSource is;
        Document doc = null;
        
        try {
            
            builder = factory.newDocumentBuilder();
            is = new InputSource(new StringReader(xml));
            doc = builder.parse(is);

        } catch (ParserConfigurationException e) {

        } catch (SAXException e) {

        } catch (IOException e) {

        }

        return doc;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get XML Elements
     *
     * @param  Document doc
     * @param  String   element
     * 
     * @return NodeList
     */
    public static NodeList getAllianceNewsXmlElements(Document doc, String element) {

        NodeList list = null;

        try {
        
            list = doc.getElementsByTagName(element);

        } catch(Exception e) {
            
            e.printStackTrace();
        }

        return list;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Get the most recent change
     *
     * @return void
     */
    public static String getMostRecentChange() throws RepositoryException {

        String recentChange = null;

        try { 
        
            Session session = MgnlContext.getJCRSession("globals");
            Node changeNode = session.getNode("/alliance-news-most-recent-change");

            recentChange = changeNode.getProperty("value").getString();

        } catch (RepositoryException e) {

        }

        return recentChange;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Set the most recent change
     *
     * @param  String change
     * 
     * @return void
     */
    public static void setMostRecentChange(String change) throws RepositoryException {

        try { 
        
            Session session = MgnlContext.getJCRSession("globals");
            Node changeNode = session.getNode("/alliance-news-most-recent-change");

            changeNode.setProperty("value", change);

            session.save();

        } catch (RepositoryException e) {

        }
    }

    // ---------------------------------------------------------------------
 
    /**
     * Create the alliance news article
     *
     * @param  NodeList itemId
     * @param  NodeList itemTitle
     * @param  NodeList itemBlock
     * @param  NodeList itemHead
     * 
     * @return void
     */    
    public static void createAllianceNewsArticle(NodeList itemId, NodeList itemTitle, NodeList itemBlock, NodeList itemHead, NodeList itemDateTime) throws RepositoryException {

        String articleId = (itemId.getLength() > 0) ? itemId.item(0).getAttributes().getNamedItem("id-string").getNodeValue() : "";
        String articleTitle = (itemTitle.getLength() > 0) ? itemTitle.item(0).getTextContent() : "";
        String articleDateTime = (itemDateTime.getLength() > 0) ? itemDateTime.item(0).getTextContent() : "";
        String articleNodePath = seoUrl(articleTitle) + "-" + articleId;

        NodeList contentBlocks = itemBlock.item(0).getChildNodes();

        List<Object> epicList = new ArrayList<>(0);
        List<Object> isinList = new ArrayList<>(0);
        List<Object> categoryList = new LinkedList<>(0);

        StringBuilder contentSb = new StringBuilder();

        for (int i = 0; i < contentBlocks.getLength(); i++) {

        	org.w3c.dom.Node childNode = contentBlocks.item(i);

        	//Element childElement = (Element) childNode;

        	if (childNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE) {

	        	String outputStephanie = "<" + childNode.getNodeName() + ">" + childNode.getTextContent() + "</" + childNode.getNodeName() + ">";

	        	contentSb.append(outputStephanie);
	        	//contentSb.append(System.lineSeparator());
        	}
        }

    	String articleContent = contentSb.toString();

        try { 
        
            Session session = MgnlContext.getJCRSession("alliance-news");

            String nodeAbsPath = "/" + articleNodePath;

            if (!session.nodeExists(nodeAbsPath)) {

                System.out.println(nodeAbsPath);
                
                Node articleNode = session.getRootNode().addNode(articleNodePath, "mgnl:alliance-news");

                articleNode.setProperty("articleId", articleId);
                articleNode.setProperty("title", articleTitle);
                articleNode.setProperty("content", articleContent);
                articleNode.setProperty("date-time", articleDateTime);

                try {

                    Date dateFormatter = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ssZ").parse(articleDateTime);
                    String articleDate = new SimpleDateFormat("dd/MM/yyyy").format(dateFormatter);
                    articleNode.setProperty("date", articleDate);
                
                } catch (ParseException pe) {
                    System.out.println("Parse Exception : " + pe);
                }

                try {
                    
                    Date timeFormatter = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ssZ").parse(articleDateTime);
                    String articleTime = new SimpleDateFormat("h:mm a").format(timeFormatter);
                    articleNode.setProperty("time", articleTime);
                
                } catch (ParseException pe) {
                    System.out.println("Parse Exception : " + pe);
                }

                addMeta(articleNode, itemHead, epicList, isinList);
                addCategories(articleNode, itemHead, categoryList);
            }

            session.save();

        } catch (RepositoryException e) {

        }
    }

    // ---------------------------------------------------------------------
 
    /**
     * Add Meta
     *
     * @param  Node         articleNode
     * @param  NodeList     itemHead
     * @param  List<String> epicList
     * @param  List<String> isinList
     * 
     * @return void
     */
    public static void addMeta(Node articleNode, NodeList itemHead, List<Object> epicList, List<Object> isinList){

        NodeList headMeta = itemHead.item(0).getChildNodes();

        for (int i = 0; i < headMeta.getLength(); i++) {

            org.w3c.dom.Node metaNode = headMeta.item(i);

            if (metaNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE && metaNode.getNodeName() == "meta") {

                NamedNodeMap metaNodeAttr = metaNode.getAttributes();

                Attr nameAttr = (Attr) metaNodeAttr.item(1);

                String nameAttrStr = nameAttr.getValue();

                if (nameAttrStr.equals("ticker")) {

                    Attr contentAttr = (Attr) metaNodeAttr.item(0);
                    String contentAttrStr = contentAttr.getValue();

                    List<String> attrList = new ArrayList<String>(Arrays.asList(contentAttrStr.split("\\s+")));

                    epicList.addAll(getEpics(attrList));
                    isinList.addAll(getIsins(attrList));
                }
                else if (nameAttrStr.equals("ISIN")) {

                    Attr contentAttr = (Attr) metaNodeAttr.item(0);
                    String contentAttrStr = contentAttr.getValue();
                    
                    List<String> ticker = new ArrayList<String>(Arrays.asList(contentAttrStr.split("\\s+")));

                    isinList.addAll(getIsins(ticker));
                }
            }
        }

        try {

            //String epicsCommaSeparated = String.join(",", epicList);
            String[] epicsArray = epicList.toArray(new String[0]);
            //Collection<Object> epicsArray = epicList;
            articleNode.setProperty("epics", epicsArray);

            //String isinsCommaSeparated = String.join(",", isinList);
            String[] isinsArray = isinList.toArray(new String[0]);
            //Collection<Object> isinsArray = isinList;
            articleNode.setProperty("isins", isinsArray);

        } catch (RepositoryException e) {

        }
    }

    // ---------------------------------------------------------------------
 
    /**
     * Add Categories
     *
     * @param  NodeList     itemHead
     * @param  List<String> categoryList
     * 
     * @return void
     */
    public static void addCategories(Node articleNode, NodeList itemHead, List<Object> categoryList){

        NodeList headMeta = itemHead.item(0).getChildNodes();

        boolean isBriefing = false;

        for (int i = 0; i < headMeta.getLength(); i++) {

            org.w3c.dom.Node metaNode = headMeta.item(i);



            if (metaNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE && metaNode.getNodeName() == "meta") {

                NamedNodeMap metaNodeAttr = metaNode.getAttributes();

                Attr nameAttr = (Attr) metaNodeAttr.item(1);

                String nameAttrStr = nameAttr.getValue();

                if (nameAttrStr.equals("content-type")) {

                    Attr contentAttr = (Attr) metaNodeAttr.item(0);
                    String contentAttrStr = contentAttr.getValue();
                    
                    List<String> attrList = new ArrayList<String>(Arrays.asList(contentAttrStr.split("\\s+")));

                    categoryList.addAll(getCategories(attrList));
                }                
                else if (nameAttrStr.equals("fixture")) {

                    Attr contentAttr = (Attr) metaNodeAttr.item(0);
                    String contentAttrStr = contentAttr.getValue();
                    
                    List<String> attrList = new ArrayList<String>(Arrays.asList(contentAttrStr.split("\\s+")));

                    categoryList.addAll(getCategories(attrList));                    
                }                
                else if (!nameAttrStr.equals("fixture") && !nameAttrStr.equals("product") && !nameAttrStr.equals("ticker") && !nameAttrStr.equals("ISIN")) {

                    Attr contentAttr = (Attr) metaNodeAttr.item(0);
                    String contentAttrStr = contentAttr.getValue();
                    
                    List<String> attrList = new ArrayList<String>(Arrays.asList(contentAttrStr.split("\\s+")));

                    categoryList.addAll(getCategories(attrList));
                }
            }
        }

        try { 
        
            //String categoriesCommaSeparated = String.join(",", categoryList);
            //String[] categoriesArray = new String[((Collection<Object>)categoryList).size()];
            //int pos = 0;
            //for (Object value : (Collection<Object>)categoryList) {
                //categoriesArray[pos] = value.toString();
                //pos +=1;
            //}            
           // String[] categoriesArray = categoryList.toArray(new String[0]);
            //Collection<Object> categoriesArray = categoryList;
            //articleNode.setProperty("categories", categoriesArray);
            articleNode.setProperty("categories", categoryList);

        } catch (RepositoryException e) {

        }
    }    

    // ---------------------------------------------------------------------
 
    /**
     * Add Epics
     *
     * @param  List<String> attrList
     * 
     * @return List<String>
     */
    public static List<String> getEpics(List<String> attrList){
        
        //Pattern ep = Pattern.compile("^(?=.*ALL\\.[^\\s]+)(?!.*=ABOUT[^\\s]+)[^\\s]+");
        Pattern ep = Pattern.compile("^(?=.*ALL\\.+)(?!.*=ABOUT+)[^\\s]+");

        List<String> epics = new ArrayList<>(0);

        for (int i = 0; i < attrList.size(); i++) {

            Matcher em = ep.matcher(attrList.get(i));

            while (em.find()){
                
                String epic = attrList.get(i).replace("ALL.", "").replace("ALL", "");

                epics.add(epic);
            }
        }
        return epics;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Add Isins
     *
     * @param  List<String> attrList
     * 
     * @return List<String>
     */
    public static List<String> getIsins(List<String> attrList){
        
        Pattern ip = Pattern.compile("[A-Z]{2}[\\w]{10}");

        List<String> isins = new ArrayList<>(0);

        for (int i = 0; i < attrList.size(); i++) {

            Matcher im = ip.matcher(attrList.get(i));

            while (im.find()){
                
                String isin = attrList.get(i);

                isins.add(isin);
            }
        }
        return isins;
    }

    // ---------------------------------------------------------------------
 
    /**
     * Add Categories
     *
     * @param  List<String> attrList
     * 
     * @return List<String>
     */
    public static List<String> getCategories(List<String> attrList) {
        
        List<String> categories = new ArrayList<>(0);

        for (int i = 0; i < attrList.size(); i++) {
                
            String category = attrList.get(i);

            categories.add(category);
        }
        return categories;
    }

    // ---------------------------------------------------------------------
 
    /**
     * SeoUrl
     *
     * @param  String articleTitle
     * 
     * @return String
     */
    public static String seoUrl(String articleTitle) {
        
        // lower case everything + replace whitespace
        String seoUrl = articleTitle.toLowerCase().replace(" ", "-").replace("--", "-").replace("_", "-");

        // make alphanumeric (removes all other characters)
        Pattern p1 = Pattern.compile("[^A-Za-z0-9-]");
        Matcher m1 = p1.matcher(seoUrl);

        seoUrl = m1.replaceAll("");

        return seoUrl;

        // clean up multiple dashes or whitespaces
        //Pattern p2 = Pattern.compile("[-]+");
        //Matcher m2 = p2.matcher(seoUrl);

        //seoUrl = m2.replaceAll("");
        
        // convert whitespaces and underscore to dash
        //Pattern p3 = Pattern.compile("[\\s_]");
        //Matcher m3 = p3.matcher(seoUrl);

        //seoUrl = m3.replaceAll("-");
        
        // make alphanumeric (removes all other characters)
        //$string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
        
        // clean up multiple dashes or whitespaces
        //$string = preg_replace("/[\s-]+/", " ", $string);
        
        // convert whitespaces and underscore to dash
        //$string = preg_replace("/[\s_]/", "-", $string);
    }
}