import { useState } from "react";
import ProductCard from "@/components/common/ProductCard";

const ProductsList = [
    {
        id: 1,
        name: "Livre 1",
        price: 19.99,
        description: "Un livre passionnant sur la programmation.",
    },
    {
        id: 2,
        name: "Livre 2",
        price: 29.99,
        description: "Un livre intéressant sur le développement web.",
    },
    {
        id: 3,
        name: "Livre 3",
        price: 39.99,
        description: "Un livre complet sur les bonnes pratiques de conception.",
    },
];

export default function Home() {
    return (
        <>
            <section className="bg-blue-500 p-8 text-white text-sm rounded-lg shadow-3xl">
                Bonjour le monde!
            </section>
            <section className="mt-8">
                {ProductsList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
}
