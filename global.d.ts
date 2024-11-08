export type Products = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type Product = {
  id: number;
  title: string;
  description: string;
  category: Category;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: AvailabilityStatus;
  reviews: Review[];
  returnPolicy: ReturnPolicy;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export enum AvailabilityStatus {
  InStock = "In Stock",
  LowStock = "Low Stock",
}

export enum Category {
  Beauty = "beauty",
  Fragrances = "fragrances",
  Furniture = "furniture",
  Groceries = "groceries",
}

export const CATEGORIES = {
  all: 'All',
  [Category.Beauty]: "Beauty",
  [Category.Fragrances]: "Fragrances",
  [Category.Furniture]: "Furniture",
  [Category.Groceries]: "Groceries",
}

export type Dimensions = {
  width: number;
  height: number;
  depth: number;
}

export type Meta = {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

export enum ReturnPolicy {
  NoReturnPolicy = "No return policy",
  The30DaysReturnPolicy = "30 days return policy",
  The60DaysReturnPolicy = "60 days return policy",
  The7DaysReturnPolicy = "7 days return policy",
  The90DaysReturnPolicy = "90 days return policy",
}

export type Review = {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductCart extends Product {
  quantity: number;
}

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export const INITIAL_STATE: ProductCart[] = []