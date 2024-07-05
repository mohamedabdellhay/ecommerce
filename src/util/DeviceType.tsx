"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export const getDeviceType = () => {
    const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;

    if (/mobile/i.test(userAgent)) {
        return 'Mobile';
    }

    if (/tablet/i.test(userAgent) || (/(iPad|PlayBook)/.test(userAgent) || (/Android/.test(userAgent) && !/Mobile/.test(userAgent)))) {
        return 'Tablet';
    }

    if (/iPad|Macintosh/.test(userAgent) && 'ontouchend' in document) {
        return 'Tablet';
    }

    return 'Desktop';
};

type TCategories = {
    slug: string;
    name: string;
    url: string;
}

async function fetchCategories(): Promise<TCategories[]> {
    const data: TCategories[] = await fetch('https://dummyjson.com/products/categories')
        .then(res => res.json());
    return data;
}

export default function DeviceType() {
    const [DType, setDType] = useState<string>('Desktop');
    const [categories, setCategories] = useState<TCategories[]>([]);

    useEffect(() => {
        setDType(getDeviceType());

        const getCategories = async () => {
            const categoryData = await fetchCategories();
            setCategories(categoryData);
        };

        getCategories();
    }, []);

    const categoryItems = categories.map((category: TCategories) => (
        <li key={category.slug}>
            <Link href={`/category/${category.slug}`} style={{ textDecoration: 'none', color: 'white' }}>
                {category.name}
            </Link>
        </li>
    ));
    const categoryFirstData = categoryItems.slice(0, 6);
    const categorySecondData = categoryItems.slice(6);

    return (
        <div>
            <header>

                <nav>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-around',
                        gap: '1rem',
                        padding: '1rem',
                        backgroundColor: '#333',
                        position: "relative"
                    }}>
                        <li>
                            <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                                Home
                            </Link>
                        </li>
                        {categoryFirstData}
                    </ul>
                </nav>
            </header>
        </div>
    );
}
