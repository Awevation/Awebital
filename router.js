function route(handle, pathname, res, req) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
	handle[pathname](res, req);
    } else {
	console.log("No request handler fount for " + pathname);
	res.writeHead(404, {"Content-Type": "text/plain"});
	res.write("404 Not fount");
	res.end();
    }
}

exports.route = route;
