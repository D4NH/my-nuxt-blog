export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        const current = shuffled[i];
        const target = shuffled[j];

        if (current !== undefined && target !== undefined) {
            shuffled[i] = target;
            shuffled[j] = current;
        }
    }

    return shuffled;
}
