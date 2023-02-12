package com.jap.collectiondemo;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class MobileStore {

    private List<Mobile> allMobiles;

    private String record = "";
    private String splitBy = ",";

    public MobileStore() {
        allMobiles = new ArrayList<>();
    }

    public List<Mobile> readMobileData(String fileName) {
        try {
            // In file reader we have given the refernece of the file
            FileReader fro = new FileReader(fileName);

            // will get the data line by line from filereader
            BufferedReader br = new BufferedReader(fro);

            int i = 0;
            // read the first line and stored in line variable
            String line = br.readLine();

            // now to read the futher lines we are using loop
            // read the line and stored in record
            // !=null means last line

            while ((record = br.readLine()) != null) {

                // split mechanism , so where the program will see a comma it will split the
                // save in mobile record (array)

                String[] mobileRecord = record.split(splitBy);
                Mobile mobile = new Mobile();
                mobile.setBrandName(mobileRecord[0]);
                mobile.setModelName(mobileRecord[1]);

                // System.out.println(mobile.getBrandName());
                // data is in string, so where we need double or integer, we will define it
                // seperately as below:
                mobile.setCost(Double.parseDouble(mobileRecord[2]));

                mobile.setScreenSize((mobileRecord[3]));
                mobile.setBatteryLife((mobileRecord[4]));
                mobile.setStorageSpace((mobileRecord[5]));
                mobile.setCameraPixels(Integer.parseInt(mobileRecord[6]));
                allMobiles.add(mobile);
            }
            return allMobiles;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            // return null;
        }
        /*
         * the complete line will get stored in allmobiles and loop will end till there
         * is no line left.
         */
        return allMobiles;
    }

    public List<Mobile> findPhoneByBrand(String brandName) {
        List<Mobile> mobilesByBrand = new ArrayList<>();
        for (Mobile mobile : allMobiles) {

            if (mobile.getBrandName().equalsIgnoreCase(brandName)) {
                mobilesByBrand.add(mobile);
            }
        }
        return mobilesByBrand;
    }

    public List<Mobile> findPhoneCostMoreThan500$() {
        List<Mobile> mobilesMoreThan500 = new ArrayList<>();
        for (Mobile mobile : allMobiles) {
            if (mobile.getCost() > 500) {
                mobilesMoreThan500.add(mobile);
            }
        }
        return mobilesMoreThan500;
    }

    public List<Mobile> findPhonePixelMoreThan12MP() {
        List<Mobile> mobilesMoreThan12MP = new ArrayList<>();
        for (Mobile mobile : allMobiles) {

            if (mobile.getCameraPixels() > 12) {
                mobilesMoreThan12MP.add(mobile);
            }
        }
        return mobilesMoreThan12MP;
    }

}
