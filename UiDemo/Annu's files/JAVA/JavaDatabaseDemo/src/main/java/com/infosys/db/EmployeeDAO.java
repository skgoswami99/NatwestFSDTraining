package com.infosys.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Optional;

public class EmployeeDAO {

	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost:3306/OrganizationDB";
	static final String USER = "root";
	static final String PASS = "mysql@2020";

	Connection con = null;
	Statement stmt = null;
	ResultSet rst = null;
	Employee empObj = null;

	String sqlQuery = "Select * from Employee where empId = 101";

	Optional<Employee> employee = Optional.empty();

	public Optional<Employee> getEmployeeById() {

		try {
			Class.forName(JDBC_DRIVER);

			con = DriverManager.getConnection(DB_URL, USER, PASS);

			stmt = con.createStatement();

			rst = stmt.executeQuery(sqlQuery);

			while (rst.next()) {
				int empId = rst.getInt(1);
				String empName = rst.getString(2);
				int age = rst.getInt(3);

				empObj = new Employee();
				empObj.setEmpId(empId);
				empObj.setEmpName(empName);
				empObj.setAge(age);

				employee = Optional.ofNullable(empObj);
			}
		} catch (Exception eobj) {

		} finally {
			try {
				if (rst != null) {
					rst.close();
				}

				if (stmt != null) {
					stmt.close();
				}

				if (con != null) {
					con.close();
				}
			} catch (Exception sqlexp) {

			}
		}
		return employee;
	}
}
