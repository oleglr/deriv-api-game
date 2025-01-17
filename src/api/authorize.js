const DerivAPIBasic = require('@deriv/deriv-api/dist/DerivAPIBasic');

const api = new DerivAPIBasic({ endpoint: 'ws.derivws.com', lang: 'EN', app_id: 67219 });

export default async function getUserAuthorization(token) {
    return await api.authorize(token);
}
