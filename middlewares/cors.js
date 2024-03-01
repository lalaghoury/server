const cors = require("cors");

const useCors = (app) => {
  app.use(cors());
};

module.exports = useCors;
