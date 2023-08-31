function multiplyMatrices(matrixA, matrixB) {
    const numRowsA = matrixA.length;
    const numColsA = matrixA[0].length;
    const numRowsB = matrixB.length;
    const numColsB = matrixB[0].length;

    if (numColsA !== numRowsB) {
        return "Não é possível calcular";
    }

    const resultMatrix = new Array(numRowsA);
    for (let i = 0; i < numRowsA; i++) {
        resultMatrix[i] = new Array(numColsB).fill(0);
    }

    for (let i = 0; i < numRowsA; i++) {
        for (let j = 0; j < numColsB; j++) {
            for (let k = 0; k < numColsA; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return resultMatrix;
}

// Exemplo de matrizes para teste
const matrixA = [
    [2, 3],
    [4, 5],
];

const matrixB = [
    [1, 2],
    [3, 4],
];

const result = multiplyMatrices(matrixA, matrixB);
if (typeof result === 'string') {
    console.log(result); // Saída: "Não é possível calcular"
} else {
    console.log(result); // Saída: [ [ 11, 16 ], [ 23, 34 ] ]
}
