package com.stackroute.datamunger.query.parser;

/*There are total 4 DataMungerTest file:
 *
 * 1)DataMungerTestTask1.java file is for testing following 4 methods
 * a)getBaseQuery()  b)getFileName()  c)getOrderByClause()  d)getGroupByFields()
 *
 * Once you implement the above 4 methods,run DataMungerTestTask1.java
 *
 * 2)DataMungerTestTask2.java file is for testing following 2 methods
 * a)getFields() b) getAggregateFunctions()
 *
 * Once you implement the above 2 methods,run DataMungerTestTask2.java
 *
 * 3)DataMungerTestTask3.java file is for testing following 2 methods
 * a)getRestrictions()  b)getLogicalOperators()
 *
 * Once you implement the above 2 methods,run DataMungerTestTask3.java
 *
 * Once you implement all the methods run DataMungerTest.java.This test case consist of all
 * the test cases together.
 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class QueryParser {

    private QueryParameter queryParameter = new QueryParameter();

    /*
     * This method will parse the queryString and will return the object of
     * QueryParameter class
     */
    public QueryParameter parseQuery(String queryString) {
        queryParameter.setBaseQuery(getBaseQuery(queryString));
        queryParameter.setFileName(getFileName(queryString));
        queryParameter.setOrderByFields(getOrderByFields(queryString));
        queryParameter.setGroupByFields(getGroupByFields(queryString));
        queryParameter.setFields(getFields(queryString));
        queryParameter.setAggregateFunctions(getAggregateFunctions(queryString));
        queryParameter.setRestrictions(getRestrictions(queryString));
        queryParameter.setLogicalOperators(getLogicalOperators(queryString));

        return queryParameter;
    }

    /*
     * Extract the name of the file from the query. File name can be found after the
     * "from" clause.
     */


    public String getFileName(String queryString) {
        // Input String : select * from ipl.csv where season > 2014 and city = 'Bangalore'
        // Output String : ipl.csv

        final int iplIndex = queryString.indexOf("ipl");
        final int csvIndex = queryString.indexOf("csv") + 3;
        queryString = queryString.substring(iplIndex, csvIndex);
        return queryString;
    }
    /*
     *
     * Extract the baseQuery from the query.This method is used to extract the
     * baseQuery from the query string. BaseQuery contains from the beginning of the
     * query till the where clause
     */


    public String getBaseQuery(String queryString) {
        final int selIndex = queryString.indexOf("select");
        final int csvIndex = queryString.indexOf("csv") + 3;

        queryString = queryString.substring(selIndex, csvIndex);
        return queryString;
    }

    /*
     * extract the order by fields from the query string. Please note that we will
     * need to extract the field(s) after "order by" clause in the query, if at all
     * the order by clause exists. For eg: select city,winner,team1,team2 from
     * data/ipl.csv order by city from the query mentioned above, we need to extract
     * "city". Please note that we can have more than one order by fields.
     */
    public List<String> getOrderByFields(String queryString) {
        int s1 = queryString.indexOf("order by") + 9;
        if (s1 - 9 == -1) {
            return null;
        }

        queryString = queryString.substring(s1);
        List<String> newString = new ArrayList<String>();
        newString.add(queryString);
//		System.out.println(orderByFields);
        return newString;
    }

    /*
     * Extract the group by fields from the query string. Please note that we will
     * need to extract the field(s) after "group by" clause in the query, if at all
     * the group by clause exists. For eg: select city,max(win_by_runs) from
     * data/ipl.csv group by city from the query mentioned above, we need to extract
     * "city". Please note that we can have more than one group by fields.
     */
    public List<String> getGroupByFields(String queryString) {
        final int grIndex = queryString.indexOf("group by") + 9;
        if (grIndex - 9 == -1) {
            return null;
        }
        queryString = queryString.substring(grIndex).split(" order by ")[0];
        List<String> newString = new ArrayList<String>();
        newString.add(queryString);
        //System.out.println(queryString);
        return newString;
    }
    /*
     * Extract the selected fields from the query string. Please note that we will
     * need to extract the field(s) after "select" clause followed by a space from
     * the query string. For eg: select city,win_by_runs from data/ipl.csv from the
     * query mentioned above, we need to extract "city" and "win_by_runs". Please
     * note that we might have a field containing name "from_date" or "from_hrs".
     * Hence, consider this while parsing.
     * Input String : select city,winner,player_match from ipl.csv where season > 2014
     * and city = 'Bangalore'
     */

    public List<String> getFields(String queryString) {
        final String[] str = queryString.split(" ")[1].split(",");

        List<String> newString = new ArrayList<String>();
        // Sending each word separately using for loop and index positions because...
        // if sending the array directly it's adding the array within list hence creating double array
        for (int i = 0; i < str.length; i++) {
            newString.add(str[i]);
        }

        return newString;
    }
    /*
     * Extract the conditions from the query string(if exists). for each condition,
     * we need to capture the following: 1. Name of field 2. condition 3. value
     *
     * For eg: select city,winner,team1,team2,player_of_match from data/ipl.csv
     * where season >= 2008 or toss_decision != bat
     *
     * here, for the first condition, "season>=2008" we need to capture: 1. Name of
     * field: season 2. condition: >= 3. value: 2008
     *
     * the query might contain multiple conditions separated by OR/AND operators.
     * Please consider this while parsing the conditions.
     *
     */
