package com.stackroute.datamunger;

/*There are total 5 DataMungertest files:
 * 
 * 1)DataMungerTestTask1.java file is for testing following 3 methods
 * a)getSplitStrings()  b) getFileName()  c) getBaseQuery()
 * 
 * Once you implement the above 3 methods,run DataMungerTestTask1.java
 * 
 * 2)DataMungerTestTask2.java file is for testing following 3 methods
 * a)getFields() b) getConditionsPartQuery() c) getConditions()
 * 
 * Once you implement the above 3 methods,run DataMungerTestTask2.java
 * 
 * 3)DataMungerTestTask3.java file is for testing following 2 methods
 * a)getLogicalOperators() b) getOrderByFields()
 * 
 * Once you implement the above 2 methods,run DataMungerTestTask3.java
 * 
 * 4)DataMungerTestTask4.java file is for testing following 2 methods
 * a)getGroupByFields()  b) getAggregateFunctions()
 * 
 * Once you implement the above 2 methods,run DataMungerTestTask4.java
 * 
 * Once you implement all the methods run DataMungerTest.java.This test case consist of all
 * the test cases together.
 */

public class DataMunger {

	/*
	 * This method will split the query string based on space into an array of words
	 * and display it on console
	 */
	
//	Input String : 	select * from ipl.csv where season > 2014 and city = 'Bangalore'
//		    
//		    Output String: select
//		    			    	 * 
//		    			     from 
//		    			     ipl.csv  
//		    			     where  
//		    			     season
//		    			     > 
//		    			     2014
//		    			     and 
//		    			     city
//		    			     =
//		    			     'bangalore'

	public String[] getSplitStrings(String queryString) {

		
        final String[] outcome = queryString.toLowerCase().split(" ");
        
        return outcome ;
	}

	/*
	 * Extract the name of the file from the query. File name can be found after a
	 * space after "from" clause. Note: ----- CSV file can contain a field that
	 * contains from as a part of the column name. For eg: from_date,from_hrs etc.
	 * 
	 * Please consider this while extracting the file name in this method.
	 */

	public String getFileName(String queryString) {

		// Input String : select * from ipl.csv where season > 2014 and city = 'Bangalore'
		// Output String : ipl.csv
		
	      final int iplIndex = queryString.indexOf("ipl");
			final int csvIndex = queryString.indexOf("csv")+3;
			queryString= queryString.substring(iplIndex,csvIndex);
			return queryString; 
		 }
		
	

	/*
	 * This method is used to extract the baseQuery from the query string. BaseQuery
	 * contains from the beginning of the query till the where clause
	 * 
	 * Note: ------- 1. The query might not contain where clause but contain order
	 * by or group by clause 2. The query might not contain where, order by or group
	 * by clause 3. The query might not contain where, but can contain both group by
	 * and order by clause
	 */
//	Input String : select * from ipl.csv where season > 2014 and city = 'Bangalore'
//			Output String : select * from ipl.csv 
	
	public String getBaseQuery(String queryString) {
		final int selIndex = queryString.indexOf("select");
		final int csvIndex = queryString.indexOf("csv") +3;
		
		queryString= queryString.substring(selIndex,csvIndex);
		return queryString; 
	}

	/*
	 * This method will extract the fields to be selected from the query string. The
	 * query string can have multiple fields separated by comma. The extracted
	 * fields will be stored in a String array which is to be printed in console as
	 * well as to be returned by the method
	 * 
	 * Note: 1. The field name or value in the condition can contain keywords
	 * as a substring. For eg: from_city,job_order_no,group_no etc. 2. The field
	 * name can contain '*'
	 * 
	 */
//	Input String : select city,winner,player_match from ipl.csv where season > 2014 
//    and city ='Bangalore'
//Output String :	city
//		winner
//		player_match
//	public static void main(String[] args) {
//	DataMunger obj = new DataMunger();
//    String[] x= obj.getFields("select city,winner,player_match from ipl1.csv where season > 2014 and city ='Bangalore' order by city");
//    System.out.println(x);
	
//}
	public String[] getFields(String queryString) {
		
		final String[] words = queryString.split(" ");
        
        final String[] field = words[1].split(",");
        return field ;
	
	}

	/*
	 * This method is used to extract the conditions part from the query string. The
	 * conditions part contains starting from where keyword till the next keyword,
	 * which is either group by or order by clause. In case of absence of both group
	 * by and order by clause, it will contain till the end of the query string.
	 * Note:  1. The field name or value in the condition can contain keywords
	 * as a substring. For eg: from_city,job_order_no,group_no etc. 2. The query
	 * might not contain where clause at all.
	 */
//	Input String : select * from ipl.csv where season > 2014 and city ='Bangalore'
	
	public String getConditionsPartQuery(String queryString) {
		final int whereIndex = queryString.indexOf("where") +6;
//		
		if (whereIndex-6 == -1) {
			return null;
		}
		queryString= queryString.substring(whereIndex).toLowerCase();
		queryString = queryString.split(" group by | order by ")[0];
		return queryString; 
	}

