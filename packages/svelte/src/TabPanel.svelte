<script>
  import '@chassis-ui/core/tabs';
  export let value = '';
  export let label = '';
  export let disabled = false;
</script>

<chassis-tab-panel {value} {label} {disabled}>
  <slot />
</chassis-tab-panel>
