<script>
  import '@chassisui/core/dialog';
  export let open = false;
  export let modal = true;
</script>

<chassis-dialog {open} {modal}>
  <slot />
</chassis-dialog>
