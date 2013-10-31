<?php require_once "controllers/config.php";?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
        <title>Vote Bkk Policy</title>
        <link rel="stylesheet" type="text/css" href="css/VoteCSS.css" />
        
        <script type="text/javascript">
		 	var service_path = '<?php echo $url_path;?>' + 'freehap.com/vote_bkk_policy/controllers';
		 	//var service_path = '/vote_policy/controllers';
		</script>
		
        <script src="js/jquery-1.6.3.min.js"></script>
        <script src="js/common.js"></script>
        <script src="js/vote_policy.js"></script>
        
        <script type="text/javascript">
        	var vote = new vote();
        	
        	/*$(document).ready(function(){
        		vote.reset();
        	});*/
        </script>
        	
    </head>
    <body onload="">
    	<div id="fb-root"></div>
        <script>
            // Load the SDK Asynchronously
            (function(d){
                var js, id = 'facebook-jssdk';
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement('script');
                js.id = id;
                js.async = true;
                js.src = "//connect.facebook.net/en_US/all.js";
                d.getElementsByTagName('head')[0].appendChild(js);
            }(document));
        </script>
        <div id="content" class="main_content" style="display:none">
        	<!-- Blursheet -->
            <div id="blursheet" style="display:none"></div>
            
            <!-- Video -->
        	<div id="video_page" class="video_page" style="display:none">	
        		<div id="button_close_video" class="button_close_video">&nbsp;</div>
        		<iframe id="video" width="500" height="350" src="" frameborder="0" allowfullscreen></iframe>
        	</div>
        	
        	<!-- Policy -->
            <div id="policy_page" class="policy_page" style="display:none">
            	<div id="button_close_policy" class="button_close_policy">&nbsp;</div>
            </div>
            
        	<!-- Alert Box -->
            <div id="box_alert" style="display:none">
                <div id="box_alert_msg" class="msg"></div>
                <div id="button_ok_alert" class="button"></div>
            </div>
            
        	<!-- First -->
        	<div id="first_page" class="first_page">
            	<div id="button_start" class="button_start">&nbsp;</div>
        	</div>
        	
        	<!-- Choice -->
        	<div id="choice_page" class="choice_page" style="display:none">	
        		<div id="button_video_1" class="button_video v1">&nbsp;</div>
        		<div id="button_video_2" class="button_video v2">&nbsp;</div>
        		<div id="button_video_3" class="button_video v3">&nbsp;</div>
        		<div id="button_video_4" class="button_video v4">&nbsp;</div>
        		<div id="button_video_5" class="button_video v5">&nbsp;</div>
        		<div id="button_video_6" class="button_video v6">&nbsp;</div>
        		
        		<div id="button_read_more_1" class="button_read_more r1">&nbsp;</div>
        		<div id="button_read_more_2" class="button_read_more r2">&nbsp;</div>
        		<div id="button_read_more_3" class="button_read_more r3">&nbsp;</div>
        		<div id="button_read_more_4" class="button_read_more r4">&nbsp;</div>
        		<div id="button_read_more_5" class="button_read_more r5">&nbsp;</div>
        		<div id="button_read_more_6" class="button_read_more r6">&nbsp;</div>
        		
        		<div id="click_choice_1" class="click_choice c1"></div>
        		<div id="click_choice_2" class="click_choice c2"></div>
        		<div id="click_choice_3" class="click_choice c3"></div>
        		<div id="click_choice_4" class="click_choice c4"></div>
        		<div id="click_choice_5" class="click_choice c5"></div>
        		<div id="click_choice_6" class="click_choice c6"></div>
        		
        		<div id="button_ok" class="button_ok">&nbsp;</div>
        	</div>
        	
        	<!-- Invite -->
            <div id="invite_page" class="invite_page" style="display:none">	
            	<div id="button_invite" class="button_invite">&nbsp;</div>
        	</div>
        	
        </div>      
           
    </body>
</html>