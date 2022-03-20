const FetchSomeCategories = async (count: number) => {
  const items = [
    { ID: 1, name: "Construction toys" },
    { ID: 2, name: "LEGO" },
    { ID: 3, name: "F1 LEGO" },
  ];

  /*const data = await fetch(
      `https:localhost:7202/api/categories?count=${count}`
    );
    const items = await data.json();*/
  //setCategories(items);
};

export default FetchSomeCategories;
