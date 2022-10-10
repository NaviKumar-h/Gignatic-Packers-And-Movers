<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
        $phone=$_POST['phone'];
        $phone2=$_POST['phone2'];
		$msg=$_POST['msg'];
		$sub=$_POST['sub'];

		$to='contactus@gignatichomeshifting.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
        $message="Name :".$name."\n"."Phone No. :".$phone."\n"."Alternative Phone No. : ".$phone2."\n"
        ."Email id: ".$email."\n"."Subject : ".$sub."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
			
		}
		else{
			echo "Something went wrong!";
		}
	}
?>