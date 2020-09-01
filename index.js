
const stringJudgement = {
    isNull (string) {
        return string === null
    },
    isEmpty (string) {
        return string === ''
    },
    isUndefined (string) {
        return string === undefined
    },
    isNullOrEmptyOrUndefined (string) {
        return string === null || string === '' || string === undefined
    }
}
 
module.exports = stringJudgement