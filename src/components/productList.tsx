import { IProduct } from "../model/product";

interface IProductListProps {
    productList: IProduct[];
    editEvent: (product: IProduct, index: number) => void;
    removeEvent: (index: number) => void;
}
export const ProductList = (props: IProductListProps) => {

    if (!props.productList || props.productList.length === 0) {
        return <></>
    }

    return <div className="productList">
        {
            props.productList.map((product: IProduct, index: number) => {
                return <div key={index} className="productCard">
                    <h3>{product.name}</h3>
                    <div>{product.description}</div>
                    <img src={product.img} alt={product.name} />
                    <div className="btnZone">
                        <button type="button" onClick={() => props.editEvent(product, index)}>Editar</button>
                        <button type="button" onClick={() => props.removeEvent(index)}>Eliminar</button>
                    </div>
                </div>
            })
        }
    </div>
}