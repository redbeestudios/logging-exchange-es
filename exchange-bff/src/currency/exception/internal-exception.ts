import { HttpException, HttpStatus } from "@nestjs/common";

export class InternalException extends HttpException {
    constructor() {
        super('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
}