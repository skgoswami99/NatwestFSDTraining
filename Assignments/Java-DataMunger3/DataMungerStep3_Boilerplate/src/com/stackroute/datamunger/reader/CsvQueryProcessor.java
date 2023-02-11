package com.stackroute.datamunger.reader;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;

import com.stackroute.datamunger.query.DataTypeDefinitions;
import com.stackroute.datamunger.query.Header;

public class CsvQueryProcessor extends QueryProcessingEngine {

	// Parameterized constructor to initialize filename
		String Filename;
//	public CsvQueryProcessor(String fileName) throws FileNotFoundException {
////		String filename = new filename();
//
//	}

	public CsvQueryProcessor(String filename) throws FileNotFoundException {
		Filename = filename;
		FileReader readfile = new FileReader(Filename);
		BufferedReader bufread = new BufferedReader(readfile);
	}

	/*
	 * Implementation of getHeader() method. We will have to extract the headers
	 * from the first line of the file.
	 * Note: Return type of the method will be Header
	 */
	
	@Override
	public Header getHeader() throws IOException {

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
	 * getDataRow() method will be used in the upcoming assignments
	 */
	
	@Override
	public void getDataRow() {

	}

	/*
	 * Implementation of getColumnType() method. To find out the data types, we will
	 * read the first line from the file and extract the field values from it. If a
	 * specific field value can be converted to Integer, the data type of that field
	 * will contain "java.lang.Integer", otherwise if it can be converted to Double,
	 * then the data type of that field will contain "java.lang.Double", otherwise,
	 * the field is to be treated as String. 
	 * Note: Return Type of the method will be DataTypeDefinitions
	 */
	
	@Override
	public DataTypeDefinitions getColumnType() throws IOException {
//		FileReader readfile;
//		try { readfile = new FileReader(Filename);
//
//		}catch (FileNotFoundException e){
//			 readfile = new FileReader("data/ipl.csv");
//		}

		// giving the file name manually instead of using Filename variable as giving FileNotFoundException
		// else we could use Filename too however we had to use try & catch the exception to divert to the correct file.
			FileReader readfile = new FileReader(Filename);
			BufferedReader bufread = new BufferedReader(readfile);
			//skipping line 1 which is a heading and already used in header
			String line = bufread.readLine();

			String[] line1 = bufread.readLine().split(",", line.length());
//		System.out.println(Arrays.toString(line1));

			String strOfDataTyp = "";

			for (int i = 0; i < line1.length; i++) {

				if (!line1[i].matches("[\\d]+")) {

					strOfDataTyp += ("java.lang.String" + " ");

				} else {
					strOfDataTyp += "java.lang.Integer" + " ";
				}
//			System.out.println(strOfDataTyp);

			}
			DataTypeDefinitions datatype = new DataTypeDefinitions();
			datatype.setDataTypes(strOfDataTyp.split(" "));

			return datatype;

	}

}
