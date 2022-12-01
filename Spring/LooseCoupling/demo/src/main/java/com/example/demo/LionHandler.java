package com.example.demo;

public class LionHandler implements AnimalHandler {
    private AnimalHelper helper;    //coded to an interface
 
    public LionHandler(AnimalHelper helper) {     //coded to an interface
        this.helper = helper;
    }
 
    @Override
    public void handle() {
        System.out.println("LionHandler  in  action");
        helper.help();
    }
}