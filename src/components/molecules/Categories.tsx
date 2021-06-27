import NavItem from "@atoms/NavItem";

interface ICategory {
  title: string;
  goTo: string;
}

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col items-center w-1/6 h-full bg-gray-500">
      {categories.map((category: ICategory) => (
        <NavItem title={category.title} goTo={category.goTo} />
      ))}
    </div>
  );
};

export default Categories;
