export interface CategoryCover {
  ID: number;
  name: string;
  imgURL?: string;
}

export interface CategoryListItem {
  ID: number;
  name: string;
  parentCategoryName?: string;
}
