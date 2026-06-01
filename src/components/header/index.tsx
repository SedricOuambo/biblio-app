import Logo from "@/components/common/Logo";
import Navbar from "./Navbar";

export default function Header({
    setPage,
}: {
    setPage: (page: string) => void;
}) {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Logo setPage={setPage} />
                <Navbar setPage={setPage} />
            </div>
        </header>
    );
}
