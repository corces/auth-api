/*
const jwt = require('jwt-simple');
const moment = require('moment');
const { SECRET_TOKEN } = require('../config/keys');



function createToken(user)
{
	const payload = {
		sub: user._id,
		iat: moment().unix(),
		exp: moment().add(5, 'minutes').unix()
	};
	

	return jwt.encode(payload, SECRET_TOKEN);
}



function decodeToken(token)
{
	return new Promise((resolve, reject) => {

		try {

			const payload = jwt.decode(token, SECRET_TOKEN);

			if (payload.exp <= moment.unix()) {
				reject({ error: true, message: 'El token expiro' });
			}

			resolve(payload.sub);

			
		} catch (error) {
			reject({ error: true, message: error });
		}

	});
}





module.exports = {
	createToken,
	decodeToken
}
*/