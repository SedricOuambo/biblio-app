import Link from "next/link";
import navItems from "@/utils/navItems.json";

export default function Navbar({
    setPage,
}: {
    setPage: (page: string) => void;
}) {
    return (
        <nav aria-label="Navigation principale">
            <ul className="flex items-center gap-5 text-sm font-medium text-slate-700">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <button
                            type="button"
                            onClick={() => setPage(item.label.toLowerCase())}
                            className="transition-colors hover:text-blue-600 cursor-pointer"
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
