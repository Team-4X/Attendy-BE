exports.index = async(req, res) => {
    // console.log(req.body);
    console.log('howdy from test controller!');
    res.send("<h1>Howdy from test Route</h1>");
}