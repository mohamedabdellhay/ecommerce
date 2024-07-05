import ProductCard  from "@/components/Components/Product/Product"


type TReviews = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

type TMeta = {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string
}

type TDimensions = {
    width: number,
    height: number,
    depth: number
}

type TProduct =   {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: TDimensions,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: TReviews[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: TMeta,
    images: string[],
    thumbnail: string
}


async function getCategoryProducts(url: string): Promise<{products:TProduct[]}> {
    const data: {products:TProduct[]} = await fetch(url)
        .then(res => res.json());
    return data;
}


export default async function Category({ params }: { params: { categoryName: string } }) {

    const categoryName = params.categoryName;
    const url = `https://dummyjson.com/products/category/${categoryName}`

    const products = (await getCategoryProducts(url)).products;




    return(
        <div>
            <h2>Category: {categoryName[0].toLocaleUpperCase() + categoryName.slice(1,-1).replace('-', ' ')}</h2>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "20px",
                padding: "20px",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                {products.map((product: TProduct) => (
                    <div key={product.id}>
                        <ProductCard id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} rating={product.rating}/>
                    </div>
                ))}
            </div>
        </div>
    )
}