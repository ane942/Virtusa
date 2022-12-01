package com.example.demo;

//import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	
		
		private TigerHandler handler = null;
    
    public DemoApplication(TigerHandler handler) {
        this.handler = handler;
    }
    
    public void process() {
        handler.handle();
    }
	public static void main(String[] args) {
        TigerHelper helper = new TigerHelper();
        TigerHandler handler = new TigerHandler(helper);
        DemoApplication service = new DemoApplication(handler);
        service.process();    

}}
