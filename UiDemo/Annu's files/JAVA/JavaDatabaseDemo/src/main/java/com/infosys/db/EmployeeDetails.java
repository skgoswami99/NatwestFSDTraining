package com.infosys.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class EmployeeDetails 
{
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DB_URL ="jdbc:mysql://localhost:3306/OrganizationDB";
	static final String USER="root";
	static final String PASS="mysql@2020";
		
	public static void main(String[] args) throws SQLException 
	{
		Connection con = null;
		Statement stmt = null;
		
		try
		{
			System.out.println("Start ...");
			Class.forName(JDBC_DRIVER);

			System.out.println("Registered Driver ...");
			
			con = DriverManager.getConnection(DB_URL,USER,PASS);
			
			System.out.println("Connection Establised ...");
			stmt = con.createStatement();
			
			String sqlQuery = "Select * From Employee where empId=101";
			
			ResultSet rst = stmt.executeQuery(sqlQuery);
			
			System.out.println("Query Executed ...");
			
			while(rst.next())
			{
				int empId = rst.getInt(1);
				String empName = rst.getString(2);
				int age = rst.getInt(3);
				
				System.out.println(empId+"   "+empName+"  "+age);
			}
			
			con.close();
		}
		catch(ClassNotFoundException cnfObj)
		{
			System.out.println(cnfObj.getMessage());
		}
		catch(SQLException sqeobj)
		{
			System.out.println(sqeobj.getMessage());			
		}
		catch(Exception eobj)
		{
			System.out.println(eobj.getMessage());
		}
		finally
		{
			try
			{
				if(con != null)
				{
					con.close();
				}
			}
			catch(Exception ee)
			{
				
			}
				
		}
	}
}
