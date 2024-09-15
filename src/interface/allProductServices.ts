import { AxiosError, AxiosResponse } from "axios"

export interface AxiosResponseAllProductList {
    data?:AxiosDataAllProductList
    status: number | undefined
    statusText?:string | undefined
    error?: AxiosError<AxiosResponse<any, any>, any> | AxiosResponse<AxiosResponse<any, any>, any> | undefined
}

export interface AxiosDataAllProductList {
    products: AllProductList[]
    total: number
    skip: number
    limit: number
}

export interface AxiosResponseSingleProduct{
  data?:AllProductList
  status: number | undefined
  statusText?:string | undefined
  error?: AxiosError<AxiosResponse<any, any>, any> | AxiosResponse<AxiosResponse<any, any>, any> | undefined
}

export interface AllProductList {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    images: string[]
    thumbnail: string
    favorite?:number
    cartCount?:number
}
  
  export interface Dimensions {
    width: number
    height: number
    depth: number
  }
  
  export interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }
  
  export interface Meta {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }