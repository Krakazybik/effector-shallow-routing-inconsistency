import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href={`/publication/${Math.random()}`}>Publication</Link>
        </main>
    );
}


