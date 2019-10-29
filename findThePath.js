function findPath(adj, s, start) {
  let path = [start];

  for (let i = 1; i < s.length; i++) {
    let code = s[i].charCodeAt() - "A".charCodeAt();
    if (adj[start][code] || adj[code][start]) {
      start = code;
      path.push(code);
    } else if (adj[start][code + 5] || adj[code + 5][start]) {
      start = code + 5;
      path.push(code + 5);
    } else {
      return null;
    }
  }

  return path;
}

function main() {
  const adj = Array.from({ length: 10 }, () => Array(10).fill(false));

  adj[0][1] = true;
  adj[1][2] = true;
  adj[2][3] = true;
  adj[3][4] = true;
  adj[4][0] = true;
  adj[0][5] = true;
  adj[1][6] = true;
  adj[2][7] = true;
  adj[3][8] = true;
  adj[4][9] = true;
  adj[5][7] = true;
  adj[7][9] = true;
  adj[9][6] = true;
  adj[6][8] = true;
  adj[8][5] = true;

  // Path to be checked
  const s = "ABBECCD";
  const path =
    findPath(adj, s, s[0].charCodeAt() - "A".charCodeAt()) ||
    findPath(adj, s, s[0].charCodeAt() - "A".charCodeAt() + 5);

  if (path) {
    console.log(path.join(""));
  } else {
    console.log("-1");
  }
}

main();
