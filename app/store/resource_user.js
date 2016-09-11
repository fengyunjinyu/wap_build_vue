
var customActions = {
    foo: {method: 'GET', url: 'someItem/foo{/id}'},
    bar: {method: 'POST', url: 'someItem/bar{/id}'}
};


var Userstore = Vue.resource('someItem{/id}', {}, customActions);

module.export = Userstore;


