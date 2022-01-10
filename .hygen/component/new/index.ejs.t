---
to: src/components/<%= category %>/index.tsx
inject: true
append: true
skip_if: <%= name %>
---
export { default as <%= name %> } from "./<%= name %>"
