package com.stackroute.datamunger.reader;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.FileReader;
import java.io.BufferedReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.stackroute.datamunger.query.DataTypeDefinitions;
import com.stackroute.datamunger.query.Header;

public class CsvQueryProcessor extends QueryProcessingEngine {

	/*
	 * parameterized constructor to initialize filename. As you are trying to
	 * perform file reading, hence you need to be ready to handle the IO Exceptions.
	 */
	String Filename;

	public CsvQueryProcessor(String filename) throws FileNotFoundException {

		Filename = filename;
		FileReader fileread = new FileReader(Filename);
		BufferedReader bufread = new BufferedReader(fileread);
	}


	/*
	 * implementation of getHeader() method. We will have to extract the headers
	 * from the first line of the file.
	 */
	@Override
	public Header getHeader() throws IOException {
		// TODO Auto-generated method stub
		// read the first line
		FileReader readfile = new FileReader(Filename);
		BufferedReader bufread = new BufferedReader(readfile);
		// populate the header object with the String array containing the header names
		String[] header = bufread.readLine().split(",");
//		System.out.println(Arrays.toString(header));
		// constructor for Header so that We can use setter to set the data in header.
		Header header1 = new Header();
		header1.setHeaders(header);
		return header1;
	}
	

	/**
	 * This method will be used in the upcoming assignments
	 */
	@Override
	public void getDataRow() {

	}

	/*
	 * implementation of getColumnType() method. To find out the data types, we will
	 * read the first line from the file and extract the field values from it. In
	 * the previous assignment, we have tried to convert a specific field value to
	 * Integer or Double. However, in this assignment, we are going to use Regular
	 * Expression to find the appropriate data type of a field. Integers: should
	 * contain only digits without decimal point Double: should contain digits as
	 * well as decimal point Date: Dates can be written in many formats in the CSV
	 * file. However, in this assignment,we will test for the following date
	 * formats('dd/mm/yyyy',
	 * 'mm/dd/yyyy','dd-mon-yy','dd-mon-yyyy','dd-month-yy','dd-month-yyyy','yyyy-mm-dd')
	 */
	@Override
	public DataTypeDefinitions getColumnType() throws IOException {
		// TODO Auto-generated method stub

		FileReader readfile = new FileReader(Filename);
		BufferedReader bufread = new BufferedReader(readfile);
		//skipping line 1 which is a heading and already used in header
		String line = bufread.readLine();

		String[] line1 = bufread.readLine().split(",", line.length());
//		System.out.println(Arrays.toString(line1));

		for (int i = 0; i < line1.length; i++) {

			// if [i] position matches with a digit then enter in first condition.
			// located digit was in string array so parsing that digit to integer so that it can become integer.
			// thn storing the value of parsed string at the same place using line1[i]
			// used (Object) as .getClass method wasnt directly working on data.
			if (line1[i].matches("[\\d]+")) {
				int data = Integer.parseInt(line1[i]);
//				System.out.println(data);
				line1[i] = (((Object)data).getClass().getName());

				}

				// [i] index matches with digits with decimal value then enter in 2nd condition & parsing to double.
				else if (line1[i].matches("[\\d*[.]\\d+]")) {
				Double data = Double.parseDouble(line1[i]);
				line1[i] = (((Object)data).getClass().getName());
				}

				// if [i] position matches with given date regex then enter in 3rd condition.
				// parsing date to an actual Date-Type after initiating the Date Object and using SimpleDateFormat.
				// it wasn't supporting the initiation hence offered to create try catch which then created automatically.
				else if (line1[i].matches("\\d{4}[-]\\d{2}[-]\\d{2}")) {
					Date data = null;
					try {
						data = new SimpleDateFormat("yyyy-mm-dd").parse(line1[i]);
						}
					catch (ParseException e) {
						throw new RuntimeException(e);
						}
	//				System.out.println(data);
					line1[i] = (((Object)data).getClass().getName());
				}
				// the last position in array was blank after comma and was giving error that it's classname must
				// be java.lang.object so have to initialise Object type of the blank index too
				else if (line1[i].matches("")) {
				Object data = new Object();
//				System.out.println("data");
				line1[i] = (data.getClass().getName());
				}

				else {
				line1[i] = line1[i].getClass().getName();
				}

		}
//		System.out.println(strOfDataTyp);

		DataTypeDefinitions datatype = new DataTypeDefinitions();
		datatype.setDataTypes(line1);

		return datatype;

	}
		// checking for Integer
		
		// checking for floating point numbers
				
		// checking for date format dd/mm/yyyy
		
		// checking for date format mm/dd/yyyy
		
		// checking for date format dd-mon-yy
		
		// checking for date format dd-mon-yyyy
		
		// checking for date format dd-month-yy
		
		// checking for date format dd-month-yyyy
		
		// checking for date format yyyy-mm-dd

}
