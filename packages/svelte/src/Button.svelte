<script>
  import '@chassisui/core/button';
  export let variant = 'primary';
  export let size = 'md';
  export let disabled = false;
  export let loading = false;
  export let type = 'button';
</script>

<chassis-button {variant} {size} {disabled} {loading} {type}>
  <slot />
  <slot name="prefix" slot="prefix" />
  <slot name="suffix" slot="suffix" />
</chassis-button>
