"use client";

import { useState } from "react";

export default function Documents() {
    const [livres, setLivres] = useState<string[]>([]);
    const [titreLivre, setTitreLivre] = useState("");

    const ajouterLivre = () => {
        const titre = titreLivre.trim();
        if (!titre) return;

        setLivres((listeActuelle) => [...listeActuelle, titre]);
        setTitreLivre("");
    };

    return (
        <section className="mx-auto max-w-lg space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">
                Gestion des livres
            </h1>

            <div className="flex flex-col gap-3 sm:flex-row">
                <input
                    type="text"
                    value={titreLivre}
                    onChange={(event) => setTitreLivre(event.target.value)}
                    placeholder="Titre du livre"
                    className="flex-1 rounded-md border border-slate-300 px-3 py-2"
                />
                <button
                    type="button"
                    onClick={ajouterLivre}
                    className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
                >
                    Ajouter
                </button>
            </div>

            <div>
                <h2 className="mb-2 text-lg font-semibold">Liste des livres</h2>
                {livres.length === 0 ? (
                    <p className="text-sm text-slate-500">
                        Aucun livre pour le moment.
                    </p>
                ) : (
                    <ul className="space-y-2">
                        {livres.map((livre) => (
                            <li
                                key={livre}
                                className="rounded-md border border-slate-200 bg-white px-3 py-2"
                            >
                                {livre}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
