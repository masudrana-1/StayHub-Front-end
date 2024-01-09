import { RegisterFormData } from "./pages/Register";

// env 
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// fetch register api 
export const register =async (formData:RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        // set cookies
        credentials: "include",

        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(responseBody.message);
    }
}

// get token 
export const  validateToken =async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error("Token invalid");
    }

    return response.json();
}