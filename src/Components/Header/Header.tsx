import Link from "next/link";
// import useDeviceType  from "@/components/util/DeviceType";
import { getDeviceType } from "@/components/util/DeviceType";



type TCategories = {
    slug: string;
    name: string;
    url: string;
}

async function getCategories(): Promise<TCategories[]> {
    const data: TCategories[] = await fetch('https://dummyjson.com/products/categories')
        .then(res => res.json());
    return data;
}

export default async function Header(){
    const category= (await getCategories()).map((categoryName : TCategories) => {
        return <li key={categoryName.slug}><Link href={`/category/${categoryName.slug}`} style={{
            textDecoration: 'none',
            color: 'white'
        }}>{categoryName.name}</Link></li>
    })
    const categoryFirstData = category.slice(0,6);
    const categorySecondData = category.slice(6,);
    const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
    console.log(userAgent)
    let device = "";
    if (/mobile/i.test(userAgent)) {
        device =  'Mobile';
    }
    if (/tablet/i.test(userAgent) || (/(iPad|PlayBook)/.test(userAgent) || (/Android/.test(userAgent) && !/Mobile/.test(userAgent)))) {
        device = 'Tablet';
    }
    if (/iPad|Macintosh/.test(userAgent) && 'ontouchend' in document) {
        device =  'Tablet';
    }else{
        device = 'Desktop';
    }
    

    if (device == "Mobile"){
        return <div>

        </div>;
    }
    return(
        <div>
            <header>
                <h3>{device}</h3>
                <nav>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent:'space-around',
                        gap: '1rem',
                        padding: '1rem',
                        // width: "100%",
                        backgroundColor: '#333',
                        position: "relative"
                    }}>
                        <li><Link href={'/'} style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>Home</Link></li>


                        {categoryFirstData}


                        
                        
                    </ul>
                </nav>
            </header>
        </div>
    )
}