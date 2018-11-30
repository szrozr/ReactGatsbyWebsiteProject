module.exports.errorResponse = (body, statusCode = 400, headers = null) => ({
  statusCode,
  body: JSON.stringify(body instanceof Error ? { message: body.message } : body),
  headers: headers || {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

module.exports.successResponse = (body, statusCode = 200, headers = null) => ({
  statusCode,
  body: JSON.stringify(body),
  headers: headers || {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
