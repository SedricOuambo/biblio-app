import Image from "next/image";
import logo from "@/public/react.webp";

export default function Logo({ setPage }: { setPage: (page: string) => void }) {
    return (
        <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setPage("accueil")}
        >
            <Image
                src={logo}
                alt="Logo Biblio-app"
                width={40}
                height={40}
                priority
            />
            <span className="text-lg font-semibold text-slate-800">
                Biblio-app
            </span>
        </div>
    );
}
