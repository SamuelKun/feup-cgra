# Curvas e Superficies

## Malha Poligonal

Coleção de arestas, vértices e polígonos interligados de modo que cada aresta é apenas ligada por um ou dois polígonos.

Características da malha poligonal:
- Uma aresta liga 2 vértices.
- Um polígono é definido por uma sequência fechada de arestas.
- Uma aresta é ligada a um ou dois polígonos (adjacentes).
- Um vértice é partilhado pelo menos por 2 arestas.
- Todas as arestas fazem parte de algum polígono.

A estrutura de dados para representar a malha poligonal pode ter várias
configurações, que são avaliadas pelo espaço de memória e tempo de
processamento necessário para obter resposta, por exemplo, a:

- Obter todas as arestas que se unem num dado vértice.
- Determinar os polígonos que partilham uma aresta ou um vértice.
- Determinar os vértices ligados a uma aresta.
- Determinar as arestas de um polígono.
- Representar graficamente a malha.
- Identificar erros na representação, como falta de uma aresta, vértice ou polígono.

Como conseguir ter uma malha poligonal:

1. Índices
2. Apontadores para vértices
    - Cada vértice é guardado apenas uma vez em memória
    - A coordenada de um vértice é facilmente alterada
3. Apontadores para arestas
    - Continua a não ser imediato determinar quais as arestas que incidem sobre o mesmo vértice

## Curvas

Grau | Pontos | Número Inflexões
-- | -- | --
1 | 2 | 0
2 | 3 | 1
3 | 4 | 2
4 | 5 | 3

### Curvas cúbicas

Geralmente utilizam-se polinómios de terceiro grau para representar curvas. Por isso são denominadas de curvas cúbicas.