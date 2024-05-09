import Link from 'next/link';

async function getProductLists() {
    const res = await fetch('http://localhost:4000/product', {next: { revalidate: 0 }} );
    return res.json();
}

export default async function ProductList() {
    const productTitle = "Yum! Yumm! Yummy!";
    const showProductLists = await getProductLists();
  return (
    <section className="max-w-screen-xl mx-auto">
        <div className="py-8 mx-4">
            <h2 className="text-2xl font-medium text-primary font-Shrikhand text-center mb-6">{productTitle}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">

                {showProductLists.map((showProductList) => (
                    <div key={showProductList.id} className="bg-white shadow-2xl rounded-3xl overflow-hidden group transition duration-200 transform hover:scale-105">
                        <div className="relative bg-cover bg-no-repeat bg-center py-32" style={{backgroundImage: `url(${showProductList.image})`}}>
                        </div>

                        <div className="py-4 px-2 text-primary ">
                            <div>
                                <p className="font-medium mb-2">{showProductList.title}</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">Ksh {showProductList.price} /=</p>
                                </div>

                                <div>
                                    <Link href={`/product/${showProductList.slug}`} className="block px-6 py-2 text-center text-sm cursor-pointer text-white font-medium primary-grad-to-br rounded-3xl hover:text-secondary">Order</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
  )
}
