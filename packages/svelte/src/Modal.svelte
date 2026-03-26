<script>
  import '@chassis-ui/core/modal';
  export let modalTitle = '';
  export let open = false;
  export let modalSize = 'md';
  export let closable = true;
</script>

<chassis-modal modal-title={modalTitle} {open} modal-size={modalSize} {closable}>
  <slot />
</chassis-modal>
