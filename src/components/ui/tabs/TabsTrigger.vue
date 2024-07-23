<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue';
import { cn } from '@/lib/utils';
type Variant = 'default' | 'desctructive' | 'link';
const props = defineProps<
  TabsTriggerProps & { class?: HTMLAttributes['class'] } & {
    variant?: Variant;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const variantClasses = {
  default:
    'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow',
  desctructive:
    'data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground data-[state=active]:shadow',
  secondary:
    'data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow',
  ghost:
    'data-[state=active]:bg-transparent data-[state=active]:text-primary-foreground data-[state=active]:shadow',
  link: 'data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:underline underline-offset-4',
  outline:
    'data-[state=active]:bg-transparent data-[state=active]:text-primary-foreground data-[state=active]:shadow data-[state=active]:ring-1 data-[state=active]:ring-primary',
};
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ',
        props.class,
        variantClasses[props.variant || 'default']
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>
