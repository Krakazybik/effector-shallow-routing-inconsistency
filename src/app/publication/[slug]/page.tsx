import React from "react";
import { EffectorNext } from "@effector/next";
import { allSettled, fork, serialize } from "effector";
import { Publication, model } from "@/publication";

const Page = async () => {
    const scope = fork();

    await allSettled(model.getAll, { scope });

    const values = serialize(scope);

    return (
        <EffectorNext values={values}>
            <Publication />
        </EffectorNext>
    );
}

export default Page;
