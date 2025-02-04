import * as path from "path";
import { fileURLToPath } from "url";
import A from "use-sync-external-store";
import B from "use-sync-external-store/with-selector";
import C from "use-sync-external-store/shim";
import D from "use-sync-external-store/shim/index.native";
import E from "use-sync-external-store/shim/with-selector";
import F from "use-sync-external-store/package.json" assert { type: "json" };

console.table([
  [
    path.relative(
      import.meta.filename,
      fileURLToPath(import.meta.resolve("use-sync-external-store"))
    ),
    Object.keys(A),
  ],
  [
    path.relative(
      import.meta.filename,
      fileURLToPath(
        import.meta.resolve("use-sync-external-store/with-selector")
      )
    ),
    Object.keys(B),
  ],
  [
    path.relative(
      import.meta.filename,
      fileURLToPath(import.meta.resolve("use-sync-external-store/shim"))
    ),
    Object.keys(C),
  ],
  [
    path.relative(
      import.meta.filename,
      fileURLToPath(
        import.meta.resolve("use-sync-external-store/shim/index.native")
      )
    ),
    Object.keys(D),
  ],
  [
    path.relative(
      import.meta.filename,
      fileURLToPath(
        import.meta.resolve("use-sync-external-store/shim/with-selector")
      )
    ),
    Object.keys(E),
  ],
  [
    path.relative(
      import.meta.filename,
      fileURLToPath(import.meta.resolve("use-sync-external-store/package.json"))
    ),
    Object.keys(F),
  ],
]);
