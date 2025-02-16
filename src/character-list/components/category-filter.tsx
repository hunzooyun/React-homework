interface Props {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

function CategoryFilter({ selectedCategory, setSelectedCategory }: Props) {
  const categories = ['전체', '전사', '마법사', '도적', '궁수', '해적'];

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
