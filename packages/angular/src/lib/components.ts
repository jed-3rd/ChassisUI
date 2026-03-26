import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@chassis-ui/core/button';
import '@chassis-ui/core/input';
import '@chassis-ui/core/card';
import '@chassis-ui/core/checkbox';
import '@chassis-ui/core/switch';
import '@chassis-ui/core/select';
import '@chassis-ui/core/dialog';
import '@chassis-ui/core/badge';
import '@chassis-ui/core/tooltip';
import '@chassis-ui/core/radio';
import '@chassis-ui/core/divider';
import '@chassis-ui/core/icon';
import '@chassis-ui/core/link';
import '@chassis-ui/core/spinner';
import '@chassis-ui/core/progress';
import '@chassis-ui/core/avatar';
import '@chassis-ui/core/textarea';
import '@chassis-ui/core/tabs';
import '@chassis-ui/core/alert';
import '@chassis-ui/core/toast';
import '@chassis-ui/core/accordion';
import '@chassis-ui/core/skeleton';
import '@chassis-ui/core/table';
import '@chassis-ui/core/breadcrumb';
import '@chassis-ui/core/pagination';
import '@chassis-ui/core/chip';
import '@chassis-ui/core/popover';
import '@chassis-ui/core/dropdown-menu';
import '@chassis-ui/core/slider';
import '@chassis-ui/core/toggle-group';
import '@chassis-ui/core/date-picker';
import '@chassis-ui/core/modal';

@Component({
  selector: 'chassis-button-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-button
      [attr.variant]="variant"
      [attr.size]="size"
      [attr.disabled]="disabled || null"
      [attr.loading]="loading || null"
      [attr.type]="type"
    >
      <ng-content />
    </chassis-button>
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'link' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}

@Component({
  selector: 'chassis-input-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-input
      [attr.label]="label"
      [attr.placeholder]="placeholder"
      [attr.type]="type"
      [attr.value]="value"
      [attr.size]="size"
      [attr.disabled]="disabled || null"
      [attr.error]="error || null"
      [attr.helper]="helper || null"
      [attr.required]="required || null"
    />
  `,
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() value = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() error = '';
  @Input() helper = '';
  @Input() required = false;
}

@Component({
  selector: 'chassis-card-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-card
      [attr.elevated]="elevated || null"
      [attr.outlined]="outlined || null"
    >
      <ng-content />
    </chassis-card>
  `,
})
export class CardComponent {
  @Input() elevated = false;
  @Input() outlined = false;
}

@Component({
  selector: 'chassis-checkbox-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-checkbox
      [attr.label]="label"
      [attr.checked]="checked || null"
      [attr.indeterminate]="indeterminate || null"
      [attr.disabled]="disabled || null"
      [attr.size]="size"
    />
  `,
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() disabled = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() changed = new EventEmitter<boolean>();
}

@Component({
  selector: 'chassis-switch-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-switch
      [attr.label]="label"
      [attr.checked]="checked || null"
      [attr.disabled]="disabled || null"
      [attr.size]="size"
    />
  `,
})
export class SwitchComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() changed = new EventEmitter<boolean>();
}

@Component({
  selector: 'chassis-select-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-select
      [attr.label]="label"
      [attr.placeholder]="placeholder"
      [attr.value]="value"
      [attr.error]="error || null"
      [attr.required]="required || null"
      [attr.disabled]="disabled || null"
      [attr.size]="size"
    >
      <ng-content />
    </chassis-select>
  `,
})
export class SelectComponent {
  @Input() label = '';
  @Input() placeholder = 'Select an option';
  @Input() value = '';
  @Input() error = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() changed = new EventEmitter<string>();
}

@Component({
  selector: 'chassis-dialog-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-dialog
      [attr.open]="open || null"
      [attr.modal]="modal || null"
    >
      <ng-content />
    </chassis-dialog>
  `,
})
export class DialogComponent {
  @Input() open = false;
  @Input() modal = true;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();
}

@Component({
  selector: 'chassis-badge-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-badge
      [attr.variant]="variant"
      [attr.value]="value || null"
      [attr.dot]="dot || null"
    >
      <ng-content />
    </chassis-badge>
  `,
})
export class BadgeComponent {
  @Input() variant: 'default' | 'success' | 'warning' | 'error' | 'info' = 'default';
  @Input() value = '';
  @Input() dot = false;
}

@Component({
  selector: 'chassis-tooltip-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-tooltip
      [attr.content]="content"
      [attr.placement]="placement"
    >
      <ng-content />
    </chassis-tooltip>
  `,
})
export class TooltipComponent {
  @Input() content = '';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
}

@Component({
  selector: 'chassis-radio-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-radio
      [attr.value]="value"
      [attr.label]="label"
      [attr.checked]="checked || null"
      [attr.disabled]="disabled || null"
    />
  `,
})
export class RadioComponent {
  @Input() value = '';
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;
}

@Component({
  selector: 'chassis-radio-group-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-radio-group
      [attr.name]="name"
      [attr.value]="value"
      [attr.label]="label"
    >
      <ng-content />
    </chassis-radio-group>
  `,
})
export class RadioGroupComponent {
  @Input() name = '';
  @Input() value = '';
  @Input() label = '';
  @Output() changed = new EventEmitter<string>();
}

