package com.main.controller;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.razorpay.*;

@Controller
public class MyController {
	
	@RequestMapping("/home")
	public ModelAndView home() {
		System.out.println("function called");
		return new ModelAndView("welcome");
	}
	
	// creating order for payment
		@PostMapping("/create_order")
		@ResponseBody
		public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
			System.out.println("Hey order fun");
			System.out.println(data);
			int amt = Integer.parseInt(data.get("amount").toString());
			var client = new RazorpayClient("rzp_test_5dnVFcmzOCbSMH", "t98PKyxfjCfJGWXbsxaZqlh5");
			JSONObject options = new JSONObject();
			options.put("amount", amt * 100);
			options.put("currency", "INR");
			options.put("receipt", "txn_22025");

			// creating new order
			Order order = client.Orders.create(options);
			System.out.println("order->");
			System.out.println(order);
			System.out.println("<-");
	

			// if you want you can save this to your data
			return order.toString();
		}
}
