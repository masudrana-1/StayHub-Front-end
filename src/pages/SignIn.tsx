import React from 'react';
import { useForm } from 'react-hook-form';


export type SignInFormData = {
    email: string,
    password: string
}

const SignIn = () => {

    const {register}= useForm()

    return (
        <from>
            
        </from>
    );
};

export default SignIn;