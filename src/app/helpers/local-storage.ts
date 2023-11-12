export const saveParam = (param: string) => {
    const numberSession = param.replace(/[A-Z, a-z,:]/g, '');
    localStorage.setItem('sesion',numberSession);
}

export const getParam = (): string | null => {
    return localStorage.getItem('sesion');
}

export const removeParam = () => {
    localStorage.removeItem('sesion');
}