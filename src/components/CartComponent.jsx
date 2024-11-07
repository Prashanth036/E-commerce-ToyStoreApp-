import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { cancelCart, decrement, increment, removeProduct } from "../reduxStore/reducers/productReducer";
import { useNavigate } from "react-router-dom";


let styles = {
    container: "p-4",
    name: "font-semibold w-[45%]",
    close: "bg-red-600 rounded-md text-white p-1",
    buttons:"text-xl font-bold w-[1%]",
    items:"border rounded-lg  px-2 border-black w-[10%]"
}

export const CartComponent = (setOpenModal, openModal) => {
    const [addProduct, setAddProduct] = useState({
        productName: "",
        totalItems: 0
    });
    const [products, setProducts] = useState([])
    let navigate=useNavigate()
    const product = useSelector((state) => state.products);
    const dispatch=useDispatch()
    useEffect(() => {
        setProducts(product.filter((_, index) => index !== 0));
    }, [product]);

    function incrementProduct(i){
        dispatch(increment({id:i+1}
            
        ))
    }
    function decrementProduct(i){
        dispatch(decrement({id:i+1}
        ))
    }
    function handleDelete(i){
        dispatch(removeProduct({
            id:i+1
        }))

    }


    if (products.length == 0) {
        return <p className="mx-4 p-4 " style={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>Cart is Empty</p>

    }

    return (
        <>
            <div className={styles.container} style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}>
                <div className="flex justify-around font-bold py-2">
                    <div>ToyCar(Product)</div>
                    <div>Quantity</div>
                </div>
                <hr className="border-1 border-black" />
                <div className="py-3">
                    {products.map((e, i) => {
                        return <>
                            <div className="flex justify-between py-1" key={i}>

                                <div className={styles.name}>{e.productName.slice(0, 10)}</div>
                                <button onClick={(ele)=>decrementProduct(i)}
                                    disabled={e.totalItems==0}
                                    className={styles.buttons}
                                    >-</button>
                                <div className={styles.items}>{e.totalItems}</div>
                                <button onClick={(e)=>incrementProduct(i)}
                                    disabled={e.quantity==e.totalItems}
                                    className={styles.buttons}
                                    >+</button>
                                <p className="text-green-600 w-[6%]">${e.price}</p>
                                <button onClick={(e)=>handleDelete(i)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-600 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </button>
                            </div>

                        </>


                    })}
                </div>
                <div className="py-1 flex justify-evenly font-bold ">
                    <div>Total Price</div>
                    <div className="text-green-600">${products.reduce((total, product) => total + product.price, 0).toFixed(2)}</div>
                </div>
                <hr className="border-1 border-black" />
                <div className="flex justify-end py-2 pt-3">
                    <button className={styles.close}
                    onClick={()=>(dispatch(cancelCart()),setOpenModal(!openModal))}
                    >Cancel</button>
                    <button onClick={()=>navigate("/checkout")} className="bg-green-600 p-1 text-white rounded-md mx-1">Checkout</button>
                </div>
            </div>
        </>
    )
}