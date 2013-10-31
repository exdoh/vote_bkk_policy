function vote()
{
   //////////FB//////////
   this.appID = 572356212792224;
   this.scope_arr = ["publish_stream","email"];
   this.scope_string = 'publish_stream,email';
   this.accessToken = '';
   
   //////////FB//////////
   
   this.user_fbid = 0;
   this.user_fbname = 0;
   this.user_email = '';
   
   this.choice_vote = [];
   this.user_choice = ''
}

////////////////////////FB//////////////////////////
window.fbAsyncInit = function() {
    FB.init({
        appId  : vote.appID,
        status : true, // check login status
        cookie : true, // enable cookies to allow the server to access the session
        xfbml  : true, // parse XFBML
        //channelUrl  : 'http://www.yourdomain.com/channel.html', // Custom channel URL
        oauth : true // enables OAuth 2.0
    });
                    
    FB.getLoginStatus(function(response) {
        
        if (response.authResponse) {
            FB.api('/me/permissions', function (response_check_perm) {
                var need_more_perm = false;
                for(var i=0; i<vote.scope_arr.length; i++){
                    if( ! response_check_perm['data'][0][vote.scope_arr[i]]){
                        need_more_perm = true;
                        break;
                    }
                }
                     
                if(need_more_perm){
                    var path = 'https://www.facebook.com/dialog/oauth?';
                    var queryParams = ['client_id=' + vote.appID,
                    'redirect_uri=' + 'http://apps.facebook.com/vote_bkk_policy',//window.location,
                    'scope=' + vote.scope_string,
                    'response_type=token'];
                    var query = queryParams.join('&');
                    var url = path + query;
                    top.location.href = url;
                }
                else{
                	
                    vote.accessToken = response.authResponse.accessToken;
                    FB.api('/me',vote.get_data_fb);
                }
            });
        } 
        else {
        	  
            // no user session available, someone you dont know
            var path = 'https://www.facebook.com/dialog/oauth?';
            var queryParams = ['client_id=' + vote.appID,
            'redirect_uri=' + 'http://apps.facebook.com/vote_bkk_policy',
            'scope=' + vote.scope_string,
            'response_type=token'];
            var query = queryParams.join('&');
            var url = path + query;
            top.location.href = url;
        }
    });
}

vote.prototype.get_data_fb = function(user){
   vote.user_fbid = user.id;
   vote.user_fbname = user.name;
   vote.user_email = user.email;
  
   $(document).ready(function(){
   		vote.reset();
   });
}
////////////////////////FB//////////////////////////

vote.prototype.reset = function()
{
	$('#button_start').attr('onclick','vote.click_button_start()');
	
	$('#button_close_video').attr('onclick','vote.click_close_video()');
	$('#button_close_policy').attr('onclick','vote.click_close_policy()');
	
	$('#button_ok_alert').attr('onclick','vote.click_button_ok_alert()');
	
	$('#button_video_1').attr('onclick','vote.click_button_video(1)');
	$('#button_video_2').attr('onclick','vote.click_button_video(2)');
	$('#button_video_3').attr('onclick','vote.click_button_video(3)');
	$('#button_video_4').attr('onclick','vote.click_button_video(4)');
	$('#button_video_5').attr('onclick','vote.click_button_video(5)');
	$('#button_video_6').attr('onclick','vote.click_button_video(6)');
	
	$('#button_read_more_1').attr('onclick','vote.click_button_read_more(1)');
	$('#button_read_more_2').attr('onclick','vote.click_button_read_more(2)');
	$('#button_read_more_3').attr('onclick','vote.click_button_read_more(3)');
	$('#button_read_more_4').attr('onclick','vote.click_button_read_more(4)');
	$('#button_read_more_5').attr('onclick','vote.click_button_read_more(5)');
	$('#button_read_more_6').attr('onclick','vote.click_button_read_more(6)');
	
	$('#click_choice_1').attr('onclick','vote.click_choose_vote(1)');
	$('#click_choice_2').attr('onclick','vote.click_choose_vote(2)');
	$('#click_choice_3').attr('onclick','vote.click_choose_vote(3)');
	$('#click_choice_4').attr('onclick','vote.click_choose_vote(4)');
	$('#click_choice_5').attr('onclick','vote.click_choose_vote(5)');
	$('#click_choice_6').attr('onclick','vote.click_choose_vote(6)');
	
	$('#button_ok').attr('onclick','vote.click_button_ok()');
	$('#button_invite').attr('onclick','vote.click_button_invite()');
	
	$('#content').show();
}

vote.prototype.click_button_start = function()
{
	
	$('#first_page').hide();
	$('#choice_page').show();
}

vote.prototype.click_button_video = function(num)
{	
	$('html,body').animate({
        scrollTop: $("#content").offset().top
    }, 1500);
        
	if (num == 1)
	{
		$('#video').attr('src','http://www.youtube.com/embed/_-ADTo5XyP8?autoplay=1');
	}
	else if (num == 2)
    {
    	$('#video').attr('src','http://www.youtube.com/embed/I7kwK1tFx-w?autoplay=1');
    }
    else if (num == 3)
    {
    	$('#video').attr('src','http://www.youtube.com/embed/MULYtf2KKHE?autoplay=1');
    }
    else if (num == 4)
    {
    	$('#video').attr('src','http://www.youtube.com/embed/EUMDCCbKf_c?autoplay=1');
    }
    else if (num == 5)
    {
    	$('#video').attr('src','http://www.youtube.com/embed/H9clot3KuAs?autoplay=1');
    }
	else if (num == 6)
    {
    	$('#video').attr('src','http://www.youtube.com/embed/YCvCypNfkSI?autoplay=1');
    }
   
	$('#blursheet').show();
	$('#video_page').show();
}

