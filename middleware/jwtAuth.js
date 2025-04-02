var jwtAuthentication = require('jwt-authentication');

var authenticator = jwtAuthentication.server.create({
    publicKeyServer: process.env.ASAP_PUBLIC_KEY_REPOSITORY_URL,
    resourceServerAudience: process.env.ASAP_AUDIENCE,
    ignoreMaxLifeTime: false 
});

var authorizedSubjects = ['an-issuer'];

authenticator.validate(token, authorizedSubjects, function (error, claims) {
    if (error) {
        console.log('Validating the token failed.', error);
    } else {
        console.log('the token claims are', claims);
    }
});