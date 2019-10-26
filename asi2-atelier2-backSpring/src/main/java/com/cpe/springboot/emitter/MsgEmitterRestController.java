package com.cpe.springboot.emitter;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cpe.springboot.user.model.UserModel;
import com.cpe.springboot.emitter.controller.BusService;
@CrossOrigin

@RestController
public class MsgEmitterRestController {
	 
	@Autowired
	    BusService busService;

	    @RequestMapping(method = RequestMethod.POST, value = "/senduser")
	    public boolean sendInform(@RequestBody UserModel user) {
	        busService.sendUser(user);
	        return true;
	    }

	    
	    
	    @RequestMapping("/usersList")
		private boolean getAllUsers() {
			 busService.getAllUsers();
			 return true;
		}
	    
	    
	    
	    @RequestMapping(method = RequestMethod.POST, value = "/senduser/{busName}")
	    public boolean sendInform(@RequestBody UserModel user, @PathVariable String busName) {
	        busService.sendUser(user,busName);
	        return true;
	    }

}



