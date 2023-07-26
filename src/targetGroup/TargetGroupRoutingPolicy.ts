enum TargetGroupRoutingPolicy {
    /**
     * 
     * @description The default routing policy. Requests are forwarded to the registered targets in the order that they are listed.
     */
    ROUND_ROBIN = 'round_robin',


    /**
     * 
     * @description Requests are forwarded in a random order to the registered targets.
     */
    RANDOM = 'random',

    /**
     * 
     * @description Requests are forwarded to target with fastest average response time.
     */
    LEAST_RESPONSE_TIME = 'least_response_time',

    /**
     * 
     * 
     * @description Requests are forwarded to the target that has the least number of connections active.
     */
    LEAST_CONNECTIONS = 'least_connections'
}
export default TargetGroupRoutingPolicy