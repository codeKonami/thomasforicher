'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: `<html><head><title>Thomas Foricher</title><style>body,html,main{height:100%}.info,a{padding:20px;color:#000}.info,.links,a,a:visited{color:#000}body{margin:0;font-family:Roboto,sans-serif}main{padding:0;margin:0;display:flex;align-items:center;justify-content:center}.info{margin:20px;line-height:20px;text-align:center}.name{font-size:2em;font-weight:700}.links{font-size:1em}a{display:inline-block;vertical-align:middle;white-space:nowrap}a:hover{color:grey}</style><link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></head><body><main><me><div class="info name">Thomas Foricher</div><div class="info links"><a target="_blank" href="https://twitter.com/codeKonami">Twitter</a><a target="_blank" href="https://www.linkedin.com/in/thomasforicher/">LinkedIn</a><a href="mailto:thomas.foricher@gmail.com">Email</a><a target="_blank" href="https://www.made-on-mars.com">Made On Mars</a><a target="_blank" href="https://github.com/codeKonami">Github</a><a target="_blank" href="https://s3-eu-west-1.amazonaws.com/thomasforicher/Thomas_Foricher-resume.pdf#zoom=140">CV</a></div></me></main></body></html>`,
  };

  callback(null, response);

};
