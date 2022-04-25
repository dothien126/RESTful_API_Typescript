import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
    body: object({
        name: string({required_error: 'Name is required!'}),
        password: string({required_error: 'Password fail'}).min(6, 'Password too short - should be 6 chars min'),
        passwordConfirm: string({required_error: 'PasswordConfirm fail'}),
        email: string({required_error: 'Email is requried'}).email('Not a valid email')
    }).refine(data => {
        data.password === data.passwordConfirm, {
            message: 'Password confirm do not match',
            path: ['passwordConfirm']
        }
    })
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, 'body.passwordConfirm'>