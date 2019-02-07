const fs = require('fs');

module.exports.index = (event, context, callback) => {
  const { request, response } = event.Records[0].cf;
  if ((request.method === 'GET') && (request.uri === '/index.html')) {
    console.log(JSON.stringify(event));
    const content = fs.readFileSync(`${__dirname}/../public/index.html`, 'utf8');
    const parts = content.split('</head>');
    let responseBody = parts[0];
    responseBody += '<meta property="og:title" content="Puente Technology & Design" />';
    responseBody += '<meta property="og:description" content="Websites, web apps, mobile apps, games ... We design, we create, we build and we innovate.  We love what we do and we do it well." />';
    responseBody += '</head>';
    responseBody += parts[1];
    callback(null, {
      status: 200,
      statusDescription: 'OK',
      headers: response.headers,
      body: responseBody,
    });
  } else {
    callback(null, response);
  }
};
