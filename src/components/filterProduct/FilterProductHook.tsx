import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

import { allProductListServices } from "../../services/allProductList";
import { setFetchProductAll } from "../../store/FetchProductSlice"
import { setProduct } from "../../store/ProductDataSlice";
import { RootState } from "../../store/store";

import { AllProductList } from "../../interface/allProductServices";

function useFilterProduct() {
  const dispatch = useDispatch();
  const { watch, register } = useForm()
  const [max, setMax] = useState(37000)
  const [min, setMin] = useState(0)
  const category = watch("category")
  const search = watch("search")
  const sort = watch("sort")
  const fetchProductAll = useSelector((state: RootState) => state.fetchProductAll.fetchProductAll)
  // const productAll = useSelector((state: RootState) => state.ProductAll.product)


  function sortBy(sort: "Min - Max" | "Max - Min" | "A-Z" | undefined, data: AllProductList[]) {
    switch (sort) {
      case "Min - Max":
        return data.sort((a, b) => a.price - b.price);
      case "Max - Min":
        return data.sort((a, b) => b.price - a.price);
      case "A-Z":
        return data.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 0);
      default: return data
    }
  }


  function filterProduct(data: AllProductList[]) {

    const favProductData = data.map((product) => {
      const fav = JSON.parse(localStorage.getItem("favorite") || "[]")
      if (fav.find((item: AllProductList) => {
        return item.id == product.id
      })) {
        return { ...product, favorite: 1, cartCount: 0 }
      }
      return { ...product, favorite: 0, cartCount: 0 }
    })

    const categoryProduct = favProductData.filter((product) => {
      if (category === 'all' || category === undefined) { return product }
      return category === product.category
    })

    const priceMaxMin = categoryProduct.filter((product) => {
      return product.price >= min && product.price <= max
    })

    const sortData = sortBy(sort,priceMaxMin)

    const searchProduct = sortData.filter((product)=>{
      if(search === undefined){return product}
      return product.title.toLocaleLowerCase().includes(search?.toLocaleLowerCase())
    })

    return searchProduct

  }


  useEffect(() => {
    const filterData = filterProduct(fetchProductAll)
    dispatch(setProduct({ data: filterData, loading: false, error: null }))

  }, [max, min, category, search, sort])


  async function callProduct() {

    dispatch(setProduct({ data: [], loading: true, error: null }))

    const productData = await allProductListServices.getAllProduct();
    if (productData.status === 200) {
      const allProduct = productData.data?.products || [];
      dispatch(setFetchProductAll([...allProduct]))
      const filterData = filterProduct([...allProduct])

      dispatch(setProduct({ data: filterData, loading: false, error: null }))
    } else {
      dispatch(setProduct({ data: [], loading: false, error: productData.error || null }))
    }
  }

  useEffect(() => {
    callProduct();
  }, [])


  return {
    fieldCategory: register("category"),
    fieldSearch: register("search"),
    fieldMin(n: number) { setMin(n) },
    fieldMax(n: number) { setMax(n) },
    fieldSort: register("sort")
  }
}

export { useFilterProduct }