<script>
  import '@chassis-ui/core/icon';
  export let name = '';
  export let size = 'md';
  export let label = '';
</script>

<chassis-icon {name} {size} {label}>
  <slot />
</chassis-icon>
