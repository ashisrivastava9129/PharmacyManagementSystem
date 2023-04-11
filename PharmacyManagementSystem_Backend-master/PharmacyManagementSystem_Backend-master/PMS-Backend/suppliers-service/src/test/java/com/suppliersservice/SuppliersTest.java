package com.suppliersservice;

//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.when;
//
//import java.util.ArrayList;
//import java.util.List;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.suppliersservice.controller.SupplierController;
//import com.suppliersservice.model.suppliers;
//import com.suppliersservice.repository.suppliersRepository;

//@SpringBootTest(classes = {SuppliersTest.class})
public class SuppliersTest {

//	@Mock         //use to simulate the behavior of a real object, in this case our repository
//	private suppliersRepository suppliersRepository;
//
//	@InjectMocks   //creates an instance of the class and injects the mock 
//	private SupplierController supplierController;
//
//	public List<suppliers> mySuppliers;
//
//	//test cases for add suppliers
//	@Test          //tells junit that the method to which this annotation is                      
//	public void test_addSuppliers() {
//		//add our own sample data
//		suppliers suppliers = new suppliers("1", "mankindpharma", "mankind@gmail.com");
//		//mock the external dependency
//		when(suppliersRepository.save(suppliers)).thenReturn(suppliers);
//		//Assert that expected and actual are equal. 
//		assertEquals(suppliers, supplierController.postSuppliers(suppliers));
//	}
//	
//
//	//test cases for delete suppliers
//	@Test
//	public void test_deleteSuppliers() {
//		//add our own sample data
//		suppliers suppliers = new suppliers("1", "mankindpharma", "mankind@gmail.com");
//		//fetch suppliers id and save it to suppliersId
//		long suppliersId = suppliers.getId();
//		//delete suppliers by suppliersId
//		supplierController.deleteSuppliers(suppliersId);
//		//Verifies certain behavior happened at least once / exact number of times / never
//		verify(suppliersRepository, times(1)).deleteById(suppliersId);
//
//	}
//
//	//test cases for update suppliers
//	@Test
//	public void test_updateSuppliers() {
//		////add our own sample data
//		suppliers suppliers = new suppliers("1", "mankindpharma", "mankind@gmail.com");
//		String suppliersId = "1";
//		//mock the external dependency
//		when(suppliersRepository.getById(suppliersId)).thenReturn(suppliers);
//		when(supplierController.updateSuppliers(suppliersId, suppliers)).thenReturn(suppliers);
//
//		suppliers suppliersnew = supplierController.updateSuppliers(suppliersId, suppliers);
//		////Assert that expected and actual are equal. 
//		suppliers.setId(suppliersId);
//		assertEquals(suppliersId, suppliersnew.getId());
//		assertEquals("mankindpharma", suppliersnew.getSuppliersName());
//		assertEquals("mankind@gmail.com", suppliersnew.getSuppliersEmail());
//		assertEquals(suppliers, supplierController.updateSuppliers(suppliersId, suppliers));
//	}
//
//	
//	@Test
//	public void test_getAllSuppliers() {
//		List<suppliers> mySuppliers= new ArrayList<suppliers>();
//		mySuppliers.add(new suppliers("1","mankind","mankind"));
//		mySuppliers.add(new suppliers("1","mankind","mankind"));
//		when(suppliersRepository.findAll()).thenReturn(mySuppliers);
//		assertEquals(2,supplierController.getAllSuppliers().size());
//	}
}
