exports.index = (req, res) => {
	res.json({user: req.user});
}
