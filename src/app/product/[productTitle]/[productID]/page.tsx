


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

type TProduct = {
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


async function getProductData(url: string): Promise<TProduct> {
    const data: TProduct = await fetch(url)
        .then(res => res.json());
    return data;
}


export default async function Product({ params }: { params: { productTitle: string , productID: number} }) {

    const productID = params.productID;
    const url = `https://dummyjson.com/products/${productID}`

    const productData = (await getProductData(url));




    return(
        <div>
            {productID}
            <pre>
                {JSON.stringify(productData, null, 2)} 
            </pre>
        </div>
    )
}