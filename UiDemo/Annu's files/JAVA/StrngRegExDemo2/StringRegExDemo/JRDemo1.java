package StringRegExDemo;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JRDemo1 {
    public static void main(String[] aa) {

        String tosearch = "FindText";
        String fromsearch = "NEWTEXTFindTextFindTexthere";

        // Specifying the pattern to be searched...
        Pattern ptobj = Pattern.compile(tosearch);

        // Search above pattern in given string
        Matcher mobj = ptobj.matcher(fromsearch);

        mobj.find();

        System.out.println("Hello Step2");
        System.out.println("Found from " + mobj.start() + " to "
                + (mobj.end() - 1));
    }
}
