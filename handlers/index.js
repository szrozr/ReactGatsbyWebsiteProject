
const { errorResponse, successResponse } = require('./utils');

module.exports.index = async (event) => {
  console.log(event);
  return successResponse('woooo!');
};
