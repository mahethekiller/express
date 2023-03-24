const whitelist = ["https://www.yoursite.com", "https://localhost:3000", "https://localhost:4001"];
const corsOptions = {
  origin: (origin, callback) => {
    // Remove  || !origin at production
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
