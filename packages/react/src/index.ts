import { createComponent } from '@lit/react';
import React from 'react';

import { ChassisButton } from '@chassis-ui/core/button';
import { ChassisInput } from '@chassis-ui/core/input';
import { ChassisCard } from '@chassis-ui/core/card';
import { ChassisCheckbox } from '@chassis-ui/core/checkbox';
import { ChassisSwitch } from '@chassis-ui/core/switch';
import { ChassisSelect } from '@chassis-ui/core/select';
import { ChassisDialog } from '@chassis-ui/core/dialog';
import { ChassisBadge } from '@chassis-ui/core/badge';
import { ChassisTooltip } from '@chassis-ui/core/tooltip';
import { ChassisRadio, ChassisRadioGroup } from '@chassis-ui/core/radio';
import { ChassisDivider } from '@chassis-ui/core/divider';
import { ChassisIcon } from '@chassis-ui/core/icon';
import { ChassisLink } from '@chassis-ui/core/link';
import { ChassisSpinner } from '@chassis-ui/core/spinner';
import { ChassisProgress } from '@chassis-ui/core/progress';
import { ChassisAvatar } from '@chassis-ui/core/avatar';
import { ChassisTextarea } from '@chassis-ui/core/textarea';
import { ChassisTabs, ChassisTabPanel } from '@chassis-ui/core/tabs';
import { ChassisAlert } from '@chassis-ui/core/alert';
import { ChassisToast } from '@chassis-ui/core/toast';
import { ChassisAccordion, ChassisAccordionItem } from '@chassis-ui/core/accordion';
import { ChassisSkeleton } from '@chassis-ui/core/skeleton';
import { ChassisTable } from '@chassis-ui/core/table';
import { ChassisBreadcrumb } from '@chassis-ui/core/breadcrumb';
import { ChassisPagination } from '@chassis-ui/core/pagination';
import { ChassisChip } from '@chassis-ui/core/chip';
import { ChassisPopover } from '@chassis-ui/core/popover';
import { ChassisDropdownMenu } from '@chassis-ui/core/dropdown-menu';
import { ChassisSlider } from '@chassis-ui/core/slider';
import { ChassisToggleGroup } from '@chassis-ui/core/toggle-group';
import { ChassisDatePicker } from '@chassis-ui/core/date-picker';
import { ChassisModal } from '@chassis-ui/core/modal';

export const Button = createComponent({
  tagName: 'chassis-button',
  elementClass: ChassisButton,
  react: React,
  events: { onClick: 'click', onFocus: 'focus', onBlur: 'blur' },
});

export const Input = createComponent({
  tagName: 'chassis-input',
  elementClass: ChassisInput,
  react: React,
  events: { onInput: 'input', onChange: 'change', onFocus: 'focus', onBlur: 'blur' },
});

export const Card = createComponent({
  tagName: 'chassis-card',
  elementClass: ChassisCard,
  react: React,
});

export const Checkbox = createComponent({
  tagName: 'chassis-checkbox',
  elementClass: ChassisCheckbox,
  react: React,
  events: { onChange: 'change' },
});

export const Switch = createComponent({
  tagName: 'chassis-switch',
  elementClass: ChassisSwitch,
  react: React,
  events: { onChange: 'change' },
});

export const Select = createComponent({
  tagName: 'chassis-select',
  elementClass: ChassisSelect,
  react: React,
  events: { onChange: 'change' },
});

export const Dialog = createComponent({
  tagName: 'chassis-dialog',
  elementClass: ChassisDialog,
  react: React,
  events: { onOpen: 'chassis-open', onClose: 'chassis-close' },
});

export const Badge = createComponent({
  tagName: 'chassis-badge',
  elementClass: ChassisBadge,
  react: React,
});

export const Tooltip = createComponent({
  tagName: 'chassis-tooltip',
  elementClass: ChassisTooltip,
  react: React,
});

export const Radio = createComponent({
  tagName: 'chassis-radio',
  elementClass: ChassisRadio,
  react: React,
});

export const RadioGroup = createComponent({
  tagName: 'chassis-radio-group',
  elementClass: ChassisRadioGroup,
  react: React,
  events: { onChange: 'change' },
});

