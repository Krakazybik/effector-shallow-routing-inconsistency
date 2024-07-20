import { createEffect, createEvent, createStore, sample } from "effector";
import { handleRand } from "./lib";

const getAll = createEvent();

const getAFx = createEffect(() => handleRand('A'));
const getBFx = createEffect(() => handleRand('B'));

const $a = createStore<string | null>(null).on(getAFx.doneData, (_, a) => a)
const $b = createStore<string | null>(null).on(getBFx.doneData, (_, b) => b)

sample({
    clock: getAll,
    target: [getAFx, getBFx],
})

export const model = {
    getAll,
    $a,
    $b,
}
