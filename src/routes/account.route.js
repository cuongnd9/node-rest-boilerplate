import express from 'express';
import { celebrate, Joi } from 'celebrate';
import withController from '@/helpers/withController';
import controller from '@/controllers/account.controller';

const router = express.Router();

router.post(
  '/register',
  celebrate({
    body: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
      role: Joi.string().default('STAFF'),
    }),
  }),
  withController(controller.register),
);
router.post(
  '/login',
  celebrate({
    body: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  withController(controller.login),
);

export default router;