vote.prototype.click_close_video = function()
{
	document.getElementById('video').src = document.getElementById('video').src.replace('autoplay=1','autoplay=0');
	
	$('#video_page').hide();
	$('#blursheet').hide();
}

vote.prototype.click_button_read_more = function(num)
{
	$('html,body').animate({
        scrollTop: $("#content").offset().top
    }, 1500);
        
	if (num == 1)
	{
		$('#policy_page').css('background-image','url("images/policy' + num + '.jpg")');
	}
	else if (num == 2)
    {
    	$('#policy_page').css('background-image','url("images/policy' + num + '.jpg")');
    }
    else if (num == 3)
    {
    	$('#policy_page').css('background-image','url("images/policy' + num + '.jpg")');
    }
    else if (num == 4)
    {
    	$('#policy_page').css('background-image','url("images/policy' + num + '.jpg")');
    }
    else if (num == 5)
    {
    	$('#policy_page').css('background-image','url("images/policy' + num + '.jpg")');
    }
	else if (num == 6)
    {
    	$('#policy_page').css('background-image','url("images/policy' + num + '.jpg")');
    }
   
	$('#blursheet').show();
	$('#policy_page').show();	
}

vote.prototype.click_close_policy = function()
{
	$('#policy_page').hide();
	$('#blursheet').hide();
}

vote.prototype.click_button_ok_alert = function()
{
	$('#box_alert').hide();
	$('#blursheet').hide();
}

vote.prototype.click_choose_vote = function(c)
{
	vote.choice_vote.push(c);
	
	var inx = vote.choice_vote.length - 1;
	
	$('#click_choice_' + c).html('<img src="images/x.png">');
	$('#click_choice_' + c).attr('onclick','vote.click_choose_no_vote(' + c + ',' + inx + ')');
}

vote.prototype.click_choose_no_vote = function(c,inx)
{
	vote.choice_vote[inx] = null;
    vote.choice_vote.sort();
    vote.choice_vote.pop();
    
	$('#click_choice_' + c).html('');
	$('#click_choice_' + c).attr('onclick','vote.click_choose_vote(' + c + ')');
	
	for(var i = 0 ; i < vote.choice_vote.length ; i++)
	{
		$('#click_choice_' + vote.choice_vote[i]).attr('onclick','vote.click_choose_no_vote(' + vote.choice_vote[i] + ',' + i + ')');	
	}
}

vote.prototype.click_button_ok = function()
{
	if(vote.choice_vote.length > 0)
	{
		for(var i = 0 ; i < vote.choice_vote.length ; i++)
		{
			vote.user_choice += vote.choice_vote[i];
			
			if(vote.choice_vote.length - i != 1)
			{
				vote.user_choice += ',';
			}
		}
		
		var param = {
	    	mode: 'add',
	    	fbid: vote.user_fbid,
	        name: vote.user_fbname,
	        email: vote.user_email,
	        choice_vote: vote.user_choice
	        
	    }
	    
	    ajax(service_path+'/vote.php', param, 'text', '', function(data){ 
			
			//var locate = JSON.parse(data).location;
			
			$('#choice_page').hide();
			$('#invite_page').show();
			
			vote.postFacebook();
		 });
	} else {
		$('html,body').animate({
	        scrollTop: $("#content").offset().top
	    }, 1000);
	    
	    $('#box_alert_msg').html('กรุณาเลือกอย่างน้อย 1 นโยบาย !!!');
	    
		$('#blursheet').show();
		$('#box_alert').show();
	}
}

/////////////////////Post Facebook///////////////////////
vote.prototype.postFacebook = function()
{
	  var mes = '';
	  var name = '';
	  var cap = '';
	  var des = '';
	  
	  
  	 mes = 'คุณ '+ vote.user_fbname +' ร่วมโหวตนโยบายที่ผู้ว่าควรทำ';
  	 name = 'เมื่อกลุ่มคนที่เก๋าที่สุด ลุกขึ้นมาร่างนโยบาย ให้ลูกหลานได้นำไปใช้';
  	 cap = 'กลุ่มพลังสูงวัย เป็นการรวมตัวของผู้สูงอายุที่ไม่ก้มหัวให้กับสังขาร';
  	 des = 'ออกมาแสดงบทบาทของผู้สูงอายุไทย นำประสบการณ์ที่สะสมมาทั้งชีวิต  ร่างนโยบายเพื่อคนกรุงเทพฯได้เลือกโหวตให้ผู้ว่านำไปใช้';
  
	  
	FB.api('/me/feed', 'post', {
		  message: mes,
		  link:'http://apps.facebook.com/vote_bkk_policy/',
		  picture:'http://freehap.com/vote_bkk_policy/images/facebook/icon.jpg',
		  name: name, 
		  caption: cap,
		  description: des
	 },function(data) {
		 console.log("response... "+data);
	 });
}
/////////////////////Post Facebook///////////////////////

/////////////////////Invite///////////////////////
vote.prototype.click_button_invite = function()
{
	FB.ui({method: 'apprequests',
	    message: 'Vote Bkk Policy',
	    filters: ['app_non_users']
	}, vote.callback_invite);
}

vote.prototype.callback_invite = function(response)
{	
	if(response != null)
	{
		window.location = 'https://www.facebook.com/' + vote.user_fbid;
	} else {
		window.location = 'https://www.google.com';
	}
}
/////////////////////Invite///////////////////////