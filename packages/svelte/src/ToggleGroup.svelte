<script>
  import '@chassis-ui/core/toggle-group';
  export let value = '';
  export let multiple = false;
</script>

<chassis-toggle-group {value} {multiple}>
  <slot />
</chassis-toggle-group>
