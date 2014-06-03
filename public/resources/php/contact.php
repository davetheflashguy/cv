<?php
  $EmailFrom = "dave@davecollierconsulting.com";
  $EmailTo = "dave@davecollier.io";
  $Subject = "Web Contact Form Submission";
  $Name = Trim(stripslashes($_POST['contactName']));
  $Email = Trim(stripslashes($_POST['contactEmail']));
  $Message = Trim(stripslashes($_POST['contactMessage']));

  // prepare email body text
  $Body = "";
  $Body .= "Name: ";
  $Body .= $Name;
  $Body .= "\n";
  $Body .= "Email: ";
  $Body .= $Email;
  $Body .= "\n";
  $Body .= "Message: ";
  $Body .= $Message;
  $Body .= "\n";

  // send email
  $success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

  // redirect to success page
  if ($success){
    $response = array("success" => "true");
    $json = json_encode($response);
    echo $json;
  }
  else{
    $response = array("success" => "false");
    $json = json_encode($response);
    echo $json;
  }
?>
