'use client';

import React from "react";
import Link from "next/link";
import { useUnit } from "effector-react"
import { model } from "./model";

export const Publication = () => {
    const [a, b] = useUnit([model.$a, model.$b]);

    return (<article>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <Link href={`/publication/${Math.random()}`} >Next Publication</Link>
    </article>)
}
