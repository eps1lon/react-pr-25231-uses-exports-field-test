#

Tests [facebook/react#25231: use-sync-external-store: Add `exports` field to `package.json`](https://github.com/facebook/react/pull/25231)

```nash
$ yarn
# Make sure you're using Node 18.9 (or use Volta which automatically uses the correct version)
$  node index.js
Warning: The main 'use-sync-external-store' entry point is not supported; all it does is re-export useSyncExternalStore from the 'react' package, so it only works with React 18+.

If you wish to support React 16 and 17, import from 'use-sync-external-store/shim' instead. It will fall back to a shimmed implementation when the native one is not available.

If you only support React 18+, you can import directly from 'react'.
PASS 'use-sync-external-store' exports: default,useSyncExternalStore
PASS 'use-sync-external-store/with-selector' exports: default,useSyncExternalStoreWithSelector
PASS 'use-sync-external-store/shim' exports: default,useSyncExternalStore
PASS 'use-sync-external-store/shim/index.native' exports: default,useSyncExternalStore
PASS 'use-sync-external-store/shim/with-selector' exports: default,useSyncExternalStoreWithSelector
PASS 'use-sync-external-store/package.json' exports: default
(node:34500) ExperimentalWarning: Importing JSON modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```
