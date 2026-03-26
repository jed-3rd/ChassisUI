<script>
  import '@chassisui/core/badge';
  export let variant = 'default';
  export let value = '';
  export let dot = false;
</script>

<chassis-badge {variant} {value} {dot}>
  <slot />
</chassis-badge>
