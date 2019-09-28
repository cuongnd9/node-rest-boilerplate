import service from '@/services/user.service';

function list() {
  return service.getUsers();
}

function retrieve(req) {
  const { id } = req.params;
  return service.getUser(id);
}

function create(req) {
  return service.createUser(req.body);
}

function update(req) {
  const { id } = req.params;
  return service.updateUser(id, req.body);
}

function destroy(req) {
  const { id } = req.params;
  return service.deleteUser(id);
}

export default {
  list,
  retrieve,
  create,
  update,
  destroy,
};
