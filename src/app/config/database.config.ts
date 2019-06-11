export const DB_USER = process.env.LISSANDRA_SERVER_DB_USER || 'anuar';
export const DB_PASSWORD = process.env.LISSANDRA_SERVER_DB_PASSWORD || 'taquitos21';
export const DB_NAME = process.env.LISSANDRA_SERVER_DB_NAME || 'lissandra';
export const DB_CONNECT_STRING = `mongodb://${DB_USER}:${DB_PASSWORD}@ds143511.mlab.com:43511/${DB_NAME}`;

//'mongodb://anuar:taquitos21@ds143511.mlab.com:43511/lissandra'
