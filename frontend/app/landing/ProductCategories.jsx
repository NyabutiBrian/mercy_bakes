import Link from 'next/link';

async function getProductCategories() {
    const res = await fetch('http://localhost:4000/category', {next: { revalidate: 0 }} );
    return res.json();
}

export default async function ProductCategories() {
    const categoryTitle = "Treats";
    const categoriesLists = await getProductCategories();
  return (
    <section className="max-w-screen-xl mx-auto scroll-m-16" id="categories">
        <div className="py-8 mx-4">
            <h2 className="text-2xl font-medium text-primary font-Shrikhand text-center mb-6">{categoryTitle}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {categoriesLists.map((categoriesList) => (
                    <div key={categoriesList.id}>
                        <div className="relative rounded-tr-3xl rounded-bl-3xl overflow-hidden group bg-cover bg-no-repeat bg-center py-32" style={{backgroundImage: `url(${categoriesList.image})`}}>
                            <Link href="/category" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-Shrikhand font-medium group-hover:bg-opacity-60 transition">{categoriesList.title}</Link>
                        </div>
                    </div>
                ))}

                {categoriesLists.length === 0 && (
                    <h2 className="text-2xl font-medium text-primary font-Shrikhand text-center mb-6">No Treats for Now!</h2>
                )}
            </div>
        </div>
    </section>
  )
}
