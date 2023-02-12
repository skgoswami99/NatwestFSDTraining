package DataModel;

// Model class, Entity Class, Document

public class Employee {

    private int empId;

    private String empName;
    private int empAge;
    private float empSal;

    // Property methods for each attributes

    public int getEmpId() {
        return this.empId;
    }

    public void setEmpId(int empparamId) {
        this.empId = empparamId;
    }

    public String getEmpName() {
        return this.empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public int getEmpAge() {
        return this.empAge;
    }

    public void setEmpAge(int empAge) {
        this.empAge = empAge;
    }

    public float getEmpSal() {
        return this.empSal;
    }

    public void setEmpSal(float empSal) {
        this.empSal = empSal;
    }

    // Represent object reference as string and display values of sttributes as
    // record

    @Override
    public String toString() {
        return "{" +
                " empId='" + getEmpId() + "'" +
                ", empName='" + getEmpName() + "'" +
                ", empAge='" + getEmpAge() + "'" +
                ", empSal='" + getEmpSal() + "'" +
                "}";
    }
}