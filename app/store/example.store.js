/**
 * 定义一个resource
 */

 var customActions = {
    url:'someItem{/id}',
    data:{
        foo: {method: 'GET', url: 'someItem/foo{/id}'},
        bar: {method: 'POST', url: 'someItem/bar{/id}'}

    }
}
export default customActions

