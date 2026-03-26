<script>
  import '@chassisui/core/toggle-group';
  export let value = '';
  export let multiple = false;
</script>

<chassis-toggle-group {value} {multiple}>
  <slot />
</chassis-toggle-group>
