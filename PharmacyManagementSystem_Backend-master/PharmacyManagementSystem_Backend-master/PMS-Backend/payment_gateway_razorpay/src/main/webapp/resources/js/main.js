//first request to server to create order

const paymentStart=()=>{
	console.log("payment started..");
	let amount = $("#paymentField").val();
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
		url:"/user/create_order",
		data:JSON.stringify({amount:amount, info:'order_request'}),
		contentType:"application/json",
		type:"POST",
		dataType:"json",
		success:function(response){
			//invoked when success
			console.log(response);
			
			if(response.status == "created"){
				//open payment form
				let options={
					key:'rzp_test_EnaX7613g3EwlW',
					amount:response.amount,
					currency:'INR',
					name:"Pharmacy",
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
					address:"Learn Code with",					
				},
				theme:{
					color: "#3399cc",
				},
			};
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