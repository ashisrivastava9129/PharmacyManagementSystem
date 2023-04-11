package com.PlaceOrderMicroservice;


import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestClassOrder;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.PlaceOrderMicroservice.Controller.OrderController;

import com.PlaceOrderMicroservice.Model.Order;

import com.PlaceOrderMicroservice.Repository.OrderRepository;


@SpringBootTest(classes= {PlaceOrderTest.class})  // Specify the class as Test class
public class PlaceOrderTest {
	
	 
	
//	@Mock // mocking the orderRepository (helps in minimizing repeated Mock Objects)
//	private OrderRepository orderRepository;
//	
//	
//	
//	@InjectMocks // used to create class instance that need to be tested in test class
//	private OrderController orderController;
//	
//	
//	  @Test // run class as test case
//	public void test_addOrder() {
//		 
//		 // Created Order Object
//		 Order order = new Order("1","Paracetamol",12,"Near ABC Building,Bhart Apartment House No 1","9359240192",200);
//		 
//		 when(orderRepository.save(order)).thenReturn(order); // Use it when you want the mock to return particular value when particular method is called. 
//		 assertEquals(order,orderController.addOrder(order)); // used to check if two objects is equally defined or not
//		 
//	}
//	
//		@Test 
//		public void test_updateOrder() {
//			
//			 
//		Order order = new Order("1","Paracetamol",12,"Near ABC Building,Bhart Apartment House No 1","9359240192",200);
//		String OrderId="0";
//		
//		when(orderRepository.getById(OrderId)).thenReturn(order);
//		when(orderController.updateOrder(OrderId,order)).thenReturn(order);
//		
//		//Created ordernew Object 
//		Order ordernew = orderController.updateOrder(OrderId, order);
//		
//		assertEquals(OrderId,ordernew.getId()); // used to check if two objects is equally defined or not
//		assertEquals(10,ordernew.getQuantity()); // used to check if two objects is equally defined or not
//		assertEquals(200,ordernew.getTotalPrice()); // used to check if two objects is equally defined or not
//		
//		
//		assertEquals(order,orderController.updateOrder(OrderId, order)); // used to check if two objects is equally defined or not
//		
//	}
//	
//		@Test
//		public void test_deleteOrder() {
//			 Order order = new Order("1","Paracetamol",12,"Near ABC Building,Bhart Apartment House No 1","9359240192",200);
//	         String orderId=order.getId(); // get OrderId and store in orderId
//	         orderController.deleteOrder(orderId); // fetch class and  delete Order By id
//	         verify(orderRepository,times(1)).deleteById(orderId);//check if a certain method of a mock object has been called by specific number of times
//		
//	}
//	
	
	
	
}



























/*@Mock
private DrugRepository drugRepository;

@InjectMocks
private DrugController drugController;


@Test
public void test_getAllDrug() {
	
	List<Drug> drug = new ArrayList<Drug>();
	
	drug.add(new Drug(1,"Paracetamol",10));
	drug.add(new Drug(2,"Ativan",50));
	drug.add(new Drug(3,"Adderall",100));
	
	when(drugRepository.findAll()).thenReturn(drug);
     assertEquals(3,drugController.getAllDrug().size());

}*/