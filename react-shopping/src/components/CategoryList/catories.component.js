import CategoryList from "./category.list.component";
const Categories = ({category}) =>{    

    return (
        <div className="categories-container">

            {category.map((category) => (
            <CategoryList key={category.id} category={category}></CategoryList>
            )
            )}
    
        </div>
    )

}

export default Categories;