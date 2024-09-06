import { useDispatch, useSelector } from "react-redux"
import { setFetchProductAll } from "../../store/FetchProductSlice"
import { setProduct } from "../../store/ProductDataSlice";
import { useEffect } from "react";
import { allProductListServices } from "../../services/allProductList";
import { RootState } from "../../store/store";
import { AllProductList } from "../../interface/allProductServices";

function useFilterProduct() {
  const dispatch = useDispatch();
  // const fetchProductAll = useSelector((state: RootState) => state.fetchProductAll.fetchProductAll)
  // const productAll = useSelector((state: RootState) => state.ProductAll.product)

  function filterProduct (data : AllProductList[]) {
    const productData = data
    return productData
  }

  async function callProduct() {

    dispatch(setProduct({ data: [], loading: true, error: null }))

    const productData = await allProductListServices.getAllProduct();
    if (productData.status === 200) {
      const allProduct = productData.data?.products || [];
      dispatch(setFetchProductAll([...allProduct]))
      const filterData = filterProduct([...allProduct])
      dispatch(setProduct({ data: filterData, loading: false, error: null }))
    }else{
      dispatch(setProduct({ data: [], loading: false, error: productData.error || null }))
    }
  }

  useEffect(() => {
    callProduct();
  }, [])


  return {}
}

export { useFilterProduct }