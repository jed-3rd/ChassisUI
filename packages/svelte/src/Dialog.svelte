<script>
  import '@chassis-ui/core/dialog';
  export let open = false;
  export let modal = true;
</script>

<chassis-dialog {open} {modal}>
  <slot />
</chassis-dialog>
