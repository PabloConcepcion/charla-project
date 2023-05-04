import { useState } from "react";
import mockData from "../mock/mockData.json";
import { ProductList } from "./productList";
import { getEmptyProduct, IProduct } from "../model/product";
import { ProductForm } from "./productForm";
import { createUseStyles } from "react-jss";

export const ProductPage = () => {
    const emptyProduct = getEmptyProduct();
    const [productList, setProductList] = useState(mockData);
    const [showForm, setShowForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(emptyProduct);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const styles = ProductPageStyle();
    const addProduct = (product: IProduct) => {
        if (product && product.name && product.description) {
            setProductList([
                ...productList,
                product
            ]);
            refresh();
        }
    }
    const removeProduct = (index: number) => {
        productList.splice(index, 1);
        if (productList.length === 0) {
            setProductList([]);
        }
        else {
            setProductList([...productList]);
        }

        refresh();
    }
    const updateProduct = (product: IProduct) => {
        productList.splice(selectedIndex, 1, product);
        setProductList([...productList]);
        refresh();
    }
    const refresh = () => {
        setSelectedProduct(emptyProduct);
        setShowForm(false);
        setSelectedIndex(-1);
    }
    const setProductToEdit = (product: IProduct, index: number) => {
        setSelectedProduct(product);
        setSelectedIndex(index);
        setShowForm(true);
    }
    return <div className={styles.container}>

        {
            showForm ? <ProductForm product={selectedProduct}
                callBackEvent={selectedProduct.name.length > 0 ? updateProduct : addProduct}
                cancelEvent={refresh}
                index={selectedIndex} />
                :
                <div>
                    <div className="btnAdd">
                        <button type="button" onClick={() => setShowForm(true)}>Añadir</button>
                    </div>
                    <ProductList productList={productList} removeEvent={removeProduct} editEvent={setProductToEdit} />
                </div>

        }


    </div>
}

const ProductPageStyle = createUseStyles({
    container: {
        padding: 20,
        "& .productList": {
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            "& .productCard img ": {
                maxWidth: '100%',
                maxHeight: 300
            },
            "& .productCard": {
                boxShadow: "0px 0px 10px grey",
                flex: "0 0 30%",
                padding: 15,
                borderRadius: 15,
                display: "flex  ",
                flexDirection: "column",
                gap: 15,
                "& .btnZone": {
                    display: "flex",
                    justifyContent: "space-between",
                }
            },

        },
        "& .productForm": {
            width: "80%",
            margin: "auto"
        },
        "& .productForm form > div": {
            display: "flex",
            flexDirection: "column",
            paddingBottom: 10,
        },
        "& .productForm form .buttonZone": {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            "& button": {
                width: "fit-content"
            }


        },
        "& .btnAdd": {
            display: "flex",
            justifyContent: "end"
        }


    }
})