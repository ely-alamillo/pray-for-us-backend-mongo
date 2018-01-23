const SERVER_USER_ERROR = 422;

const sendUserError = (err, res) => {
  res.status(SERVER_USER_ERROR);
  if (typeof err === 'string') {
    return res.json({ err });
  } else if (err && err.message) {
    return res.json({
      message: err.message,
      stack: err.stack
    });
  }
  res.json(err);
};



module.exports = {
  sendUserError,
};
