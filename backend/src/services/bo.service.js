/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const httpStatus = require('http-status');
const { PrismaClient } = require('@prisma/client');
const ApiError = require('../utils/ApiError');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const getReviews = async (boId, page, limit) => {
  const checkBoIdExist = await prisma.bus_operators.findUnique({
    where: {
      id: boId,
    },
  });
  if (!checkBoIdExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bus operator not found');
  }

  const data = await prisma.reviews.findMany({
    skip: page * limit,
    take: limit,
    orderBy: {
      rate: 'desc',
    },
    where: {
      bo_id: boId,
    },
    include: {
      users: {
        select: {
          email: true,
        },
      },
    },
  });
  const count = await prisma.reviews.count({
    where: {
      bo_id: boId,
    },
  });

  return { count, data };
};

const createReview = async (userId, boId, rate, comment) => {
  const checkBoIdExist = await prisma.bus_operators.findUnique({
    where: {
      id: boId,
    },
  });
  if (!checkBoIdExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bus operator not found');
  }

  const checkUserIdExist = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
  if (!checkUserIdExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (rate < 0 || rate > 5) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Rate must be between 0 and 5');
  }

  const data = await prisma.reviews.create({
    data: {
      bo_id: boId,
      user_id: userId,
      rate,
      comment,
    },
  });

  return data;
};

const getBusOperatorById = async (id) => {
  return prisma.bus_operators.findUnique({ where: { id } });
};

const listBusOperator = async (req) => {
  const listBO = await prisma.bus_operators.findMany({
    orderBy: {
      name: 'asc',
    },
    skip: req.params.page * req.params.limit,
    take: req.params.limit,
  });
  return { data: listBO };
};
const createBO = async (req) => {
  const message = await prisma.bus_operators.create({
    data: {
      image_url: req.body.image_url,
      phone: req.body.phone,
      name: req.body.name,
    },
  });
  return message;
};
const createAccount = async (req) => {
  if (req.body.password !== req.body.repassword) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Repassword is not identical to password');
  }

  const saltRounds = 10;

  // eslint-disable-next-line no-param-reassign
  req.body.password = await bcrypt.hash(req.body.password, saltRounds);
  // eslint-disable-next-line no-param-reassign
  req.body.password = Buffer.from(req.body.password);

  delete req.body.repassword

  const bo = prisma.users.create({
    data: {
      role: 1,
      email: req.body.email,
      password: req.body.password,
      repassword: req.body.repassword,
    },
  });
  return bo;
};
const updateBO = async (req) => {
  const checkBO = await prisma.bus_operators.findUnique({
    where: {
      id: req.body.id,
    },
  });
  if (!checkBO) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bus operator not found');
  }
  const message = await prisma.bus_operators.update({
    where: {
      id: req.body.id,
    },
    data: {
      image_url: req.body.image_url,
      phone: req.body.phone,
      name: req.body.name,
    },
  });
  return message;
};
const deleteBO = async (req) => {
  const checkBO = await prisma.bus_operators.findUnique({
    where: {
      id: req.body.id,
    },
  });
  if (!checkBO) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bus operator not found');
  }
  const message = await prisma.bus_operators.delete({
    where: {
      id: req.body.id,
    },
  });
  return message;
};
module.exports = {
  deleteBO,
  updateBO,
  createAccount,
  createBO,
  listBusOperator,
  getReviews,
  createReview,
  getBusOperatorById,
};
