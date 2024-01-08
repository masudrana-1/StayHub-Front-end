import React from "react";

// toast 
type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
};

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
    // isLoggedIn: boolean;
    // stripePromise: Promise<Stripe | null>;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppContext.Provider value={{showToast: ()=> undefined}}>
            {children}
        </AppContext.Provider>
    )
}