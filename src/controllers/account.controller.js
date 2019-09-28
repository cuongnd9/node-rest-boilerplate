import service from '@/services/account.service';

function register(req) {
  return service.register(req.body);
}

function login(req) {
  return service.login(req.body);
}

export default {
  register,
  login,
};
