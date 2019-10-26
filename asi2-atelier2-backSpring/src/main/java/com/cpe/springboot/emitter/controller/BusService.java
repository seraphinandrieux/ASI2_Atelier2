package com.cpe.springboot.emitter.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import com.cpe.springboot.user.controller.UserRepository;
import com.cpe.springboot.user.model.UserModel;
import com.cpe.springboot.user.controller.UserService;;

@Service
public class BusService {
	
	@Autowired
	JmsTemplate jmsTemplate;
	@Autowired
	private UserRepository userRepository ;
	
	
	
	
	    
	    public void sendUser(UserModel user) {
	        System.out.println("[BUSSERVICE] SEND String user=["+user+"]");
	        jmsTemplate.convertAndSend("RESULT_BUS_MNG",user);
	    }
	    
	    
	    
		public void  getAllUsers() {
			List<UserModel> userList = new ArrayList<>();
			userRepository.findAll().forEach(userList::add);
	        System.out.println("[BUSSERVICE] SEND String user=["+userList+"]");
	        System.out.println("[BUSSERVICE] SEND String user=["+userList.toString()+"]");
	        jmsTemplate.convertAndSend("RESULT_BUS_MNG",userList.toString());
	        System.out.println("BUSSERVICE SENT");
		}
		

	    public void sendUser(UserModel user, String busName) {
	        System.out.println("[BUSSERVICE] SEND String user=["+user+"] to Bus=["+user+"]");
	        jmsTemplate.convertAndSend(busName,user);
	    }

}
