class ProductService {
  static async GetMaxPrice() {
    await fetch("https://localhost:7202/api/products/maxprice");
    //const maxPrice = 10000;
  }
}

export default ProductService;
