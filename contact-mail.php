<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
        $phone=$_POST['phone'];
        $pick_loc = $_POST['pick-location'];
        $drop_loc = $_POST['drp-location'];
		$msg=$_POST['msg'];
		$sub=$_POST['for'];

		$to='contactus@gignatichomeshifting.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
        $message="Name :".$name."\n"."Phone No. :".$phone."\n"."Email id: ".$email."\n"."Pick Up Location: ".$pick_loc."\n"
        ."Drop Location: ".$drop_loc."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
			
		}
		else{
			echo "Something went wrong!";
		}
	}
?>