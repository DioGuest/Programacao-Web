// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join('\t'));
    }
  }
  
  // Função para calcular a transposta de uma matriz
  function calcularTransposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    
    const transposta = new Array(colunas);
    for (let i = 0; i < colunas; i++) {
      transposta[i] = new Array(linhas);
      for (let j = 0; j < linhas; j++) {
        transposta[i][j] = matriz[j][i];
      }
    }
    
    return transposta;
  }
  
  // Matriz A
  const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("Matriz A:");
  imprimirMatriz(matrizA);
  
  // Calcula e imprime a transposta da matriz A
  const matrizTransposta = calcularTransposta(matrizA);
  console.log("\nMatriz Transposta:");
  imprimirMatriz(matrizTransposta);
  