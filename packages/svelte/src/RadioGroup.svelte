<script>
  import '@chassis-ui/core/radio';
  export let name = '';
  export let value = '';
  export let label = '';
</script>

<chassis-radio-group {name} {value} {label}>
  <slot />
</chassis-radio-group>
