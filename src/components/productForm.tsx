import { useState } from "react";
import { IProduct } from "../model/product"

interface IProductForm {
    product: IProduct;
    callBackEvent: (product: IProduct) => void;
    cancelEvent: () => void,
    index: number;
}
export const ProductForm = (props: IProductForm) => {
    const [product, setProduct] = useState(props.product);

    return <div className="productForm">
        <form>
            <div>
                <label htmlFor="product-name">Nombre del producto</label>
                <input id="product-name" type="text" value={product.name}
                    onChange={(e) => setProduct({
                        ...product,
                        name: e.target.value
                    })} />
            </div>
            <div>
                <label htmlFor="product-name">Descripción del producto</label>
                <textarea rows={5} id="product-description" value={product.description}
                    onChange={(e) => setProduct({
                        ...product,
                        description: e.target.value
                    })} />
            </div>
            <div>
                <label htmlFor="product-name">Imagen del producto</label>
                <input id="product-img" type="text"
                    value={product.img}
                    onChange={(e) => setProduct({
                        ...product,
                        img: e.target.value
                    })} />

                {
                    product.img.length > 0 && <img src={product.img} alt={product.name} />
                }

            </div>
            <div className="buttonZone">
                <button onClick={() => props.callBackEvent(product)} type="button">Enviar</button>
                <button onClick={() => props.cancelEvent()} type="button">Cancel</button>
            </div>

        </form>
    </div>

}