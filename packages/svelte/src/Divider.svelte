<script>
  import '@chassis-ui/core/divider';
  export let orientation = 'horizontal';
  export let label = '';
</script>

<chassis-divider {orientation} {label}>
  <slot />
</chassis-divider>
