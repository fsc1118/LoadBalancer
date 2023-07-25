import HTTPRequest from "../../src/model/HTTP/HTTPRequest"

describe("HTTPRequest", () => {
    it("returns result identical to the input", () => {
        const response = new HTTPRequest("GET", "http://www.google.com", new Map([
            ["Host", "www.google.com"],
            ["User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0"],
        ]), "Hello World")

        expect(response.method).toBe("GET")
        expect(response.url).toBe("http://www.google.com")
        expect(response.headers.get("Host")).toBe("www.google.com")
        expect(response.headers.get("User-Agent")).toBe("Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0")
        expect(response.headers.get("Non-Existent-Header")).toBeUndefined()
        expect(response.body).toBe("Hello World")
    })
})