export const Divider = createComponent({
  tagName: 'chassis-divider',
  elementClass: ChassisDivider,
  react: React,
});

export const Icon = createComponent({
  tagName: 'chassis-icon',
  elementClass: ChassisIcon,
  react: React,
});

export const Link = createComponent({
  tagName: 'chassis-link',
  elementClass: ChassisLink,
  react: React,
  events: { onClick: 'click' },
});

export const Spinner = createComponent({
  tagName: 'chassis-spinner',
  elementClass: ChassisSpinner,
  react: React,
});

export const Progress = createComponent({
  tagName: 'chassis-progress',
  elementClass: ChassisProgress,
  react: React,
});

export const Avatar = createComponent({
  tagName: 'chassis-avatar',
  elementClass: ChassisAvatar,
  react: React,
});

export const Textarea = createComponent({
  tagName: 'chassis-textarea',
  elementClass: ChassisTextarea,
  react: React,
  events: { onInput: 'input' },
});

export const Tabs = createComponent({
  tagName: 'chassis-tabs',
  elementClass: ChassisTabs,
  react: React,
  events: { onChange: 'change' },
});

export const TabPanel = createComponent({
  tagName: 'chassis-tab-panel',
  elementClass: ChassisTabPanel,
  react: React,
});

export const Alert = createComponent({
  tagName: 'chassis-alert',
  elementClass: ChassisAlert,
  react: React,
  events: { onDismiss: 'chassis-dismiss' },
});

export const Toast = createComponent({
  tagName: 'chassis-toast',
  elementClass: ChassisToast,
  react: React,
  events: { onDismiss: 'chassis-dismiss' },
});

export const Accordion = createComponent({
  tagName: 'chassis-accordion',
  elementClass: ChassisAccordion,
  react: React,
});

export const AccordionItem = createComponent({
  tagName: 'chassis-accordion-item',
  elementClass: ChassisAccordionItem,
  react: React,
  events: { onToggle: 'chassis-accordion-toggle' },
});

export const Skeleton = createComponent({
  tagName: 'chassis-skeleton',
  elementClass: ChassisSkeleton,
  react: React,
});

export const Table = createComponent({
  tagName: 'chassis-table',
  elementClass: ChassisTable,
  react: React,
  events: { onSort: 'chassis-sort' },
});

export const Breadcrumb = createComponent({
  tagName: 'chassis-breadcrumb',
  elementClass: ChassisBreadcrumb,
  react: React,
});

export const Pagination = createComponent({
  tagName: 'chassis-pagination',
  elementClass: ChassisPagination,
  react: React,
  events: { onChange: 'change' },
});

export const Chip = createComponent({
  tagName: 'chassis-chip',
  elementClass: ChassisChip,
  react: React,
  events: { onChange: 'change', onRemove: 'chassis-remove' },
});

export const Popover = createComponent({
  tagName: 'chassis-popover',
  elementClass: ChassisPopover,
  react: React,
  events: { onOpen: 'chassis-open', onClose: 'chassis-close' },
});

export const DropdownMenu = createComponent({
  tagName: 'chassis-dropdown-menu',
  elementClass: ChassisDropdownMenu,
  react: React,
  events: { onOpen: 'chassis-open', onClose: 'chassis-close', onSelect: 'chassis-select' },
});

export const Slider = createComponent({
  tagName: 'chassis-slider',
  elementClass: ChassisSlider,
  react: React,
  events: { onChange: 'change' },
});

export const ToggleGroup = createComponent({
  tagName: 'chassis-toggle-group',
  elementClass: ChassisToggleGroup,
  react: React,
  events: { onChange: 'change' },
});

export const DatePicker = createComponent({
  tagName: 'chassis-date-picker',
  elementClass: ChassisDatePicker,
  react: React,
  events: { onChange: 'change' },
});

export const Modal = createComponent({
  tagName: 'chassis-modal',
  elementClass: ChassisModal,
  react: React,
  events: { onOpen: 'chassis-open', onClose: 'chassis-close' },
});

// Re-export ToastManager for imperative use
export { ToastManager } from '@chassis-ui/core/toast';

// Re-export theme utilities
export { ThemeSwitcher } from '@chassis-ui/themes';
export type { ThemeName } from '@chassis-ui/themes';
