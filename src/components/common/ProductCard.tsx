import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";

export default function ProductCard({
    product,
}: {
    product: { id: number; name: string; price: number; description: string };
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md mb-4 w-96 flex justify-between"
        >
            <div>
                <h2 className="text-xl font-bold">{product.name}</h2>
                {isExpanded && (
                    <div>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-green-500 font-semibold">
                            ${product.price}
                        </p>
                    </div>
                )}
            </div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
            >
                {isExpanded ? (
                    <MdArrowDropUp size={24} />
                ) : (
                    <IoMdArrowDropdown size={24} />
                )}
            </button>
        </div>
    );
}
