/**
 * Account store
 */
import {Vue ,Router , Resource } from "../lib/com.build.js";
import {parseResource} from "../lib/utils";

let Accountaction = {
    url:'someItem{/id}',
    data:{
        login: {method: 'POST', url: 'login.json'},
        register: {method: 'POST', url: 'someItem/register.json'}
    }
}

let AccountService = parseResource(Vue , Accountaction)
export default AccountService

