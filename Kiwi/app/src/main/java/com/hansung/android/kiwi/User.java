package com.hansung.android.kiwi;

public class User {
    String id;
    String email;
    String password;
    String license_num;
    String license_lssued;
    String license_expiration;




    public User (String id, String email, String password, String license_num, String license_lssued, String license_expiration) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.license_num = license_num;
        this.license_lssued = license_lssued;
        this.license_expiration = license_expiration;


    }

//    public String toString()
//    {
//        return String.format("ID = %s \n email = %s \n password = %s \n license_num = %s " +
//                "\n license_lssued = %s \n license_expiration = %s",id,email,password,license_num,license_lssued,license_expiration);
//    }

    public String getId(){
        return id;
    }

    public String getEmail(){
        return  email;
    }

    public String getPassword() {
        return  password;
    }

    public String getLicense_num() {
        return license_num;
    }

    public String getLicense_lssued() {
        return license_lssued;
    }

    public String getLicense_expiration() {
        return license_expiration;
    }

}
