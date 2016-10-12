var system = require('system'),
    args = system.args,
    page = require('webpage').create();
    
var X = 0,
    Y = 0,
    url = "";

if (args.length < 4) {
    console.log("Usage: 'friendsListVK.js sizeX sizeY url'");
    phantom.exit();
}
X = args[1];
Y = args[2];
url = args[3];

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
        console.log("Page was successfully opened!");
    }
    else {
        console.log("Opening failed");
    }
    phantom.exit();
}
