<?php
/**
 * Vote
 * @access public
 * @author Mr.GRITSAKORN  VULLIYAMATEE <raider_ex@live.com>
 * @copyright Copyright (c) 2012, Freehap CO.,LTD.
 * @package Service Human Fence
 * @property string $db_options option of Pear database connection
 */

Class Vote{
     
	 /**	 
	 * เพิ่มข้อมูล
	 * @param string $fhid รหัส  fhid,int $visitcount จำนวนการเข้าใช้ระบบ;
	 * @return -
	 * @access public
	 */	
	 function addData($fbid,$name,$email,$choice_vote){
	 	    require_once "dbi.class.php";
			$db = new dbi();
			
			$arr = array();
			
			$db->clear();
			$db->dict["fbid"] = $fbid;
	        $db->dict["name"] = $name;
	        $db->dict["email"] = $email;
			$db->dict["createdate"] = date("Y-m-d H:i:s");
	   
			$db->table = "profile";

        	$id = $db->insertiden();
			
			$db->close();
			
			$this->postData($id,$choice_vote);
	 }
	 
	 /**	 
	 * เพิ่มข้อมูล
	 * @param string $fhid รหัส  fhid,int $visitcount จำนวนการเข้าใช้ระบบ;
	 * @return -
	 * @access public
	 */	
	 function postData($id,$choice_vote){
	 		require_once "dbi.class.php";
			$db = new dbi();
				
	 		$db->clear();
			$db->dict["id"] = $id;
	        $db->dict["string_choice"] = $choice_vote;
	   
			$db->table = "vote_policy";

        	$db->insert();
			
			$db->close();
	 }
}
?>
