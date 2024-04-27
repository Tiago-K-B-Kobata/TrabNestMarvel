/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user-dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<void>;
    findOne(username: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/users/schemas/user.schema").User> & import("src/users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("src/users/schemas/user.schema").User> & import("src/users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("src/users/schemas/user.schema").User, "findOne">;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("src/users/schemas/user.schema").User> & import("src/users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("src/users/schemas/user.schema").User> & import("src/users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("src/users/schemas/user.schema").User, "find">;
}
