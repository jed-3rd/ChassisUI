<script>
  import '@chassisui/core/popover';
  export let trigger = 'click';
  export let placement = 'bottom';
  export let offset = 8;
  export let arrow = false;
</script>

<chassis-popover {trigger} {placement} {offset} {arrow}>
  <slot />
</chassis-popover>
