module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  URL: process.env.BASE_URL || 'http://localhost:3000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://api:abc123@ds017205.mlab.com:17205/jwt_api',
  JWT_SECRET: process.env.JWT_SECRET || 'secret1'
};