@Component({
  selector: 'chassis-divider-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-divider
      [attr.orientation]="orientation"
      [attr.label]="label || null"
    >
      <ng-content />
    </chassis-divider>
  `,
})
export class DividerComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() label = '';
}

@Component({
  selector: 'chassis-icon-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-icon
      [attr.name]="name"
      [attr.size]="size"
      [attr.label]="label || null"
    >
      <ng-content />
    </chassis-icon>
  `,
})
export class IconComponent {
  @Input() name = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label = '';
}

@Component({
  selector: 'chassis-link-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-link
      [attr.href]="href"
      [attr.target]="target || null"
      [attr.variant]="variant"
      [attr.underline]="underline"
    >
      <ng-content />
    </chassis-link>
  `,
})
export class LinkComponent {
  @Input() href = '';
  @Input() target = '';
  @Input() variant: 'default' | 'subtle' = 'default';
  @Input() underline: 'always' | 'hover' | 'none' = 'always';
}

@Component({
  selector: 'chassis-spinner-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<chassis-spinner [attr.size]="size"></chassis-spinner>`,
})
export class SpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}

@Component({
  selector: 'chassis-progress-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-progress
      [attr.value]="value"
      [attr.max]="max"
      [attr.variant]="variant"
      [attr.indeterminate]="indeterminate || null"
    ></chassis-progress>
  `,
})
export class ProgressComponent {
  @Input() value = 0;
  @Input() max = 100;
  @Input() variant: 'linear' | 'circular' = 'linear';
  @Input() indeterminate = false;
}

@Component({
  selector: 'chassis-avatar-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-avatar
      [attr.src]="src || null"
      [attr.alt]="alt || null"
      [attr.initials]="initials || null"
      [attr.size]="size"
      [attr.status]="status || null"
    ></chassis-avatar>
  `,
})
export class AvatarComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() initials = '';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() status: 'online' | 'offline' | 'busy' | 'away' | '' = '';
}

@Component({
  selector: 'chassis-textarea-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-textarea
      [attr.label]="label"
      [attr.placeholder]="placeholder"
      [attr.value]="value"
      [attr.rows]="rows"
      [attr.maxlength]="maxlength || null"
      [attr.resize]="resize"
      [attr.error]="error || null"
      [attr.helper-text]="helperText || null"
      [attr.disabled]="disabled || null"
      [attr.required]="required || null"
    ></chassis-textarea>
  `,
})
export class TextareaComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() rows = 3;
  @Input() maxlength = 0;
  @Input() resize: 'none' | 'vertical' | 'auto' = 'vertical';
  @Input() error = '';
  @Input() helperText = '';
  @Input() disabled = false;
  @Input() required = false;
  @Output() inputChange = new EventEmitter<string>();
}

@Component({
  selector: 'chassis-tabs-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-tabs
      [attr.value]="value"
      [attr.variant]="variant"
    >
      <ng-content />
    </chassis-tabs>
  `,
})
export class TabsComponent {
  @Input() value = '';
  @Input() variant: 'underline' | 'contained' = 'underline';
  @Output() changed = new EventEmitter<string>();
}

@Component({
  selector: 'chassis-tab-panel-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-tab-panel
      [attr.value]="value"
      [attr.label]="label"
      [attr.disabled]="disabled || null"
    >
      <ng-content />
    </chassis-tab-panel>
  `,
})
export class TabPanelComponent {
  @Input() value = '';
  @Input() label = '';
  @Input() disabled = false;
}

@Component({
  selector: 'chassis-alert-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-alert
      [attr.variant]="variant"
      [attr.dismissible]="dismissible || null"
    >
      <ng-content />
    </chassis-alert>
  `,
})
export class AlertComponent {
  @Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() dismissible = false;
  @Output() dismissed = new EventEmitter<void>();
}

@Component({
  selector: 'chassis-toast-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-toast
      [attr.variant]="variant"
      [attr.duration]="duration"
      [attr.dismissible]="dismissible || null"
    >
      <ng-content />
    </chassis-toast>
  `,
})
export class ToastComponent {
  @Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() duration = 5000;
  @Input() dismissible = true;
  @Output() dismissed = new EventEmitter<void>();
}

@Component({
  selector: 'chassis-accordion-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-accordion
      [attr.multiple]="multiple || null"
    >
      <ng-content />
    </chassis-accordion>
  `,
})
export class AccordionComponent {
  @Input() multiple = false;
}

