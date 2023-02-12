package MapDemo;

import java.util.HashMap;
import java.util.Map.Entry;

public class JCMDemo1 {
    HashMap<Integer, String> productDetails = new HashMap<Integer, String>();

    public void addProdDetails() {
        productDetails.put(101, "M01Mobile");
        productDetails.put(102, "M02Mobile");
        productDetails.put(103, "M03Mobile");
        productDetails.put(104, "M04Mobile");

    }

    public void rtrvProdDetails() {

        for (Entry pentry : productDetails.entrySet()) {
            System.out.println(pentry.getKey() + "    " + pentry.getValue());
        }

        System.out.println(productDetails.get(101));
    }

    public static void main(String[] args) {
        JCMDemo1 jcmObj = new JCMDemo1();

        jcmObj.addProdDetails();
        jcmObj.rtrvProdDetails();
    }
}