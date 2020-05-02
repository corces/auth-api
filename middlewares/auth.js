const service = require('../services');

function isAuth(req, res, next)
{
	if (!req.headers.authorization) {
		return res.status(403).json({ error: true, message: 'No tienes permiso' })
	}

	const token = req.headers.authorization.split(' ')[1];

	service.decodeToken(token)
		.then((response) => {
	
			req.user = response;
			next();

		})
		.catch((error) => {
			return res.json({ error: true, message: error })
		})
}


module.exports = isAuth;
