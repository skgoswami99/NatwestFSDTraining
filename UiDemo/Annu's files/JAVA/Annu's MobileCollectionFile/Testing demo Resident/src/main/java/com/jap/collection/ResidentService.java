package com.jap.collection;

import java.util.*;

public class ResidentService {

    private static List<Resident> residentsRepository = new ArrayList<>();

    public ResidentService(){

    }

    /**
     * create list of all the residents.
     */
    public boolean addResident(Resident resident) {
        return residentsRepository.add(resident);
    }

    /*
         Searching the resident based on the social security number
     */

    public Resident searchResident(int socialSecurityNumber){
         Resident resident = null;

        for (Iterator<Resident> iterator = residentsRepository.iterator(); iterator.hasNext();) {
            Resident resident1 =  iterator.next();
            if(resident1.getSocialSecurityNumber() == socialSecurityNumber) {
                resident =  resident1;
                break;
            }
        }
        return resident;

    }

    //Sort the name of the residents in alphabetical order.
    public List getAllNamesSorted(List residentsRepository){
        Comparator<Resident> nameComparator = new Comparator<Resident>() {
            @Override
            public int compare(Resident first, Resident second) {
                return first.getFullName().compareTo(second.getFullName());
            }
        };
        Collections.sort(residentsRepository,nameComparator);
        return residentsRepository;

    }

    /**
     * Fetch the list of residents based on their gender.
     */
    public List<Resident> getAllResidentsByGender(char gender){

        List<Resident> residentList = new ArrayList<>();
        for(Resident resident: residentsRepository){
            if(resident.getGender() == gender){
                residentList.add(resident);
            }
        }


       return residentList;
    }

//    public static void main(String[] args) {
//
//        ResidentService residentService = new ResidentService();
//        Resident resident1 = new Resident("John" , 1111,'M');
//        Resident resident2 = new Resident("Johnny",2222,'M');
//        Resident resident3 = new Resident("Charles" ,3333,'F');
//        Resident resident4 = new Resident("Harry",4444,'M');
//        Resident resident5 = new Resident("William",5555,'M');
//        residentService.addResident(resident1);
//        residentService.addResident(resident2);
//        residentService.addResident(resident3);
//        residentService.addResident(resident4);
//        residentService.addResident(resident5);
//       Resident resident =  residentService.searchResident(2222);
//        //System.out.println(resident);
//       //List sorted =  residentService.getAllNamesSorted(residentsRepository);
//       // System.out.println("Sorted " + sorted);
//        List residentSet = residentService.getAllResidentsByGender('M');
//      System.out.println(residentSet);
//
//    }
}
