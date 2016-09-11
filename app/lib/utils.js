/**
 *  定义公共函数
 */
/**
 *
 * @param Vue  Vueobject
 * @param module_object  对象数据
 *
 */
/**
 *  var customActions = {
    foo: {method: 'GET', url: 'someItem/foo{/id}'},
    bar: {method: 'POST', url: 'someItem/bar{/id}'}
};

 var resource = Vue.resource('someItem{/id}', {}, customActions);
 */

export default function ( Vue ,baseurl , module_object){
    var resource = Vue.resource(baseurl+module_object.url ,{} , module_object.data);
    return resource;
}
