/**
 * 网络请求
 **/

import axios from 'axios';

// 获取梁群茹微博消息
export const getRuWeiboResponse = () => axios.get('/ru').then(res => res).catch(err => console.log(`请求梁群茹微博异常:${err}`));
