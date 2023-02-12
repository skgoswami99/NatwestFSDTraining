package SortCollectionDemo;

public class Student implements Comparable {

    private String stdName;
    private int stdMarks;

    public Student(String stdName, int stdMarks) {
        this.stdName = stdName;
        this.stdMarks = stdMarks;
    }

    public String getStdName() {
        return this.stdName;
    }

    public void setStdName(String stdName) {
        this.stdName = stdName;
    }

    public int getStdMarks() {
        return this.stdMarks;
    }

    public void setStdMarks(int stdMarks) {
        this.stdMarks = stdMarks;
    }

    // @Override
    // public String toString() {
    // return "{" +
    // " stdName='" + getStdName() + "'" +
    // ", stdMarks='" + getStdMarks() + "'" +
    // "}";
    // }

    @Override
    public String toString() {
        StringBuffer stdBuffer = new StringBuffer();

        stdBuffer.append("Name: " + stdName + "\n");

        stdBuffer.append("Marks: " + stdMarks + "\n");

        return stdBuffer.toString();
    }

    @Override
    public int compareTo(Object stdObjpara) {

        // TypeCasting
        // int num = 10;
        // float num1 = 12.22f;

        // num = (int) num1;

        Student stdObj = (Student) stdObjpara;

        if (this.stdMarks > stdObj.getStdMarks()) {
            return 1;
        } else if (this.stdMarks < stdObj.getStdMarks()) {
            return -1;
        } else {
            return 0;
        }
    }
}