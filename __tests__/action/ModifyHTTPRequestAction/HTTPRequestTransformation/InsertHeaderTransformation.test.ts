import HTTPRequest from "../../../../src/model/HTTP/HTTPRequest"
import InsertHeaderTransformation from "../../../../src/action/ModifyHTTPRequestAction/HTTPRequestTransformation/InsertHeaderTransformation"

describe('InsertHeaderTransformation', () => {
    it('should insert headers into the HTTPRequest', () => {
        const httpRequest = new HTTPRequest(
            'GET',
            'http://localhost:8080',
            new Map([
                ['Host', 'localhost:8080'],
                ['User-Agent', 'curl/7.64.1'],
                ['Accept', '*/*'],
            ]),
            'Hello World'
        )
        const newHeaders = new Map([
            ['X-Forwarded-Host', 'localhost:8080',],
            ['X-Forwarded-Proto', 'http'],
            ['X-Forwarded-Port', '8080'],
        ])
        const insertHeaderTransformation = new InsertHeaderTransformation(newHeaders)
        const transformedHTTPRequest = insertHeaderTransformation.transformHTTPRequest(httpRequest)
        expect(transformedHTTPRequest.headers.get('X-Forwarded-Host')).toBe('localhost:8080')
        expect(transformedHTTPRequest.headers.get('X-Forwarded-Proto')).toBe('http')
        expect(transformedHTTPRequest.headers.get('X-Forwarded-Port')).toBe('8080')
    })

    it('should overwrite existing headers in the HTTPRequest', () => {
        const httpRequest = new HTTPRequest(
            'GET',
            'http://localhost:8080',
            new Map([
                ['Host', 'localhost:8080'],
                ['User-Agent', 'curl/7.64.1'],
                ['Accept', '*/*'],
            ]),
            'Hello World'
        )
        const newHeaders = new Map([
            ['Host', 'localhost:8081',],
            ['User-Agent', 'curl/7.64.2'],
            ['Accept', '*/*'],
        ])
        const insertHeaderTransformation = new InsertHeaderTransformation(newHeaders)
        const transformedHTTPRequest = insertHeaderTransformation.transformHTTPRequest(httpRequest)
        expect(transformedHTTPRequest.headers.get('Host')).toBe('localhost:8081')
        expect(transformedHTTPRequest.headers.get('User-Agent')).toBe('curl/7.64.2')
        expect(transformedHTTPRequest.headers.get('Accept')).toBe('*/*')
    })
})