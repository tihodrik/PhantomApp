var system = require('system'),
    page = require('webpage').create();

var X = 1920,
    Y = 1080,
    email = "tv@unfolio.ru",
    password = "bNPHk9AQrEf4GUsY",
    url = "https://www.yourappontv.com/my-apps/net-tv-apps";

page.open(url, function(status) {
    if (status == "success") {
        page.viewportSize = {
            width: X,
            height: Y
        };
        page.render("page.png");
    }
});

page.onLoadFinished = function(status) {
    console.log("Got finished reply");
    if (status == 'success') {
        console.log("HERE");

        console.log("Page was successfully opened!");
        //page.injectJs('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js');
        page.evaluate(function() {
            jQuery("#emailaddress").val("tv@infolio.ru");
            document.getElementById('password').value = "bNPHk9AQrEf4GUsY";
            //console.log(document.getElementById('password').value);
            document.getElementById('btGo').click();
        });
        //page.injectJs('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js');
        window.setTimeout(function() {page.render("page1.png");}, 500);
    } else {
        console.log("Opening failed");
    }
    phantom.exit();
}
