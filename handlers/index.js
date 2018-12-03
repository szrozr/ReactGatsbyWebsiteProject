
const { parse } = require('node-html-parser');
const fs = require('fs');

module.exports.index = (event, context, callback) => {
  const { request, response } = event.Records[0].cf;
  if ((request.method === 'GET') && (request.uri === '/index.html')) {
    console.log(JSON.stringify(event));
    const content = fs.readFileSync(`${__dirname}/../public/index.html`, 'utf8');
    const parts = content.split('</head>');
    const responseBody = parts[0];
    const root = parse(content);
    const head = root.querySelector('head');
    head.appendChild('<meta property="og:title" content="Puente Technology and Design" />');
    head.appendChild('<meta property="og:description" content="Websites, web apps, mobile apps, games ... We design, we create, we build and we innovate.  We love what we do and we do it well." />');
    response.body = root.toString();
    callback(null, response);
  } else {
    callback(null, response);
  }
};
