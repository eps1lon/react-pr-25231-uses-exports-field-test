import * as path from "path";
import { fileURLToPath } from "url";
import A from "use-sync-external-store";
import B from "use-sync-external-store/with-selector";
import legacy_B from "use-sync-external-store/with-selector.js";
import C from "use-sync-external-store/shim";
import legacy_C from "use-sync-external-store/shim/index.js";
import D from "use-sync-external-store/shim/index.native";
import legacy_D from "use-sync-external-store/shim/index.native.js";
import E from "use-sync-external-store/shim/with-selector";
import legacy_E from "use-sync-external-store/shim/with-selector.js";
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
