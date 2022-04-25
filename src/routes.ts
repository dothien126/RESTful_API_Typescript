import { Express, Request, Response } from 'express';
import {createUserHandler} from './controller/user.controller'
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';

function routes(app: Express) {
    app.post('/api/users', validateResource(createUserSchema),  createUserHandler);
    app.post(
        "/api/sessions",
        validateResource(createSessionSchema),
        createUserSessionHandler
      );
}

export default routes;
