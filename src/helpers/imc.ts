export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    bmi: number[];
    result?: number;
}

export const levels: Level[] = [
    { title: 'Thinness', color: '#96A3AB', icon: 'down', bmi: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', bmi: [18.6, 24.9] },
    { title: 'Overweight', color: '#E2B036', icon: 'down', bmi: [25, 30] },
    { title: 'Obese', color: '#C3423F', icon: 'down', bmi: [30.1, 99] }
]

export const calculateBMI = (height: number, weight: number) => {
    const bmi = weight / (height * height)

    for (let i in levels) {
        if (bmi >= levels[i].bmi[0] && bmi < levels[i].bmi[1]) {
            levels[i].result = bmi
            return levels[i]
        }
    }

    return null
}