<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
<head>
<style>
	h1{color:red;}
</style>

<script type="text/javascript">
//first request to server to create order

const paymentStart=()=>{
	console.log("payment started..");
	let amount = $("#paymentField").val();
	//let amount = 1000;
	console.log(amount);
	if(amount =="" || amount ==null){
		//alert("amuont is required");
		swal("Failed !!","Oops payment failed!","error");
		return;
	}
	
	//code..
	// we will use ajax to send request to server to create order - jquery
	
	$.ajax(
	{
		url:"/create_order",
		data:JSON.stringify({amount:amount, info:'order_request'}),
		contentType:"application/json",
		type:"POST",
		dataType:"json",
		success:function(response){
			//invoked when success
			console.log(response);
			console.log("*****");
			if(response.status == "created"){
				//open payment form
				console.log("*&&&&*");
				let options={
					key:'rzp_test_5dnVFcmzOCbSMH',
					amount:response.amount,
					currency:'INR',
					name:"Demo Payment Gateway by Ashi",
					description: "Donation",
					image:"",
					order_id:response.id,
						handler:function(response){
1							
						
					console.log(response.razorpay_payment_id);
					 console.log(response.razorpay_order_id);
					  console.log(response.razorpay_signature),
					console.log("Payment Sccessfull")
					swal("Good job1","congrats !! Payment Successful","success");
				
						},
						
					prefill: { 
						name: "",
						 email: "", 
						 contact:""
				},
				notes:{
					address:"unknow",					
				},
				theme:{
					color: "#3399cc",
				},
			};
				console.log("*&&--&&*");
			let rzp = new Razorpay(options);
			
			rzp.on('payment.failed', function (response){
				 console.log(response.error.code);
				  console.log(response.error.description); 
				  console.log(response.error.source); 
				  console.log(response.error.step); 
				  console.log(response.error.reason);
				   console.log(response.error.metadata.order_id); 
				   console.log(response.error.metadata.payment_id); 
				   //alert("")
				   swal("Failed !!","Oops payment failed!","error");
				   
				   });
				   rzp.open()
				
		}},
		error:function(error){
			//invoked when error
			console.log(error)
			alert("something went wrong !!")
		}
	}
	) 
	
}
</script>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<h1>welcome</h1>

 <h3 class="my-3">Donate Us</h3>
				<input type="text" id="paymentField" class="form-control my-2" placeholder="Enter amount here" />
				
				<div class="container ">
					<button class="btn btn-success " onclick="paymentStart()">Pay</button>
				</div>
				
		<script src="https://checkout.razorpay.com/v1/checkout.js"></script>		
 <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
 
</body>
</html>