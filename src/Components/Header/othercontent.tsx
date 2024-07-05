"use client"
import Link from "next/link";
import { useState, useEffect } from "react"

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

async function Other() {
    const categories = await getCategories();
    const categoryList = categories.map((categoryName: TCategories) => {
        return <li key={categoryName.slug}>
            <Link href={`/category/${categoryName.slug}`} style={{
                textDecoration: 'none',
                color: 'white'
            }}>{categoryName.name}</Link>
        </li>
    });
    return categoryList.slice(6);
}

export default function Hidden() {
    const [hidden, setHidden] = useState<boolean>(false);
    const [categoryList, setCategoryList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        (async () => {
            const categories = await getCategories();
            const categoryList = categories.map((categoryName: TCategories) => {
                return <li key={categoryName.slug}>
                    <Link href={`/category/${categoryName.slug}`} style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>{categoryName.name}</Link>
                </li>
            });
            setCategoryList(categoryList.slice(6));
        })();
    }, []);

    return (
        <div>
            <button onClick={() => setHidden(!hidden)} style={{
                    textDecoration: "none",
                    color: "white",
                    background: "none",
                    border: "none",
                    outline: "none",
            }}>{hidden? "<<": ">>"}</button>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'space-around',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#333',
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0",
                top: "51px"
            }}>
                {hidden && categoryList}
            </ul>
        </div>
    )
}