//	queryString = "select winner,season,team1,team2 from ipl.csv
//	where season = 2014 and city ='Bangalore' or city ='Delhi'";

//	public static void main(String[] args) {
//		QueryParser obj = new QueryParser();
//		List <Restriction> x= obj.getRestriction("select winner,season,team1,team2 from ipl.csv where" + "season > 2014 and city ='Bangalore'");
//		System.out.println(x);
////		System.out.println(queryParameter.getBaseQuery());
//	}

    public List<Restriction> getRestrictions(String queryString) {
        List<Restriction> newString1 = new ArrayList<Restriction>();
        final int whereIndex = queryString.indexOf("where") + 6;
        if (whereIndex - 6 == -1) {
            return null;
        }
        String str = queryString.substring(whereIndex);
        String[] str1 = str.split(" and | or ");
//              city ='Bangalore'
////			season = 2014
        for (int i = 0; i < str1.length; i++) {
            if (str1[i].contains("'")) {
                String[] str2 = str1[i].split(" ");

                        newString1.add(new Restriction(str2[0],
                        str2[1].substring(str2[1].indexOf("=") +2, str2[1].contains("'")?str2[1].length() -1:str2[1].length()),
                        str2[1].substring(str2[1].indexOf("="), str2[1].indexOf("=") + 1)));
                        }
            else {
                String[] str2 = str1[i].split(" ");
                newString1.add(new Restriction(str2[0], str2[2], str2[1]));
            }
        }
        return newString1;
        }
