<?php


    if(isset($_POST['sendMsg'])){ 
		function CheckCaptcha($userResponse) {
        $fields_string = '';
        $fields = array(
            'secret' => '****** YOUR SECRET KEY goes here ******',
            'response' => $userResponse
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);
        $res = curl_exec($ch);
        curl_close($ch);
        return json_decode($res, true);
    }

    // Call the function CheckCaptcha
    $result = CheckCaptcha($_POST['g-recaptcha-response']);
 	
	if ($result['success']) {
        //If the user has checked the Captcha box
    
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$email=$_POST['email'];
		$msg= $_POST['message'];
		$message= '
			<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
			<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<title>Enquiry E-mail</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</head>
			<body style="margin: 0; padding: 0; background-color:#f2f2f2;">
			<table border="0" cellpadding="0" cellspacing="0" width="100%">	
			<tr>
			<td style="padding: 10px 0 30px 0;">
			<table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; border: 1px solid #cccccc; border-collapse: collapse;">
			<tr>
			<td align="center" bgcolor="#ffbc49" style="line-height: 0; font-size: 1em;" height="10">&nbsp;
			<img src="https://scontent.fbom4-1.fna.fbcdn.net/v/t1.0-9/29542028_156631498347630_6176484019310080081_n.png?_nc_cat=0&oh=9414b9f10f0ac53d3b9aaae810324db0&oe=5B3BFCFA" style="width:80%; height:auto;" alt="Company Logo">
			</td>
			</tr>
			<tr>
			<td align="center" bgcolor="#ffbc49" style="font-variant:small-caps; padding: 40px 0 30px 0; color: #ffffff; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
			The Trippy Frog
			</td>
			</tr>
			<tr>
			<td bgcolor="#fbfbfb" style="padding: 40px 30px 40px 30px;">
			<table border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
			<td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px; padding-bottom:20px;">
			<b>Enquiry E-mail</b>
			</td>
			</tr>
			<tr>
			<td>
			<table border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
			<td width="260" valign="top">
			<table border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
			<b>Name</b>
			</td>
			</tr>
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
			<b>Mobile</b>
			</td>
			</tr>
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
			<b>E-mail</b>
			</td>
			</tr>
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
			<b>Message</b>
			</td>
			</tr>
			</table>
			</td>
			<td style="font-size: 0; line-height: 0;" width="20">
			&nbsp;
			</td>
			<td width="260" valign="top">
			<table border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
			'.$name.'
			</td>
			</tr>
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
			'.$phone.'
			</td>
			</tr>
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
			'.$email.'
			</td>
			</tr>
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
			'.$msg.'
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>      
			<tr>
			<td style="padding: 20px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 24px; line-height: 40px;">
			<a style="text-transform:uppercase; font-weight: bold; text-decoration:underline; color:#4285f4;" href="http://trippyfrog.com">Go To Website</a>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</body>
			</html>';


		$admin_email='thetrippyfrog@gmail.com';
		$subject='Enquiry : The Trippy Frog : New Message Received From '.$name;
		 Thank You
		$thanks = file_get_contents("thanks.html");
		$somethingWrong = file_get_contents("404.html");


		$headers = array(
		  'From: "The Trippy Frog - Website" <'.$email.'>' ,
		  'Reply-To: "'.$name.'" <'.$email.'>' ,
		  'X-Mailer: PHP/' . phpversion() ,
		  'MIME-Version: 1.0' ,
		  'Content-type: text/html; charset=iso-8859-1' ,
		);
		$headers = implode( "\r\n" , $headers );

		if(mail($admin_email , $subject, $message, $headers)){
			echo $thanks;
		}	
		else{
			echo $somethingWrong;
		}
		
	} else {
        // If the CAPTCHA box wasn't checked
       echo '<script>alert("Error Message");</script>';
    }
		
    }
?>