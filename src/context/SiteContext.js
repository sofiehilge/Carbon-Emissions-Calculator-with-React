import {createContext, useContext} from "react";

const SiteContext = createContext();

export const SiteProvider = SiteContext.Provider;

export const useSite = () => {
    const context = useContext(SiteContext);
    if(!context) {
        throw new Error('useSite must be used within a SiteProvider');
    }
    return context;
}