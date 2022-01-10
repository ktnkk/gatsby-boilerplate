---
to: src/components/<%= category %>/<%= name %>/index.stories.tsx
---
import React from "react";
import <%= name %> from "./index";

export default {
  title: "<%= category %>/<%= name %>"
}

export const normal = () => <<%= name %> />