	/*
	 * This method will extract condition(s) from the query string. The query can
	 * contain one or multiple conditions. In case of multiple conditions, the
	 * conditions will be separated by AND/OR keywords. for eg: Input: select
	 * city,winner,player_match from ipl.csv where season > 2014 and city
	 * ='Bangalore'
	 * 
	 * This method will return a string array ["season > 2014","city ='bangalore'"]
	 * and print the array
	 * 
	 * Note: ----- 1. The field name or value in the condition can contain keywords
	 * as a substring. For eg: from_city,job_order_no,group_no etc. 2. The query
	 * might not contain where clause at all.
	 */

	public String[] getConditions(String queryString) {
		final int whereIndex = queryString.indexOf("where") +6;
		if (whereIndex-6 == -1) {
			return null;
		}
        final String newstring = queryString.substring(whereIndex).toLowerCase();
//        System.out.println(newstring);
        final String [] words = newstring.split(" group by | order by ")[0].split(" and | or ");
//      System.out.println(Arrays.toString(words));
       
		return words;		
	}
	

	/*
	 * This method will extract logical operators(AND/OR) from the query string. The
	 * extracted logical operators will be stored in a String array which will be
	 * returned by the method and the same will be printed Note:  1. AND/OR
	 * keyword will exist in the query only if where conditions exists and it
	 * contains multiple conditions. 2. AND/OR can exist as a substring in the
	 * conditions as well. For eg: name='Alexander',color='Red' etc. Please consider
	 * these as well when extracting the logical operators.
	 * 
	 */


	
//	 Input String : select season,winner,player_match from ipl.csv where season > 2014 and    		                 
//	 city ='Bangalore' or date > '31-12-2014'
	
	public String [] getLogicalOperators(String queryString) {
		final int whereIndex = queryString.indexOf("where") +6;
		if (whereIndex-6 == -1) {
			return null;
		}
		String newWords = "";
		final String newstring = queryString.substring(whereIndex);
		final String [] words = newstring.split(" ");
		for (int i=0; i<words.length; i++) {
			if (words[i].matches("and|or")) {
				newWords += words[i] + " ";
				
				}
			}
//		System.out.println(NewWords);
		return newWords.split(" ");
		
	}
	/*
	 * This method extracts the order by fields from the query string. Note: 
	 * 1. The query string can contain more than one order by fields. 2. The query
	 * string might not contain order by clause at all. 3. The field names,condition
	 * values might contain "order" as a substring. For eg:order_number,job_order
	 * Consider this while extracting the order by fields
	 */

	public String[] getOrderByFields(String queryString) {
		final int orderIndex = queryString.indexOf("order by") +9;
		if (orderIndex-9 == -1) {
		return null;
	}
		
		queryString= queryString.substring(orderIndex);
//		System.out.println(queryString);
		return queryString.split(" "); 
	}

	/*
	 * This method extracts the group by fields from the query string. Note:
	 * 1. The query string can contain more than one group by fields. 2. The query
	 * string might not contain group by clause at all. 3. The field names,condition
	 * values might contain "group" as a substring. For eg: newsgroup_name
	 * 
	 * Consider this while extracting the group by fields
	 */

	public String[] getGroupByFields(String queryString) {
		final int grIndex = queryString.indexOf("group by") +9;
		if (grIndex-9 == -1) {
		return null;
	}
		
		queryString= queryString.substring(grIndex);
//		System.out.println(queryString);
		return queryString.split(" "); 
	}

	/*
	 * This method extracts the aggregate functions from the query string. Note:
	 *  1. aggregate functions will start with "sum"/"count"/"min"/"max"/"avg"
	 * followed by "(" 2. The field names might
	 * contain"sum"/"count"/"min"/"max"/"avg" as a substring. For eg:
	 * account_number,consumed_qty,nominee_name
	 * 
	 * Consider this while extracting the aggregate functions
	 */
//	Input String : select avg(win_by_wickets),min(win_by_runs) from ipl.csv 
//	Output String : 
//		            avg(win_by_wickets)
//                     min(win_by_runs)
                     
	public String[] getAggregateFunctions(String queryString) {

		if (queryString.contains("min(")||queryString.contains("max(")||queryString.contains("count(")||
				queryString.contains("sum(")||queryString.contains("avg(")) {
		
		
		String newWords = "";
		final String [] agg = queryString.split(" ")[1].split(",");

		for (int i=0; i < agg.length; i++) {
			if (agg[i].startsWith("min(")|| agg[i].startsWith("max(")
					|| agg[i].startsWith("count(")|| agg[i].startsWith("sum(")
					|| agg[i].startsWith("avg("))
			{newWords += agg[i] + " " ;	}
		}
//		System.out.println(NewWords);
		return newWords.split(" ");
		}
		else {return null;}
	}
}