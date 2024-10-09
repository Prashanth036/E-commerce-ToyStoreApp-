import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { ProductList } from "./components/ProductList";
import { CartComponent } from "./components/CartComponent";


let low = 1;
let upper = 5;
export const Index = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [job, setJob] = useState("");
  const [pagArr, setPagArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const itemsPerPage = 4;
  const [pgNum, setPgNum] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("http://localhost:8080/products");
        setProducts(res.data);
        setData(res.data);
        updatePagination(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const updatePagination = (productList) => {
    const pages = Math.ceil(productList.length / itemsPerPage);
    setPagArr(Array.from({ length: pages }, (_, index) => index + 1));
    setCurrentPage(1);
  };
  console.log(low, upper)
  const handleUpdate = (e) => {
    const selectedCategory = e.target.value;
    setJob(selectedCategory);

    if (selectedCategory === "") {
      setData(products);
      updatePagination(products);
    } else {
      const filteredProducts = products.filter((product) => product.category === selectedCategory);
      setData(filteredProducts);
      updatePagination(filteredProducts);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = useMemo(
    () => data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [data, currentPage]
  );

  const styles = {
    cartOpen: "fixed bottom-0 right-0 p-2 w-[30%] bg-white",
    buttonclose: "px-2 py-1 text-red-600 text-2xl hover:bg-red-200",
  };

  return (
    <>
      <section className="py-1 bg-white sm:py-1 lg:py-6 relative">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Featured  Toy Cars</h2>
            <div>
              <form>
                <label htmlFor="product-category" className="block mb-2 text-sm font-medium text-gray-900">
                  Select ToyCar Category:
                </label>
                <select
                  id="product-category"
                  value={job}
                  onChange={handleUpdate}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Choose a category</option>
                  <option value="Suv">SUV</option>
                  <option value="Car">Sports Car</option>
                  <option value="Electric">Electric</option>
                  <option value="Campers">Trucks</option>
                </select>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 lg:mt-16 lg:gap-4">
            {paginatedData.length > 0 ? (
              <ProductList dataList={paginatedData} setOpenModal={setOpenModal} openModal={openModal} />
            ) : (
              <p>No products found</p>
            )}
          </div>

          {data.length > 0 && (
            <div id="pagination" className="mt-4 flex justify-center space-x-2">
              <><button onClick={() => (low--, upper--, setPgNum(!pgNum))}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="size-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

              </button>
              </>
              {
                pagArr.map((page, i) => {
                  // console.log(parseInt(pgNum.low));
                  // const low = parseInt(pgNum.low);
                  // const upper = parseInt(pgNum.upper);
                  // console.log(`Checking: i = ${i}, low = ${low}, upper = ${upper}`);

                  if (i > low && i < upper) {
                    return (
                      <button
                        key={page}
                        className={`px-4 py-2 border ${currentPage === page ? "bg-blue-900 text-white rounded-full" : "bg-gray-200 rounded-full"}`}
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </button>
                    );
                  }
                  return null;
                })
              }

              <><button onClick={() => (upper++, low++, setPgNum(!pgNum))}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>


              </button></>
            </div>
          )}
        </div>
      </section>

      {/* Cart Component */}
      <div
        className={styles.cartOpen}
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          zIndex: 10,
        }}
      >
        <div className="flex justify-between items-center" onClick={() => setOpenModal(!openModal)}>
          <span className="pr-28 p-2">Products Cart</span>
          <div className="flex space-x-2">
            <button className={styles.buttonclose} onClick={() => console.log("Cart minimized")}>
              -
            </button>
            <button className={styles.buttonclose} onClick={() => console.log("Cart closed")}>
              x
            </button>
          </div>
        </div>
        <div className={openModal ? "block" : "hidden"}>
          <CartComponent setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      </div>
    </>
  );
};
