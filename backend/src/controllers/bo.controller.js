/* eslint-disable prettier/prettier */
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const { boService, tokenService } = require('../services');

const getReviews = catchAsync(async (req, res) => {
  const result = await boService.getReviews(req.params.boId, req.params.page, req.params.limit);
  res.send(result);
});

const createReview = catchAsync(async (req, res) => {
  const result = await boService.createReview(req.user.id, req.params.boId, req.body.rate, req.body.comment);
  res.send(result);
});
const viewBO = catchAsync(async (req, res) => {
  const result = await boService.listBusOperator(req);
  res.send(result);
});
const createBO = catchAsync(async (req, res) => {
  const result = await boService.createBO(req);
  res.send(result);
});

const createAccount = catchAsync(async (req, res) => {
  const bo = await boService.createAccount(req);
  const tokens = await tokenService.generateAuthTokens(bo);
  delete bo.password;
  res.status(httpStatus.CREATED).send({bo, token: tokens.access});
});
const updateBO = catchAsync(async (req, res) => {
  const result = await boService.updateBO(req);
  res.send(result);
});
const deleteBO = catchAsync(async (req, res) => {
  await boService.deleteBO(req);
  res.send({ success: true });
});
const getBOById = catchAsync(async (req, res) => {
  const result = await boService.getBusOperatorById(req.params.boId);
  res.send(result);
});
module.exports = {
  getBOById,
  deleteBO,
  updateBO,
  createAccount,
  createBO,
  viewBO,
  getReviews,
  createReview,
};
