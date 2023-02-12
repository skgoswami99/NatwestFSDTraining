package DataModel;

public class MainClass {

    public static void main(String[] args) {

        Employee empObj = new Employee();

        empObj.setEmpId(1001);
        empObj.setEmpName("Tim");
        empObj.setEmpAge(23);
        empObj.setEmpSal(12345.66f);

        System.out.println(empObj.getEmpId());
        System.out.println(empObj.getEmpName());
        System.out.println(empObj.getEmpAge());
        System.out.println(empObj.getEmpSal());

    }

}