@Component({
  selector: 'chassis-accordion-item-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-accordion-item
      [attr.open]="open || null"
      [attr.disabled]="disabled || null"
    >
      <ng-content />
    </chassis-accordion-item>
  `,
})
export class AccordionItemComponent {
  @Input() open = false;
  @Input() disabled = false;
}

@Component({
  selector: 'chassis-skeleton-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-skeleton
      [attr.variant]="variant"
      [attr.width]="width || null"
      [attr.height]="height || null"
      [attr.lines]="lines"
    ></chassis-skeleton>
  `,
})
export class SkeletonComponent {
  @Input() variant: 'text' | 'circular' | 'rectangular' = 'text';
  @Input() width = '';
  @Input() height = '';
  @Input() lines = 1;
}

@Component({
  selector: 'chassis-table-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-table
      [attr.sortable]="sortable || null"
      [attr.striped]="striped || null"
      [attr.sticky-header]="stickyHeader || null"
    >
      <ng-content />
    </chassis-table>
  `,
})
export class TableComponent {
  @Input() sortable = false;
  @Input() striped = false;
  @Input() stickyHeader = false;
  @Output() sorted = new EventEmitter<{ column: string; direction: string }>();
}

@Component({
  selector: 'chassis-breadcrumb-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-breadcrumb
      [attr.separator]="separator"
    >
      <ng-content />
    </chassis-breadcrumb>
  `,
})
export class BreadcrumbComponent {
  @Input() separator = '/';
}

@Component({
  selector: 'chassis-pagination-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-pagination
      [attr.total]="total"
      [attr.current]="current"
      [attr.siblings]="siblings"
      [attr.show-edges]="showEdges || null"
    ></chassis-pagination>
  `,
})
export class PaginationComponent {
  @Input() total = 1;
  @Input() current = 1;
  @Input() siblings = 1;
  @Input() showEdges = false;
  @Output() changed = new EventEmitter<number>();
}

@Component({
  selector: 'chassis-chip-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-chip
      [attr.variant]="variant"
      [attr.selected]="selected || null"
      [attr.removable]="removable || null"
      [attr.disabled]="disabled || null"
    >
      <ng-content />
    </chassis-chip>
  `,
})
export class ChipComponent {
  @Input() variant: 'filter' | 'choice' | 'input' = 'filter';
  @Input() selected = false;
  @Input() removable = false;
  @Input() disabled = false;
  @Output() changed = new EventEmitter<boolean>();
  @Output() removed = new EventEmitter<void>();
}

@Component({
  selector: 'chassis-popover-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-popover
      [attr.trigger]="trigger"
      [attr.placement]="placement"
      [attr.offset]="offset"
      [attr.arrow]="arrow || null"
    >
      <ng-content />
    </chassis-popover>
  `,
})
export class PopoverComponent {
  @Input() trigger: 'click' | 'hover' | 'manual' = 'click';
  @Input() placement: string = 'bottom';
  @Input() offset = 8;
  @Input() arrow = false;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();
}

@Component({
  selector: 'chassis-dropdown-menu-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-dropdown-menu
      [attr.placement]="placement"
    >
      <ng-content />
    </chassis-dropdown-menu>
  `,
})
export class DropdownMenuComponent {
  @Input() placement: string = 'bottom-start';
  @Output() selected = new EventEmitter<string>();
}

@Component({
  selector: 'chassis-slider-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-slider
      [attr.min]="min"
      [attr.max]="max"
      [attr.step]="step"
      [attr.value]="value"
      [attr.dual]="dual || null"
      [attr.value-end]="valueEnd"
      [attr.disabled]="disabled || null"
    ></chassis-slider>
  `,
})
export class SliderComponent {
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() value = '0';
  @Input() dual = false;
  @Input() valueEnd = 100;
  @Input() disabled = false;
  @Output() changed = new EventEmitter<{ value: number }>();
}

@Component({
  selector: 'chassis-toggle-group-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-toggle-group
      [attr.value]="value"
      [attr.multiple]="multiple || null"
    >
      <ng-content />
    </chassis-toggle-group>
  `,
})
export class ToggleGroupComponent {
  @Input() value = '';
  @Input() multiple = false;
  @Output() changed = new EventEmitter<string>();
}

@Component({
  selector: 'chassis-date-picker-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-date-picker
      [attr.value]="value"
      [attr.min]="min || null"
      [attr.max]="max || null"
      [attr.range]="range || null"
      [attr.locale]="locale"
    ></chassis-date-picker>
  `,
})
export class DatePickerComponent {
  @Input() value = '';
  @Input() min = '';
  @Input() max = '';
  @Input() range = false;
  @Input() locale = 'en-US';
  @Output() changed = new EventEmitter<{ value: string }>();
}

@Component({
  selector: 'chassis-modal-wrapper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <chassis-modal
      [attr.modal-title]="modalTitle"
      [attr.open]="open || null"
      [attr.modal-size]="modalSize"
      [attr.closable]="closable || null"
    >
      <ng-content />
    </chassis-modal>
  `,
})
export class ModalComponent {
  @Input() modalTitle = '';
  @Input() open = false;
  @Input() modalSize: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() closable = true;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();
}
