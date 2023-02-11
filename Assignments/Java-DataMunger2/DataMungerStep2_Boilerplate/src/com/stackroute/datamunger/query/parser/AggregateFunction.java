package com.stackroute.datamunger.query.parser;

/* This class is used for storing name of field, aggregate function for 
 * each aggregate function
 * generate getter and setter for this class,
 * Also override toString method
 * */

public class AggregateFunction {

	// Write logic for constructor
	private String field;
	private String function;

	public AggregateFunction(String field, String function) {
	this.field = field;
	this.function = function;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getFunction() {
		return function;
	}

	public void setFunction(String function) {
		this.function = function;
	}

	@Override
	public String toString() {
		return "AggregateFunction{" +
				"field='" + field + '\'' +
				", function='" + function + '\'' +
				'}';
	}
}