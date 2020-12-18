export default {
    randomAlphanumeric(length) {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    },

    randomAlphabetic(length) {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        const charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    },
    
    isBlank(str) {
        if (typeof str === 'undefined' || !str || str.length === 0 || str === '' || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g, '') === '') { return true } else { return false }
    }
}
