import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../reduxStore/reducers/productReducer";
import { useState } from "react";



export const ProductList = ({ dataList, setOpenModal, openModal }) => {
    const [product, setProduct] = useState({
        productName: "",
        totalItems: 0
    })
    const [disableButton, setDisableButton] = useState(false);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    function handleClick(name, price, stock, id) {
        dispatch(addProduct({
            id: id,
            productName: name,
            totalItems: 1,
            price: price,
            actualPrice: price,
            quantity: stock
        }))


        if (openModal !== true) {
            setOpenModal(!openModal);
        }
    }
    const imgArray = [
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1517676109075-9a94d44145d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1524102724373-bcf6ed410592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww"
    ];

    function randomImg() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        const id = getRandomInt(1, 7)
        return imgArray[id]
    }
    function strSlice(str) {
        if (str.length > 30) {
            return str = str.slice(0, 60)
        }
        else {
            return str = str.slice(0, 10)

        }
    }
    function editQuantity(stock,id) {
        const foundProduct = products.find((ele) => ele.id === id);

        if (foundProduct) {
            const updatedStock = parseInt(stock) - parseInt(foundProduct.totalItems);
            return updatedStock
        } else {
            return stock
        }
    }
    
    return (
        <>

            {dataList !== "" && dataList.map((e, i) => (
                <div className="relative group pb-4" key={i} style={{
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}>
                    <div className="overflow-hidden aspect-w-1 aspect-h-1">
                        <img className="object-cover w-full h-48 transition-all duration-300 group-hover:scale-125" src={randomImg()} alt="" />
                    </div>
                    <div className="absolute left-3 top-3">
                        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
                    </div>
                    <div className="flex items-start justify-between mt-4 space-x-4">
                        <div className="px-1">
                            <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                <a href="#" title="">{strSlice(e.name)}</a>
                            </h3>
                            <div className="flex items-center mt-2.5 space-x-px">
                                {/* Star Ratings */}
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <svg className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-right px-1">
                            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$ {e.price}</p>
                            <div className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
                                Quantity:
                                {
                                    editQuantity(e.stock_quantity,e.id)
                                }</div>
                        </div>
                    </div>
                    <div className="font-[poppins] px-2 pt-2">{strSlice(e.description)}</div>
                    <button className="p-1 px-4 ml-44 mt-1 font-[roboto] bg-slate-500 text-white rounded-sm text-end"
                        onClick={(ele) => handleClick(e.name, e.price, e.stock_quantity, e.id)}
                        disabled={products.find(ele => ele.productName == e.name)}
                    >Add to cart</button>
                </div>
            ))}

        </>
    )
}