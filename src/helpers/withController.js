export default function withController(action) {
  return async (req, res, next) => {
    try {
      const data = await action(req, res, next);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
}
