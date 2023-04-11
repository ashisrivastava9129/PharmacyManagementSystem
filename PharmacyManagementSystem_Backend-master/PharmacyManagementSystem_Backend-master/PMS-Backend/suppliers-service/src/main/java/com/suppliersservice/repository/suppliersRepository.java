package com.suppliersservice.repository;


import java.util.Collection;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.suppliersservice.model.suppliers;

public interface suppliersRepository extends MongoRepository<suppliers, Long> {

	suppliers save(suppliers suppliers);

	List<suppliers> findAll();

	void deleteById(String sid);

	suppliers getById(String id);

}
