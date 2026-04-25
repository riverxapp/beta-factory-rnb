--- a/app/dashboard/issues/page.tsx
+++ b/app/dashboard/issues/page.tsx
@@ -1,4 +1,5 @@
+import React from 'react';
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { Badge } from "@/components/ui/badge";
 import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
@@ -35,7 +36,7 @@ const recentIssues = [
 
 export default function IssuesPage() {
   return (
-    <div>
+    <div className="space-y-6">
       <div className="flex items-center justify-between mb-6">
         <h1 className="text-3xl font-bold tracking-tight">Issues</h1>
         <Button>New Issue</Button>