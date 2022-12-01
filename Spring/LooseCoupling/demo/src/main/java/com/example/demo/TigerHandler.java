package com.example.demo;

public class TigerHandler implements AnimalHandler {
    private AnimalHelper helper;  //coded to an interface
    
    public TigerHandler(AnimalHelper helper) {    //coded to an interface
        this.helper = helper;
    }
    
    public void handle() {
        System.out.println("TigerHandler  in  action");
        helper.help();
    }    
}
