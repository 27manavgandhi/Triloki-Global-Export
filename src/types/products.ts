export interface ProductVariety {
  name: string;
  description?: string;
}

export interface ProductSubcategory {
  id: string;
  name: string;
  description: string;
  image: string;
  varieties?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: ProductSubcategory[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  image: string;
  varieties?: ProductVariety[];
}