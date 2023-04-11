package com.PlaceOrderMicroservice.Repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.PlaceOrderMicroservice.Model.Order;


@Repository
public interface OrderRepository extends MongoRepository<Order, String>{

	@Query("{userId:'?0'}")
	List<Order> findByUserId(String uid);

	

	
}