//        final int whereIndex = queryString.indexOf("where") + 6;
//        if (whereIndex - 6 == -1) {
//            return null;
//        }
//        List<Restriction> newString1 = new ArrayList<Restriction>();
//        String str = queryString.substring(whereIndex);
////        System.out.println(str[0]);
//
//        if (str.contains("and") || str.contains("or")) {
//            String[] str1 = str.split(" and | or ");
//
////			city ='Bangalore'
////			season = 2014
//            for (int i = 0; i < str1.length; i++) {
//                if (str.contains("=")){
//                newString1.add(new Restriction(str1[i].substring(0, str1[i].indexOf("=") - 1),
//                        str1[i].substring(str1[i].indexOf("=") + 2, str1[i].contains("'")?str1[i].length() -1:str1[i].length()),
//                        str1[i].substring(str1[i].indexOf("="), str1[i].indexOf("=") + 1)));}
//                else if (str.contains(">")){
//                    newString1.add(new Restriction(str1[i].substring(0, str1[i].indexOf(">") - 1),
//                            str1[i].substring(str1[i].indexOf(">") + 2, str1[i].contains("'")?str1[i].length() -1:str1[i].length()),
//                            str1[i].substring(str1[i].indexOf(">"), str1[i].indexOf(">") + 1)));}
//                else if (str.contains("<")){
//                newString1.add(new Restriction(str1[i].substring(0, str1[i].indexOf("<") - 1),
//                        str1[i].substring(str1[i].indexOf("<") + 2, str1[i].contains("'")?str1[i].length() -1:str1[i].length()),
//                        str1[i].substring(str1[i].indexOf("<"), str1[i].indexOf("<") + 1)));}
//
////            newString1.add(new Restriction(str1[0].trim().substring(0, str1[0].trim().indexOf("=|>|<") - 1),
////                    str1[0].trim().substring(str1[0].indexOf("=|>|<") + 2, str1[0].trim().length()),
////                    str1[0].trim().substring(str1[0].indexOf("=|>|<"), str1[0].trim().indexOf("=|>|<") + 1)));
////
////            newString1.add(new Restriction(str1[1].trim().substring(0, str1[1].trim().indexOf("=|>|<") - 1),
////                    str1[1].trim().substring(str1[1].indexOf("=|>|<") + 2, str1[1].trim().length() - 1),
////                    str1[1].substring(str1[1].indexOf("=|>|<"), str1[1].trim().indexOf("=|>|<") + 1)));
//            }
//        } else {
//            String[] str2 = str.split(" ");
//            newString1.add(new Restriction(str2[0], str2[2], str2[1]));
//        }
//        return newString1;



    /*
     * Extract the logical operators(AND/OR) from the query, if at all it is
     * present. For eg: select city,winner,team1,team2,player_of_match from
     * data/ipl.csv where season >= 2008 or toss_decision != bat and city =
     * bangalore
     *
     * The query mentioned above in the example should return a List of Strings
     * containing [or,and]
     */
    public List<String> getLogicalOperators(String queryString) {
        final int whereIndex = queryString.indexOf("where") + 6;
        if (whereIndex - 6 == -1) {
            return null;
        }
//        String newWords = "";
        List<String> newWords = new ArrayList<String>();

        final String[] newstring = queryString.substring(whereIndex).split(" ");

        for (int i = 0; i < newstring.length; i++) {
            if (newstring[i].matches("and|or")) {
                newWords.add(newstring[i]);
            }
        }
//		System.out.println(NewWords);
        return newWords;

    }
    /*
     * Extract the aggregate functions from the query. The presence of the aggregate
     * functions can determined if we have either "min" or "max" or "sum" or "count"
     * or "avg" followed by opening braces"(" after "select" clause in the query
     * string. in case it is present, then we will have to extract the same. For
     * each aggregate functions, we need to know the following: 1. type of aggregate
     * function(min/max/count/sum/avg) 2. field on which the aggregate function is
     * being applied.
     *
     * Please note that more than one aggregate function can be present in a query.
     *
     *
     */

    public List<AggregateFunction> getAggregateFunctions(String queryString) {

        if (queryString.contains("min(") || queryString.contains("max(") || queryString.contains("count(") ||
                queryString.contains("sum(") || queryString.contains("avg(")) {

            List<AggregateFunction> newString = new ArrayList<AggregateFunction>();
//				String newWords = "";
            final String[] agg = queryString.split(" ")[1].split(",");

            for (int i = 0; i < agg.length; i++) {
                if (agg[i].startsWith("min(") || agg[i].startsWith("max(")
                        || agg[i].startsWith("count(") || agg[i].startsWith("sum(")
                        || agg[i].startsWith("avg("))
//					{newWords += agg[i] + " " ;	}

                {
                    newString.add(new AggregateFunction(agg[i].substring(agg[i].indexOf("(") + 1, agg[i].length() - 1),
                            agg[i].substring(0, agg[i].indexOf("("))));
                }
            }
//		System.out.println(NewWords);
            return newString;
        } else {
            return null;
        }
    }
};
