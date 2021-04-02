const API = 'https://api.xxx.com';
const api = process.env.NODE_ENV ==="development"?"/dapi":API;
export default {

    /**接口地址 */
    getRanking: `${api}/operation/specialActivity/selectPage`

};