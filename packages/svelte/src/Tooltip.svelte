<script>
  import '@chassis-ui/core/tooltip';
  export let content = '';
  export let placement = 'top';
</script>

<chassis-tooltip {content} {placement}>
  <slot />
</chassis-tooltip>
