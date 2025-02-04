#

Tests [facebook/react#25231: use-sync-external-store: Add `exports` field to `package.json`](https://github.com/facebook/react/pull/25231)

`./vendored@` is contents of `facebook/react/build/oss-experimental/use-sync-external-store` after `yarn build react/index use-sync-external-store`

```console
$ yarn
# Make sure you're using Node 18.9 (or use Volta which automatically uses the correct version)
$  node dynamic.js
node dynamic.js 
The main 'use-sync-external-store' entry point is not supported; all it does is re-export useSyncExternalStore from the 'react' package, so it only works with React 18+.

If you wish to support React 16 and 17, import from 'use-sync-external-store/shim' instead. It will fall back to a shimmed implementation when the native one is not available.

If you only support React 18+, you can import directly from 'react'.
PASS 'use-sync-external-store' exports: default,useSyncExternalStore
PASS 'use-sync-external-store/with-selector' exports: default,useSyncExternalStoreWithSelector
PASS 'use-sync-external-store/shim' exports: default,useSyncExternalStore
PASS 'use-sync-external-store/shim/index.native' exports: default,useSyncExternalStore
PASS 'use-sync-external-store/shim/with-selector' exports: default,useSyncExternalStoreWithSelector
PASS 'use-sync-external-store/package.json' exports: default
(node:92223) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

$ node static.js
node static.js
(node:91644) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
The main 'use-sync-external-store' entry point is not supported; all it does is re-export useSyncExternalStore from the 'react' package, so it only works with React 18+.

If you wish to support React 16 and 17, import from 'use-sync-external-store/shim' instead. It will fall back to a shimmed implementation when the native one is not available.

If you only support React 18+, you can import directly from 'react'.
┌─────────┬─────────────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────┐
│ (index) │ 0                                                               │ 1                                                      │
├─────────┼─────────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 0       │ '../node_modules/use-sync-external-store/index.js'              │ [ 'useSyncExternalStore' ]                             │
│ 1       │ '../node_modules/use-sync-external-store/with-selector.js'      │ [ 'useSyncExternalStoreWithSelector' ]                 │
│ 2       │ '../node_modules/use-sync-external-store/shim/index.js'         │ [ 'useSyncExternalStore' ]                             │
│ 3       │ '../node_modules/use-sync-external-store/shim/index.native.js'  │ [ 'useSyncExternalStore' ]                             │
│ 4       │ '../node_modules/use-sync-external-store/shim/with-selector.js' │ [ 'useSyncExternalStoreWithSelector' ]                 │
│ 5       │ '../node_modules/use-sync-external-store/package.json'          │ [ 'name', 'description', 'version', ... 6 more items ] │
$ node --import-conditions react-native static.js
node --conditions react-native static.js       
(node:92108) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
The main 'use-sync-external-store' entry point is not supported; all it does is re-export useSyncExternalStore from the 'react' package, so it only works with React 18+.

If you wish to support React 16 and 17, import from 'use-sync-external-store/shim' instead. It will fall back to a shimmed implementation when the native one is not available.

If you only support React 18+, you can import directly from 'react'.
┌─────────┬─────────────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────┐
│ (index) │ 0                                                               │ 1                                                      │
├─────────┼─────────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 0       │ '../node_modules/use-sync-external-store/index.js'              │ [ 'useSyncExternalStore' ]                             │
│ 1       │ '../node_modules/use-sync-external-store/with-selector.js'      │ [ 'useSyncExternalStoreWithSelector' ]                 │
│ 2       │ '../node_modules/use-sync-external-store/shim/index.native.js'  │ [ 'useSyncExternalStore' ]                             │
│ 3       │ '../node_modules/use-sync-external-store/shim/index.native.js'  │ [ 'useSyncExternalStore' ]                             │
│ 4       │ '../node_modules/use-sync-external-store/shim/with-selector.js' │ [ 'useSyncExternalStoreWithSelector' ]                 │
│ 5       │ '../node_modules/use-sync-external-store/package.json'          │ [ 'name', 'description', 'version', ... 6 more items ]
```
