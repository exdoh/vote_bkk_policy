<?php 

require_once "config.php";
require_once LIB_BASE."vote.class.php";

$v = new vote();
/*****test*****/
//$mode = 'display_post';
//$fhid = '3';
//$lat = '13.8569991624617';
//$long = '100.6189623206482';
//$fbplaceid = 132901770097049;
/*****test*****/

$mode = $_POST["mode"];

switch($mode){
	case "add" : {
		$fbid = $_POST["fbid"];		
		$name = $_POST["name"];	
		$email = $_POST["email"];
		$choice_vote = $_POST["choice_vote"];
		
		$v->addData($fbid,$name,$email,$choice_vote);
	}
	break;
}
	
	
?>