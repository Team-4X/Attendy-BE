exports.index = (req, res) => {
	console.log("hello from /auth/admin");
	console.log(req.user);
	res.json({admin: req.admin});
}
