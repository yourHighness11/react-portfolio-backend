const corsOptions = {
  origin: process.env.ORIGIN_LINK,
  optionsSuccessStatus: 200,
  method: "POST",
};

module.exports = corsOptions;
