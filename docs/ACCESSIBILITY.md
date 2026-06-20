# Accessibility Guidelines

## Overview

The Sahib Design System targets **WCAG 2.1 AA** compliance as its baseline accessibility standard. Accessibility is a core design requirement, not an enhancement. Because Sahib is Arabic-first and RTL-first, accessibility guidance also includes directionality, readability, and localization concerns specific to Arabic interfaces.

## WCAG 2.1 AA Goals

The design system should support:

- perceivable content
- operable controls
- understandable interactions
- robust markup and semantics

## Color and Contrast

### Minimum Contrast Targets

- Normal text: **4.5:1** minimum
- Large text (18px regular or 14px bold and larger): **3:1** minimum
- UI component boundaries and meaningful graphical objects: **3:1** minimum where applicable

### Implementation Support

The system includes `src/utils/colors.ts` utilities for:

- luminance calculation
- contrast ratio checks
- accessible foreground selection

### Guidance

- Never rely on color alone to communicate errors, success, or warnings.
- Pair semantic color with text labels, icons, or ARIA messaging.
- Validate contrast whenever introducing new combinations.

## Typography and Readability

- Default to right alignment in Arabic contexts.
- Use readable line-height for paragraphs and long content.
- Avoid dense blocks of text without spacing.
- Keep body text at accessible sizes, preferably 16px or larger for primary content.
- Prefer clear, familiar Arabic wording over technical jargon.

## Keyboard Accessibility

All interactive components should be operable by keyboard alone.

### Requirements

- Focusable controls must follow a logical tab order.
- Visible focus indicators must always be present.
- Clickable cards or custom controls must receive proper keyboard semantics if used interactively.
- Avoid keyboard traps.

### Focus Styling

The design system provides a cyan focus treatment using `#04aae6` and matching shadow tokens such as `shadows.focus`.

## Forms and Inputs

### Labels

- Every input must have an accessible name.
- Visible labels are strongly preferred.
- Placeholder text must not replace labels.

### Helper and Error Text

- Use helper text proactively.
- Error messages should be specific, polite, and actionable.
- Connect error and helper text through `aria-describedby`.
- Set `aria-invalid="true"` on invalid fields.

### Required Fields

- Mark required fields clearly.
- Do not rely on color or symbol alone; support with accessible semantics where possible.

## Semantics and Structure

- Use real headings (`h1`–`h6`) for hierarchy.
- Use real buttons for actions.
- Use labels associated with form fields.
- Use lists for grouped items where structure matters.
- Preserve HTML semantics before introducing custom roles.

## RTL and Localization Accessibility

### Directionality

- Set `dir="rtl"` on Arabic documents or containers.
- Ensure punctuation, numerals, and mixed-language phrases are displayed predictably.
- Avoid mirrored layouts that break expected navigation or comprehension.

### Language

- Use `lang="ar"` for Arabic pages when applicable.
- Provide localized messages in clear Modern Standard Arabic unless product voice specifies otherwise.

### Mixed Content

When Arabic and English or numeric values appear together:

- verify ordering visually and programmatically
- test screen reader pronunciation
- keep labels and values predictable in sequence

## Motion and Interaction

- Keep transitions subtle and purposeful.
- Avoid flashing content.
- Prefer motion that supports comprehension, not decoration.
- Respect reduced motion preferences when motion is added in future iterations.

## Component-Specific Guidance

### Buttons

- Labels should clearly describe the action.
- Loading states should communicate busy status.
- Disabled buttons should not be the only way to explain next steps.

### Inputs

- Use input type semantics correctly (`email`, `password`, `tel`, etc.).
- Show both visual and programmatic validation states.

### Cards

- Only assign button-like semantics when the full card is interactive.
- Avoid multiple nested clickable regions that confuse focus order.

## Testing Recommendations

Accessibility should be reviewed through multiple methods:

1. **Keyboard-only testing**
2. **Contrast checks**
3. **Screen reader spot checks**
4. **Zoom testing at 200%**
5. **Responsive and RTL layout validation**
6. **Storybook accessibility review** using `@storybook/addon-a11y`

## Acceptance Checklist

Use this checklist before release:

- [ ] Page or component supports RTL correctly
- [ ] Text meets WCAG 2.1 AA contrast requirements
- [ ] Focus state is visible on all interactive elements
- [ ] Every form field has an accessible label
- [ ] Error states are specific and programmatically connected
- [ ] Semantic HTML is used before custom ARIA roles
- [ ] Content remains readable at zoom and on narrow screens
- [ ] Color is not the only indicator of meaning

## Continuous Improvement

Accessibility is iterative. As Sahib grows, each new component should define:

- supported semantics
- keyboard behavior
- focus behavior
- screen reader expectations
- color contrast guarantees
- RTL localization edge cases
