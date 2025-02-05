const entrypoints = [
  "use-sync-external-store",
  "use-sync-external-store/with-selector",
  // legacy entrypoint
  "use-sync-external-store/with-selector.js",
  "use-sync-external-store/shim",
  // legacy entrypoint
  "use-sync-external-store/shim/index.js",
  "use-sync-external-store/shim/index.native",
  // legacy entrypoint
  "use-sync-external-store/shim/index.native.js",
  "use-sync-external-store/shim/with-selector",
  // legacy entrypoint
  "use-sync-external-store/shim/with-selector.js",
  "use-sync-external-store/package.json",
];

async function main() {
  for (const entrypoint of entrypoints) {
    try {
      const options = {};
      if (entrypoint.endsWith(".json")) {
        options.assert = { type: "json" };
      }
      const namespace = await import(entrypoint, options);
      console.log(`PASS ${entrypoint} exports: ${Object.keys(namespace)}`);
    } catch (error) {
      console.error(`FAIL ${entrypoint}: ${error.code}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
