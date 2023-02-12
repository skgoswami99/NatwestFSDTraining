package natwest.io;

public class Employee
{
    private int empId;
    private String empName;
    private int empAge;
    private double empSal;

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public int getEmpAge() {
        return empAge;
    }

    public void setEmpAge(int empAge) {
        this.empAge = empAge;
    }

    public double getEmpSal() {
        return empSal;
    }

    public void setEmpSal(double empSal) {
        this.empSal = empSal;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "empId=" + empId +
                ", empName='" + empName + '\'' +
                ", empAge=" + empAge +
                ", empSal=" + empSal +
                '}';
    }

    public Employee()
    {

    }

    public Employee(int empId, String empName, int empAge, double empSal) {
        this.empId = empId;
        this.empName = empName;
        this.empAge = empAge;
        this.empSal = empSal;
    }
}
