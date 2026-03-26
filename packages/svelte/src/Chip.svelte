<script>
  import '@chassisui/core/chip';
  export let variant = 'filter';
  export let selected = false;
  export let removable = false;
  export let disabled = false;
</script>

<chassis-chip {variant} {selected} {removable} {disabled}>
  <slot />
</chassis-chip>
