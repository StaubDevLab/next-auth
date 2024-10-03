'use client'
import Link from 'next/link';
import {useFormState} from 'react-dom';
import {ActionState, signup} from "@/actions/auth-actions";

const initialState: ActionState = {
    errors: {
        email: undefined,
        password: undefined
    }
}
export default function AuthForm() {
    const [formState, formAction] = useFormState(signup, initialState)
    return (
        <form id="auth-form" action={formAction}>
            <div>
                <img src="/images/auth-icon.jpg" alt="A lock icon" />
            </div>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                {formState.errors?.email && <p className={"text-red-600 my-1"}>{formState.errors.email}</p>}
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                {formState.errors?.password && <p  className={"text-red-600 my-1"}>{formState.errors.password}</p>}
            </p>

            <p>
                <button type="submit">
                    Create Account
                </button>
            </p>
            <p>
                <Link href="/">Login with existing account.</Link>
            </p>
        </form>
    );
}
