<script>
  import '@chassisui/core/alert';
  export let variant = 'info';
  export let dismissible = false;
</script>

<chassis-alert {variant} {dismissible}>
  <slot />
</chassis-alert>
