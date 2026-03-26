<script>
  import '@chassisui/core/tabs';
  export let value = '';
  export let variant = 'underline';
</script>

<chassis-tabs {value} {variant}>
  <slot />
</chassis-tabs>
