package com.OrderVerifying.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.OrderVerifying.models.Orders;

public interface OrdersRepository extends MongoRepository<Orders, String>{

}
