```diff
--- a/scripts/error-reporter.ts
+++ b/scripts/error-reporter.ts
@@ -72,7 +72,7 @@ export function initErrorReporter() {
   window.addEventListener("error", handleErrorEvent);
   window.addEventListener("unhandledrejection", handleRejection);
   wrapConsoleError();
-}
+}
\ No newline at end of file
```