const Application = require('../models/Application');

module.exports = function(req,res,next){
  if(req.xhr) return next();

  const secret = req.headers.secret;
  if(!secret) return next();

  Application.findOne({secret})
    .then(app=>{
      if(!app) return next(new Error('Invalid application'));
      req.application = app;
      req.validRequest = true;
      next();
    }).catch(error=>{
      next(error);
    });
}
