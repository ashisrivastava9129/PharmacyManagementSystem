package com.OrderVerifying.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.OrderVerifying.models.Orders;
import com.OrderVerifying.repo.OrdersRepository;

@Service
public class OrderService {
	@Autowired
	private OrdersRepository orderRepository;
	//Adding the order
	public Orders addOrder(Orders order) throws Exception {
		Optional<Orders> order1= orderRepository.findById(order.getId());
		if(!order1.isPresent())

			return orderRepository.save(order);
		
		else {
			throw new Exception("Order Already Exist");
	}
	}
	//viewing the list of orders
		public List<Orders> getOrder() {
			return orderRepository.findAll();
		}

}
