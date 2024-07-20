export const handleRand = (value: string) => {
    const rnd = Math.random();

    if (rnd > 0.7) {
        return `${value} - ${rnd}`
    }
    return null;
}


