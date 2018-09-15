//5) Construa uma função que recebe dois arranjos e devolve a Intersecção destes conjuntos.
function intersect(a1, a2){
  return [...new Set(a1)].filter(x => new Set(a2).has(x));
}

