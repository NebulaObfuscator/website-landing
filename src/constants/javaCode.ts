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
public void keyPressed(KeyEvent keyEvent) {
    block38: {
        int n;
        block39: {
            int n2;
            int n3;
            block40: {
                block37: {
                    int n4;
                    block41: {
                        int n5;
                        block42: {
                            block34: {
                                int n6;
                                block43: {
                                    int n7;
                                    block44: {
                                        block35: {
                                            block36: {
                                                void vgOVzwdQiC;
                                                int n8;
                                                n3 = 324006693;
                                                n = n8 = vgOVzwdQiC.getKeyCode();
                                                int n9 = IqVGSONgAq[0x134FF321 ^ n3];
                                                if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF325 ^ n3], IqVGSONgAq[0x134FF324 ^ n3]) + n9 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF327 ^ n3], IqVGSONgAq[0x134FF326 ^ n3]) + n9) break block39;
                                                int n10 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF320 ^ n3], IqVGSONgAq[0x134FF323 ^ n3]);
                                                int n11 = n;
                                                int n12 = IqVGSONgAq[0x134FF322 ^ n3];
                                                if (n12 + n11 == n12 + n10) break block34;
                                                n2 = n8;
                                                int n13 = IqVGSONgAq[0x134FF329 ^ n3];
                                                if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF32D ^ n3], IqVGSONgAq[0x134FF32C ^ n3]) + n13 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF32F ^ n3], IqVGSONgAq[0x134FF32E ^ n3]) + n13) break block40;
                                                int n14 = IqVGSONgAq[0x134FF32A ^ n3];
                                                if (n2 + n14 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF328 ^ n3], IqVGSONgAq[0x134FF32B ^ n3]) + n14) break block35;
                                                n4 = n8;
                                                int n15 = IqVGSONgAq[0x134FF331 ^ n3];
                                                if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF335 ^ n3], IqVGSONgAq[0x134FF334 ^ n3]) + n15 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF337 ^ n3], IqVGSONgAq[0x134FF336 ^ n3]) + n15) break block41;
                                                int n16 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF330 ^ n3], IqVGSONgAq[0x134FF333 ^ n3]);
                                                int n17 = n4;
                                                int n18 = IqVGSONgAq[0x134FF332 ^ n3];
                                                if (n18 + n17 == n18 + n16) break block36;
                                                n5 = n8;
                                                int n19 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF33F ^ n3], IqVGSONgAq[0x134FF33E ^ n3]);
                                                int n20 = IqVGSONgAq[0x134FF339 ^ n3];
                                                if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF33D ^ n3], IqVGSONgAq[0x134FF33C ^ n3]) + n20 != n19 + n20) {
                                                    int n21 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF338 ^ n3], IqVGSONgAq[0x134FF33B ^ n3]);
                                                    int n22 = n5;
                                                    int n23 = IqVGSONgAq[0x134FF33A ^ n3];
                                                    if (n23 + n22 == n23 + n21) break block37;
                                                    int n24 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF307 ^ n3], IqVGSONgAq[0x134FF306 ^ n3]);
                                                    int n25 = IqVGSONgAq[0x134FF301 ^ n3];
                                                    if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF305 ^ n3], IqVGSONgAq[0x134FF304 ^ n3]) + n25 == n24 + n25) break block38;
                                                    int n26 = IqVGSONgAq[0x134FF30C ^ n3];
                                                    if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF300 ^ n3], IqVGSONgAq[0x134FF303 ^ n3]) + n26 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF302 ^ n3], IqVGSONgAq[0x134FF30D ^ n3]) + n26) break block38;
                                                }
                                                break block42;
                                            }
                                            n6 = EgRsUufHxQ.TPkRSViumb;
                                            int n27 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF309 ^ n3], IqVGSONgAq[0x134FF308 ^ n3]);
                                            int n28 = IqVGSONgAq[0x134FF30B ^ n3];
                                            if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF30F ^ n3], IqVGSONgAq[0x134FF30E ^ n3]) + n28 == n27 + n28) break block43;
                                            int n29 = IqVGSONgAq[0x134FF314 ^ n3];
                                            if (n6 + n29 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF30A ^ n3], IqVGSONgAq[0x134FF315 ^ n3]) + n29) break block38;
                                            n7 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF317 ^ n3], IqVGSONgAq[0x134FF316 ^ n3]);
                                            int n30 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF313 ^ n3], IqVGSONgAq[0x134FF312 ^ n3]);
                                            int n31 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF311 ^ n3], IqVGSONgAq[0x134FF310 ^ n3]);
                                            int n32 = IqVGSONgAq[0x134FF31D ^ n3];
                                            if (n32 + n31 != n32 + n30) {
                                                EgRsUufHxQ.TPkRSViumb = n7;
                                                int n33 = IqVGSONgAq[0x134FF318 ^ n3];
                                                if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF31C ^ n3], IqVGSONgAq[0x134FF31F ^ n3]) + n33 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF31E ^ n3], IqVGSONgAq[0x134FF319 ^ n3]) + n33) break block38;
                                                int n34 = IqVGSONgAq[0x134FF367 ^ n3];
                                                if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF31B ^ n3], IqVGSONgAq[0x134FF31A ^ n3]) + n34 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF365 ^ n3], IqVGSONgAq[0x134FF364 ^ n3]) + n34) break block38;
                                            }
                                            break block44;
                                        }
                                        n7 = EgRsUufHxQ.TPkRSViumb;
                                    }
                                    int n35 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF366 ^ n3], IqVGSONgAq[0x134FF361 ^ n3]);
                                    int n36 = n7;
                                    int n37 = IqVGSONgAq[0x134FF360 ^ n3];
                                    if (n37 + n36 == n37 + n35) break block38;
                                    n6 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF363 ^ n3], IqVGSONgAq[0x134FF362 ^ n3]);
                                }
                                EgRsUufHxQ.TPkRSViumb = n6;
                                int n38 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF36F ^ n3], IqVGSONgAq[0x134FF36E ^ n3]);
                                int n39 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF36D ^ n3], IqVGSONgAq[0x134FF36C ^ n3]);
                                int n40 = IqVGSONgAq[0x134FF369 ^ n3];
                                if (n40 + n39 == n40 + n38) break block38;
                                int n41 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF36A ^ n3], IqVGSONgAq[0x134FF375 ^ n3]);
                                int n42 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF368 ^ n3], IqVGSONgAq[0x134FF36B ^ n3]);
                                int n43 = IqVGSONgAq[0x134FF374 ^ n3];
                                if (n43 + n42 == n43 + n41) break block38;
                            }
                            n5 = EgRsUufHxQ.TPkRSViumb;
                        }
                        int n44 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF377 ^ n3], IqVGSONgAq[0x134FF376 ^ n3]);
                        int n45 = n5;
                        int n46 = IqVGSONgAq[0x134FF371 ^ n3];
                        if (n46 + n45 == n46 + n44) break block38;
                        n4 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF370 ^ n3], IqVGSONgAq[0x134FF373 ^ n3]);
                    }
                    EgRsUufHxQ.TPkRSViumb = n4;
                    int n47 = IqVGSONgAq[0x134FF37E ^ n3];
                    if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF372 ^ n3], IqVGSONgAq[0x134FF37D ^ n3]) + n47 == TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF37C ^ n3], IqVGSONgAq[0x134FF37F ^ n3]) + n47) break block38;
                    int n48 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF37B ^ n3], IqVGSONgAq[0x134FF37A ^ n3]);
                    int n49 = IqVGSONgAq[0x134FF345 ^ n3];
                    if (TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF379 ^ n3], IqVGSONgAq[0x134FF378 ^ n3]) + n49 == n48 + n49) break block38;
                }
                n2 = EgRsUufHxQ.TPkRSViumb;
            }
            int n50 = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF344 ^ n3], IqVGSONgAq[0x134FF347 ^ n3]);
            int n51 = n2;
            int n52 = IqVGSONgAq[0x134FF346 ^ n3];
            if (n52 + n51 == n52 + n50) break block38;
            n = TbbYuGXdqO.ZDuNeJSwHL(IqVGSONgAq[0x134FF341 ^ n3], IqVGSONgAq[0x134FF340 ^ n3]);
        }
        EgRsUufHxQ.TPkRSViumb = n;
    }
}`)

