import { FC, createContext, useMemo, useState } from "react";

export enum Themes {
    DARK = 'dark',
    LIGHT ='light',
}

export interface ThemeProps {
    theme?: Themes;
    setTheme?: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultState = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider:FC<ThemeProviderProps> = ({children}) => {

    const [theme, setTheme] = useState<Themes>(defaultState)

    const defaultContext = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultContext}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;