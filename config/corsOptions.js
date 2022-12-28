const corsOptions = {
  origin: process.env.ORIGIN_LINK,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  method: "POST",
};

module.exports = corsOptions;
