package com.jap.collection.commander;

import com.jap.collection.Resident;
import com.jap.collection.ResidentService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ResidentServiceTest {

    ResidentService residentService;
    List<Resident> residentList;

    @BeforeEach
    public void setUp(){

        residentService = new ResidentService();
        residentList = new ArrayList<>();
        Resident resident1 = new Resident("John" , 1111,'M');
        Resident resident2 = new Resident("Johnny",2222,'M');
        Resident resident3 = new Resident("Charles" ,3333,'F');
        Resident resident4 = new Resident("Harry",4444,'M');
        Resident resident5 = new Resident("William",5555,'M');
        residentList.add(resident1);
        residentList.add(resident2);
        residentList.add(resident3);
        residentList.add(resident4);
        residentList.add(resident5);
        residentService.addResident(resident1);
        residentService.addResident(resident2);
        residentService.addResident(resident3);
        residentService.addResident(resident4);
        residentService.addResident(resident5);
    }

    @AfterEach
    public void tearDown(){
        residentService = null;

    }

    @Test
    public void givenResidentSocialSecurityNumberReturnResident(){

        Resident resident = residentService.searchResident(2222);
        assertEquals(resident.getFullName(),"Johnny");

        Resident resident1 = residentService.searchResident(3333);
        assertEquals(resident1.getFullName(),"Charles");

    }

    @Test
  public void givenListReturnSortedList(){
       List residentList = new ArrayList<>();
        Resident resident1 = new Resident("John" , 1111,'M');
        Resident resident2 = new Resident("Johnny",2222,'M');
        Resident resident3 = new Resident("Charles" ,3333,'F');
        Resident resident4 = new Resident("Harry",4444,'M');
        Resident resident5 = new Resident("William",5555,'M');
        residentList.add(resident3);
        residentList.add(resident4);
        residentList.add(resident1);
        residentList.add(resident2);
        residentList.add(resident5);

        List sortedList = residentService.getAllNamesSorted(residentList);
        assertEquals(sortedList,residentList);


    }
    @Test
    public void givenListReturnGender(){
        List residentList1 = new ArrayList<>();
        Resident resident1 = new Resident("John" , 1111,'M');
        Resident resident2 = new Resident("Johnny",2222,'M');
       // Resident resident3 = new Resident("Charles" ,3333,'F');
        Resident resident4 = new Resident("Harry",4444,'M');
        Resident resident5 = new Resident("William",5555,'M');
       // residentList.add(resident3);
        residentList1.add(resident1);
        residentList1.add(resident2);
        residentList1.add(resident4);
        residentList1.add(resident5);

        List genderList = residentService.getAllResidentsByGender('M');
        assertEquals(residentList1.size(),genderList.size());



    }





}