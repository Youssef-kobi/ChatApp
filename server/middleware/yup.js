const YupValidate = (schema) => async (req, res, next) => {
  const user = req.body;
  try {
    await schema.validate(user);
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message });
  }
};
export default YupValidate;
