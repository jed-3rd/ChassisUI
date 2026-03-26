<script>
  import '@chassis-ui/core/toast';
  export let variant = 'info';
  export let duration = 5000;
  export let dismissible = true;
</script>

<chassis-toast {variant} {duration} {dismissible}>
  <slot />
</chassis-toast>
