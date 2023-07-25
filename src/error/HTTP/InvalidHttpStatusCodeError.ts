class InvalidHttpStatusCodeError extends Error {
    constructor(invalidHttpStatusCode: number) {
        super(`Invalid HTTP status code ${invalidHttpStatusCode}`)
    }
}

export default InvalidHttpStatusCodeError