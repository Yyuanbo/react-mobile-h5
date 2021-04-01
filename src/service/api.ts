const API = 'https://api.dreamoncampus.com';
const api = process.env.NODE_ENV ==="development"?"/dapi":API;
export default {

    /**查询公益活动排行 */
    getRanking: `${api}/operation/specialActivity/selectPage`

};