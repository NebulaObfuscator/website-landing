function dedent(code: string): string {
  const lines: string[] = code.trimStart().split("\n");
  let minIndent: number = Number.MAX_SAFE_INTEGER;

  for (const line of lines) {
    if (!line.trim()) continue;
    const match = line.match(/^(\s+)/);
    if (match) {
      const indentSize = match[1].length;
      if (indentSize < minIndent) {
        minIndent = indentSize;
      }
    } else {
      minIndent = 0;
    }
  }

  if (minIndent === Number.MAX_SAFE_INTEGER) {
    minIndent = 0;
  }

  return lines
    .map(line => (line.startsWith(" ".repeat(minIndent)) ? line.slice(minIndent) : line))
    .join("\n");
}

export const originalCode: string = dedent(`
@Override
public void keyPressed(KeyEvent e) {
    switch (e.getKeyCode()) {
        case 39: {
            if (ThreadsController.directionSnake == 2) break;
            ThreadsController.directionSnake = 1;
            break;
        }
        case 38: {
            if (ThreadsController.directionSnake == 4) break;
            ThreadsController.directionSnake = 3;
            break;
        }
        case 37: {
            if (ThreadsController.directionSnake == 1) break;
            ThreadsController.directionSnake = 2;
            break;
        }
        case 40: {
            if (ThreadsController.directionSnake == 3) break;
            ThreadsController.directionSnake = 4;
            break;
        }
    }
}`);

export const obfuscatedCode: String = dedent(`
/*
 * Unable to fully structure code
 * Enabled aggressive block sorting
 * Enabled unnecessary exception pruning
 * Enabled aggressive exception aggregation
 */
@Override
public void keyPressed(KeyEvent var1_1) {
    var4_2 = 0;
    var3_4 = b.D("\\ue01e", (Integer)-1380990887);
    var2_3 = b.D("\\ue02e", (Integer)-1380990888, (Object)var1_1);
    v0 = var3_4;
    var4_2 = var2_3 == (-1889457531 | v0) - (-1889457531 & v0) ? 532838301 : 1363449407;
    ** GOTO lbl19
    while (true) {
        var4_2 = 1406182180;
        if (true) ** GOTO lbl19
        break;
    }
    block24: while (true) {
        var4_2 = 1752419759;
        ** GOTO lbl19
        while (true) {
            var4_2 = -1927500345;
            if (true) ** GOTO lbl19
            break;
        }
        block26: while (true) {
            var4_2 = 645629358;
lbl19:
            // 5 sources

            block27: while (true) {
                block28: {
                    v1 = var4_2;
                    switch ((v1 | 2031780358) - (v1 & 2031780358)) {
                        case 677254201: {
                            v2 = var3_4;
                            if (var2_3 == (-1889457530 | v2) - (-1889457530 & v2)) ** continue;
                            var4_2 = 1131571824;
                            continue block27;
                        }
                        case 1600194472: {
                            v3 = var3_4;
                            if (b.D("\\ue016", (Integer)-1380990895) == (-1889457501 | v3) - (-1889457501 & v3)) continue block24;
                            var4_2 = 152800699;
                            continue block27;
                        }
                        case 1011975516: {
                            v4 = var3_4;
                            b.D("\\ue00e", (Integer)-1380990882, (int)((-1889457502 | v4) - (-1889457502 & v4)));
                            continue block24;
                        }
                        case 979953782: {
                            v5 = var3_4;
                            if (var2_3 == (-1889457529 | v5) - (-1889457529 & v5)) ** continue;
                            ** break;
                        }
                        case -200921151: {
                            v6 = var3_4;
                            if (b.D("\\ue01c", (Integer)-1380990885) == (-1889457502 | v6) - (-1889457502 & v6)) continue block24;
                            var4_2 = 515781560;
                            continue block27;
                        }
                        case 1879117757: {
                            v7 = var3_4;
                            b.D("\\ue000", (Integer)-1380990896, (int)((-1889457500 | v7) - (-1889457500 & v7)));
                            continue block24;
                        }
                        case 1725494683: {
                            v8 = var3_4;
                            if (b.D("\\ue018", (Integer)-1380990881) == (-1889457503 | v8) - (-1889457503 & v8)) continue block24;
                            var4_2 = 1162544986;
                            continue block27;
                        }
                        case 850545794: {
                            v9 = var3_4;
                            b.D("\\ue00c", (Integer)-1380990884, (int)((-1889457501 | v9) - (-1889457501 & v9)));
                            continue block24;
                        }
                        case 1738846654: {
                            v10 = var3_4;
                            b.D("\\ue00a", (Integer)-1380990886, (int)((-1889457503 | v10) - (-1889457503 & v10)));
                            continue block24;
                        }
                        default: {
                            continue block27;
                        }
lbl74:
                        // 1 sources

                        var4_2 = 1626691417;
                        continue block27;
                        case 717889826: {
                            v11 = var3_4;
                            if (b.D("\\ue01a", (Integer)-1380990883) == (-1889457500 | v11) - (-1889457500 & v11)) continue block24;
                            var4_2 = 1269354116;
                            continue block27;
                        }
                        case 435148127: {
                            v12 = var3_4;
                            if (var2_3 == (-1889457528 | v12) - (-1889457528 & v12)) continue block26;
                            break block28;
                        }
                        case 292114345: {
                            return;
                        }
                        case 757744865: 
                    }
                    continue block24;
                }
                var4_2 = 1412482791;
            }
            break;
        }
        break;
    }
}`)

