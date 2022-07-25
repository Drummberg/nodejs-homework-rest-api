const validateBody = (scheme) => async (req, res, next) => {
  try {
    await scheme.validateAsync(req.body)
    next()
  } catch (error) {
    console.log(error.details)
    return res
      .status(400)
      .json({ status: 'error', code: 400, message: error.message })
  }
}

const validateParams = (scheme) => async (req, res, next) => {
  try {
    await scheme.validateAsync(req.params)
    next()
  } catch (error) {
    console.log(error.details)
    return res
      .status(400)
      .json({ status: 'error', code: 400, message: error.message })
  }
}

module.exports = { validateBody, validateParams }