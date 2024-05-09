async function getProductDetails(slug) {
    const res = await fetch(`http://localhost:4000/product/${slug}`, {next: { revalidate: 10 }} );
    return res.json();
}

export default async function ProductDetails({ params }) {
    // const showProductDetails = await getProductDetails(params.slug);
    const showProductDetails =  params.slug
  return (
    <div>{showProductDetails}</div>
  )
}