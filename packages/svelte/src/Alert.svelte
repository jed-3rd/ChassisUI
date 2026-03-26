<script>
  import '@chassis-ui/core/alert';
  export let variant = 'info';
  export let dismissible = false;
</script>

<chassis-alert {variant} {dismissible}>
  <slot />
</chassis-alert>
