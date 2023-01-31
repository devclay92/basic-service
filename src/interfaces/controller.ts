/**
 * The controller structure.
 *
 * @property {string} name
 * @property {any} instance
 * @property {ControllerHandler[]} [handler]
 */
export interface Controller {

    /**
     * The controller name.
     */
    name: string;

    /**
     * The controller instance
     */
    instance: any;

    /**
     * The handlers' list.
     */
    handler?: ControllerHandler[];
}

/**
 * Contains the available verbs for the service.
 * @enum {string}
 */
export enum CONTROLLER_METHOD {
    /** @value get */
    GET = 'get',
    /** @value post */
    POST = 'post',
    /** @value put */
    PUT = 'put',
    /** @value delete */
    DELETE = 'delete'
}

/**
 * The controller handler structure.
 *
 * @property {CONTROLLER_METHOD} method
 * @property {string} path
 * @property {string} handler
 */
export interface ControllerHandler {

    /**
     * The verb of the handler.
     */
    method: CONTROLLER_METHOD;

    /**
     * The path of the handler.
     */
    path: string;

    /**
     * The handler name.
     */
    handler: string;
}