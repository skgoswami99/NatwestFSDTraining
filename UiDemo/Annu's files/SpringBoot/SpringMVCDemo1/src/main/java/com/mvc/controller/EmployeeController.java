package com.mvc.controller;

import com.mvc.model.Employee;
import com.mvc.repository.EmpRepository;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class EmployeeController
{
    ApplicationContext appctx = new ClassPathXmlApplicationContext("beans.xml");

    Employee empObj = appctx.getBean("empObj",Employee.class);

    EmpRepository empRepo = appctx.getBean("empRepoObj",EmpRepository.class);

    @GetMapping("/")
    public String getHomePage()
    {
        System.out.println("Taking to Home Page");
        return "index";
    }

    @PostMapping("/saveEmp")
    public String saveEmployee(@ModelAttribute("empObj") Employee empObj, ModelMap model)
    {
        this.empRepo.addEmpData(empObj);
        model.addAttribute("empList1",this.empRepo.getEmpDetails());
        return "index";
    }
}
