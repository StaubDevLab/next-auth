'use server';

export type ActionState = {
    errors?: {
        email?: string
        password?: string

    }
}

export const signup = async (prevState : ActionState, formData: FormData): Promise<{ errors: { email?: string; password?: string } }> => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    let errors: { email?: string, password?: string } = {}

    if (!email.includes('@')) {
        errors.email = "Please enter a valid email";
    }
    if (password.trim().length < 8) {
        errors.password = "Password must be at least 8 characters";
    }
    if (Object.keys(errors).length > 0) {
        return {errors: errors};
    }
    return {errors: {}}
}