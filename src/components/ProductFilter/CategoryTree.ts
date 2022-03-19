import { Category } from "./CategoryPicker";

interface CategoryNode {
  ID: number;
  name: string;
  children: CategoryNode[];
}

const items: Category[] = [
  {
    ID: 1,
    name: "Construction toys",
  },
  {
    ID: 2,
    name: "LEGO",
    parentCategoryID: 1,
  },
  {
    ID: 3,
    name: "F1 LEGO",
    parentCategoryID: 2,
  },
  {
    ID: 4,
    name: "RC LEGO",
    parentCategoryID: 2,
  },
  {
    ID: 5,
    name: "Building blocks",
    parentCategoryID: 1,
  },
  {
    ID: 6,
    name: "Cars",
  },
];

const CreateTree = (categories: Category[]): CategoryNode[] => {
  let idx = 0;

  const nodes = categories.map((c) => {
    return { ID: c.ID, name: c.name, children: [] } as CategoryNode;
  });

  const idMapping = new Map(nodes.map((n) => [n.ID, idx++]));

  const tree: CategoryNode[] = [];

  categories.forEach((c) => {
    if (c.parentCategoryID === null) {
      tree.push({ ...c, children: [] });
    }

    const parentCategory = nodes[0];
    parentCategory.children = [
      ...(parentCategory.children || []),
      { ID: c.ID, name: c.name, children: [] },
    ];
  });

  return tree;
};

export default CreateTree;
