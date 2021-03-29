const env = process.env;

const config = {
  // db: { 
  //   /* don't expose password or any sensitive info, done only for demo */
  //   host: env.DB_HOST || 'freedb.tech',
  //   user: env.DB_USER || 'freedbtech_tarun',
  //   password: env.DB_PASSWORD || '$tarun$',
  //   database: env.DB_NAME || 'freedbtech_tarunjobsite',
  // },
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'aa1v756wiy0upx2.ck4kzk4esbfk.us-east-2.rds.amazonaws.com',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || 'admin123',
    database: env.DB_NAME || 'job_site'
  }
};


module.exports = config;