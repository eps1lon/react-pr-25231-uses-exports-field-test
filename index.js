const entrypoints = [
  "use-sync-external-store",
  "use-sync-external-store/with-selector",
  "use-sync-external-store/shim",
  "use-sync-external-store/shim/index.native",
  "use-sync-external-store/shim/with-selector",
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
      console.log(`PASS '${entrypoint}' exports: ${Object.keys(namespace)}`);
    } catch (error) {
      console.error(`FAIL ${entrypoint}:\n${error}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
