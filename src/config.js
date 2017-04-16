const isProd = process.env.ENV === 'production'
export const API = isProd ? 'https://ceterus.com/api/' : 'https://api.ceterus.com/api/'
//export const API = 'API_URL_SED'
//export const API = process.env.ENVIRONMENT ==='live' ? 'https://api.ceterus.com/api/' : `https//${process.env.ENVIRONMENT}.ceterusinsight.com/api/`
