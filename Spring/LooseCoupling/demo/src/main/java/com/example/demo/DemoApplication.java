package com.example.demo;

//import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	
		
	private AnimalHandler handler = null;    //coded to an interface
    
    public DemoApplication(AnimalHandler handler) {
        this.handler = handler;
    }
    
    public void process() {
        handler.handle();
    }
 
    public static void main(String[] args) {
        AnimalHelper helper = new LionHelper();
        AnimalHandler handler = new TigerHandler(helper);
        DemoApplication service = new DemoApplication(handler);
        service.process();    
    }}
