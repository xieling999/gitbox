import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/*var state = {
    newbi:'0'
}*/

var state, xmlhttp
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.state == 200) {
        state = eval('(' + xmlhttp.responseText + ')')
    } else {
        state = {setverIP:0}
    }
}
xmlhttp.open("GET", "http://127.0.0.1/json/users.php", false)
xmlhttp.send()

export default new Vuex.Store({
    state
})