export default class RequiredFieldMissingError extends Error {
    constructor(missedField: string) {
        super(`Required field ${missedField} is missing`)
        this.name = "RequiredFieldMissingError"
    }
}