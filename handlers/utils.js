module.exports.errorResponse = (body, statusCode = 400, isJson = true, headers = null) => ({
  statusCode,
  body: isJson ? JSON.stringify(body instanceof Error ? { message: body.message } : body) : body,
  headers: headers || {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

module.exports.successResponse = (body, statusCode = 200, isJson = true, headers = null) => ({
  statusCode,
  body: isJson ? JSON.stringify(body) : body,
  headers: headers || {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
