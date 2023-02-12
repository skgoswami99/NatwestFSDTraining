package DataModel;

import java.util.Arrays;

public class AssignPrac {
    
public static void main(String[] args) {
    AssignPrac obj = new AssignPrac();
    // String x= obj.getFileName("select * from ipl.csv where season were > 2014 and city = 'Bangalore'");
    // System.out.println(x);
    // obj.getSplitStrings(args);
    // obj.getFields(args);
     obj.getConditions(null);

}

    public  String getFileName (String queryString) {

		// Input String : select * from ipl.csv where season > 2014 and city = 'Bangalore'
		// Output String : ipl.csv
		// String str = "select * from ipl.csv where season were > 2014 and city = 'Bangalore'";
			
            int pos1 = queryString.indexOf("ipl");
            System.out.println(pos1);
	      int pos2 = queryString.indexOf("csv") +3;
          System.out.println(pos2);
	      queryString= queryString.substring(pos1,pos2);
	      return queryString;
		 }

    public String[] getSplitStrings(String[] queryString) {

            String s = "select * from ipl.csv where season were > 2014 and city = 'Bangalore";

            String[] words = s.toLowerCase().split(" ");
                for (String a :words){
                    
                System.out.println(a);
            }
            return words ;
        
         }

         public String[] getFields(String[] queryString) {

            String s = "select city,winner,player_match from ipl.csv where season > 2014 and city 'Bangalore'";

            String[] words = s.split(" ");
            String[] b1 = words[1].split(",");
            for (String a : b1){
                
                System.out.println(a);
                }
       
           
            return b1 ;
        
         }
     
         public String[] getConditions(String queryString) {
            String s = "select city,winner,player_match from ipl.csv where season > 2014 and city 'Bangalore' or india order by Aditya group by sandeep";

            int s1 = s.indexOf("where") +6;
            String newstring = s.substring(s1).toLowerCase();
            System.out.println(newstring);
            String [] words = newstring.split("group by | order by")[0].split(" and | or ");

            System.out.println(Arrays.toString(words));
            // String[] b1 = words[0].split(" ");
            // for (String a : b1){
                
            //     System.out.println(a);
            //     }
            return words ;
        }

}

      
