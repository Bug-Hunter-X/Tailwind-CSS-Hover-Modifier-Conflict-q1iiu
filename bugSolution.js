```javascript
// Corrected code with improved class order and potentially better specificity
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:shadow-lg">
  Hover me!
</button>

// Or, if the issue stems from specificity, use more specific selectors or create a utility class:

// CSS Example (if you have to override something)
.button-hover {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:shadow-lg;
}
<button class="button-hover">
  Hover Me!
</button>
```