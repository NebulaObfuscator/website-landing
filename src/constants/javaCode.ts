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
@Override
public void keyPressed(KeyEvent var1_1) {
    var4_2 = -1635583085;
    var3_3 = -1635583085 ^ var4_2;
    var2_4 = iiiiiiIiIi.iiiiiIIiii("oK", (Integer)-377509550, (Object)var1_1);
    var3_3 = var2_4 == (-1312412122 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("IK", (Integer)-377509549)) ? 274049144 ^ var4_2 : 1932505546 ^ var4_2;
    ** GOTO lbl14
lbl6:
    // 1 sources

    while (true) {
        var3_3 = 213964138 ^ var4_2;
        if (true) ** GOTO lbl14
        break;
    }
    block24: while (true) {
        var3_3 = 1496824668 ^ var4_2;
        if (true) ** GOTO lbl14
        block25: while (true) {
            var3_3 = -1084290194 ^ var4_2;
lbl14:
            // 4 sources

            block26: while (true) {
                switch (var3_3 ^ (42645133 ^ var4_2) ^ var4_2) {
                    case 519885523: {
                        iiiiiiIiIi.iiiiiIIiii("XC", (Integer)-377509530, (int)(-1312412160 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("oJ", (Integer)-377509527)));
                        break;
                    }
                    case -282592044: {
                        if (var2_4 != (-1312412123 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("Il", (Integer)-377509552))) {
                            var3_3 = -1571424529 ^ var4_2;
                            continue block26;
                        }
                        ** GOTO lbl53
                    }
                    case -741958338: {
                        iiiiiiIiIi.iiiiiIIiii("xw", (Integer)-377509632, (int)(-1312412153 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("KK", (Integer)-377509629)));
                        break;
                    }
                    case -1940003482: {
                        if (iiiiiiIiIi.iiiiiIIiii("KJ", (Integer)-377509623) == (-1312412158 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("KI", (Integer)-377509626))) break;
                        var3_3 = 2088040420 ^ var4_2;
                        continue block26;
                    }
                    case -528696582: {
                        iiiiiiIiIi.iiiiiIIiii("xK", (Integer)-377509628, (int)(-1312412159 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("Kw", (Integer)-377509625)));
                        break;
                    }
                    case -1517161189: {
                        iiiiiiIiIi.iiiiiIIiii("XS", (Integer)-377509526, (int)(-1312412158 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("oS", (Integer)-377509523)));
                        break;
                    }
                    case -985663934: {
                        if (iiiiiiIiIi.iiiiiIIiii("Ko", (Integer)-377509627) == (-1312412160 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("Kx", (Integer)-377509630))) break;
                        var3_3 = 1338953760 ^ var4_2;
                        ** GOTO lbl58
                    }
                    case 1046330353: {
                        if (var2_4 == (-1312412124 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("IC", (Integer)-377509551))) continue block25;
                        ** continue;
                    }
                    case 592922224: {
                        if (iiiiiiIiIi.iiiiiIIiii("oM", (Integer)-377509521) == (-1312412159 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("oP", (Integer)-377509524))) break;
                        var3_3 = 966375429 ^ var4_2;
                        ** GOTO lbl58
                    }
                    case 260143690: {
                        if (iiiiiiIiIi.iiiiiIIiii("oa", (Integer)-377509525) == (-1312412153 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("od", (Integer)-377509528))) break;
                        ** GOTO lbl60
                    }
                    case 77231839: {
                        return;
                    }
lbl53:
                    // 1 sources

                    var3_3 = -1819723948 ^ var4_2;
                    continue block26;
                    case -1865901964: {
                        if (var2_4 == (-1312412117 ^ var4_2 ^ iiiiiiIiIi.iiiiiIIiii("oO", (Integer)-377509522))) continue block24;
                        var3_3 = 1343532743 ^ var4_2;
                    }
lbl58:
                    // 4 sources

                    default: {
                        continue block26;
                    }
lbl60:
                    // 1 sources

                    var3_3 = -2097897523 ^ var4_2;
                    continue block26;
                    case -870521895: 
                }
                var3_3 = -1735246911 ^ var4_2;
            }
            break;
        }
        break;
    }
}`)

