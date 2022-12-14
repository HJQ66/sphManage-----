// 平台属性管理
import request from '@/utils/request'

// 获取一级分类属性
export const reqCategory1List = ()=> request.get('/admin/product/getCategory1');

//获取二级分类数据接口
export const reqCategory2List = (category1Id) => request.get(`/admin/product/getCategory2/${category1Id}`);

//获取三级分类数据接口
export const reqCategory3List = (category2Id) => request.get(`/admin/product/getCategory3/${category2Id}`);

//获取平台属性接口
export const reqAttrList = (category1Id,category2Id,category3Id) => request.get(`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`);

//添加属性与属性值接口
export const reqAddOrUpdateAttr = (data) => request({url:'/admin/product/saveAttrInfo',method:'post',data});

//删除商品属性接口
export const reqDeleteAttr = (attrId) => request({url:`/admin/product/deleteAttr/${attrId}`,method:'delete'})
