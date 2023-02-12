package com.nat.xml;

public class Address
{
    private int addId;
    private String streetNo;
    private String city;
    private String country;

    public Address(int addId, String streetNo, String city, String country) {
        this.addId = addId;
        this.streetNo = streetNo;
        this.city = city;
        this.country = country;
    }

    public int getAddId() {
        return addId;
    }

    public void setAddId(int addId) {
        this.addId = addId;
    }

    public String getStreetNo() {
        return streetNo;
    }

    public void setStreetNo(String streetNo) {
        this.streetNo = streetNo;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Override
    public String toString() {
        return "Address{" +
                "addId=" + addId +
                ", streetNo='" + streetNo + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                '}';
    }
}
