import Cookies from 'js-cookie'

export default {
    methods: {
        // 键对值，过期时间(多少秒)
        setCookie (name, value, expires) {
            if (expires) {
                expires = new Date(new Date().getTime() + expires)
            } else {
                expires = ''
            }
            Cookies.set(name, value, {expires});
        },
        getCookie(name) {
            return Cookies.get(name)
        },
        getJsonCookie(name) {
            return Cookies.get(name) ? JSON.parse(Cookies.get(name)) : ''
        },
        getAllCookie() {
            return Cookies.get()
        },
        removeCookie(name) {
            Cookies.remove(name)
        }
    }
}