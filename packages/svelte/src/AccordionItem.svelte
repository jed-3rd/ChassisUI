<script>
  import '@chassisui/core/accordion';
  export let open = false;
  export let disabled = false;
</script>

<chassis-accordion-item {open} {disabled}>
  <slot />
</chassis-accordion-item>
