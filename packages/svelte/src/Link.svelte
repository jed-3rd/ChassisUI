<script>
  import '@chassis-ui/core/link';
  export let href = '';
  export let target = '';
  export let variant = 'default';
  export let underline = 'always';
</script>

<chassis-link {href} {target} {variant} {underline}>
  <slot />
</chassis-link>
