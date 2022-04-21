export interface CategoryCover {
  id: number;
  name: string;
  imgURL?: string;
}

export interface CategoryItem {
  id: number;
  name: string;
  parentCategoryID?: number;
}
