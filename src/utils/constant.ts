export const PRODUCT_BASE_URL: string = "https://dummyjson.com/products"

export const CATEGORY_LIST = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
]

export const SORT_DATA = [
  { name: "Name : A-Z", value: "A-Z" },
  { name: "Price : Min - Max", value: "Min - Max" },
  { name: "Price : Max - Min", value: "Max - Min" },
]



import gucciProduct from "../../public/image/gucci.png"
import gucciText from "../../public/image/GucciText.png"
import appleWatchProduct from "../../public/image/AppleWatch-01.png"
import appleWatchText from "../../public/image/AppleWatchText.png"
import asusProduct from "../../public/image/asus-01.png"
import asusText from "../../public/image/asusText.png"
import hesheProduct from "../../public/image/heshe-01.png"
import hesheText from "../../public/image/hesheText.png"

export const heroData = [
  { background: "bg-appleWatch", productImg: appleWatchProduct, productText: appleWatchText, id: 106 },
  { background: "bg-gucci", productImg: gucciProduct, productText: gucciText, id: 10 },
  { background: "bg-asus", productImg: asusProduct, productText: asusText, id: 79 },
  { background: "bg-heshe", productImg: hesheProduct, productText: hesheText, id: 173 },
]