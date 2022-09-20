const gradeKeys = [
    ['A', 4],
    ['A-', 3.7],
    ['B+', 3.3],
    ['B', 3],
    ['B-', 2.7],
    ['C+', 2.3],
    ['C', 2],
    ['C-', 1.7],
    ['D+', 1.3],
    ['D', 1],
    ['F', 0],
];

const gradeMap = new Map(gradeKeys);

const gradeCalculator = (gradeArr) => {
    const initialValue = 0;
    const gradeTotal = gradeArr.reduce((acc, grade) => {
        return acc + gradeMap.get(grade);
    }, initialValue);
    
    return gradeTotal/gradeArr.length;
    
}

console.log(gradeCalculator(['A', 'B', 'F']))