class CategoryService {
  static async FetchCategories() {
    await fetch("https://localhost:7202/api/categories");

    /*const items = [
        {
          ID: 1,
          name: "Construction toys",
        },
        {
          ID: 2,
          name: "LEGO",
          parentCategoryName: "Construction toys",
        },
        {
          ID: 3,
          name: "F1 LEGO",
          parentCategoryName: "LEGO",
        },
      ];*/
  }

  static async FetchTopCategories() {}
}

export default CategoryService;
