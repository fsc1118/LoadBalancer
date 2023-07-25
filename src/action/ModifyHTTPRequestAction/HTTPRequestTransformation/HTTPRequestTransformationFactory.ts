import HTTPRequestTransformation from "./HTTPRequestTransformation"
import InsertHeaderTransformation from "./InsertHeaderTransformation"

export default class HTTPRequestTransformationDefinationFactory {
    static createReplaceTransformationDefination = (newHeaders: Map<string, string>): HTTPRequestTransformation => {
        return new InsertHeaderTransformation(newHeaders)
    }
}
