export interface IProduct {
    name: string;
    description: string;
    img: string;
}

export const getEmptyProduct = (): IProduct => {
    return {
        name: "",
        description: "",
        img: ""
    }
}