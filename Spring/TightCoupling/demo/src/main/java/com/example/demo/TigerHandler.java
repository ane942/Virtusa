package com.example.demo;

public class TigerHandler  {
    private TigerHelper helper;
    
    public TigerHandler(TigerHelper helper) {
        this.helper = helper;
    }
    
    public void handle() {
        System.out.println("TigerHandler  in  action");
        helper.help();
    }    
}
