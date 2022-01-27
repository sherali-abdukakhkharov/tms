const repository = require('../repositories/statisticsRepo');
const userRepository = require('../repositories/userRepo');
const jwt = require('../utils/jwt');

const getStatistics = async (req, res) => {
  try {
    const { token } = req.headers;
    const payload = jwt.verify(token);
    const isAdmin = await userRepository.isAdminByUserId(payload.userId);

    if (!isAdmin) {
      return res.send('Permission denied!');
    }
    const statistics = await repository.getStatistics();
    return res.send(statistics);
  } catch (error) {
    throw Error(`organization controller [getStatistics]:${error}`);
  }
};

const getStatisticsByOrgId = async (req, res) => {
  try {
    const { token } = req.headers;
    const payload = jwt.verify(token);
    const isAdmin = await userRepository.isAdminByUserId(payload.userId);

    if (!isAdmin) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const statistics = await repository.getStatisticsByOrgId(id);
    return res.send(statistics);
  } catch (error) {
    throw Error(`organization controller [getStatisticsByOrgId]:${error}`);
  }
};

const getProjectStats = async (req, res) => {
  try {
    const { token } = req.headers;
    const payload = jwt.verify(token);
    const isAdmin = await userRepository.isAdminByUserId(payload.userId);

    if (!isAdmin) {
      return res.send('Permission denied!');
    }
    const statistics = await repository.getProjectStats();
    return res.send(statistics);
  } catch (error) {
    throw Error(`organization controller [getProjectStats]:${error}`);
  }
};

module.exports = {
  getStatistics,
  getStatisticsByOrgId,
  getProjectStats
};
