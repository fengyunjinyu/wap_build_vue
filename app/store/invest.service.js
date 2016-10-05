/**
 * Account store
 */
import {Vue } from "../lib/com.build.js";
import {parseResource} from "../lib/utils";

let Investaction = {
    url:'debt{/id}',
    data:{
        getlist: {method: 'get', url: 'debt_list.json'},
        debtitem: {method: 'POST', url: 'debt_item.json'}
    }
}
export default parseResource(Vue ,Investaction)

