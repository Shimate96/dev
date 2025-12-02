# Design Guidelines - StockFlow App

## Color Palette

### Primary Colors
- **Brand Red**: #E63946 (Primary action, highlights)
- **Dark Blue**: #457B9D (Secondary actions)
- **Accent Green**: #06A77D (Success states)

### Semantic Colors
- **Success**: #06A77D
- **Warning**: #F7B538
- **Error**: #E63946
- **Info**: #457B9D

### Neutral Colors
- **White**: #FFFFFF (Background)
- **Light Gray**: #F5F5F5 (Surface)
- **Medium Gray**: #CCCCCC (Borders, disabled)
- **Dark Gray**: #666666 (Secondary text)
- **Black**: #000000 (Primary text)

## Typography

### Font Family
- **Primary**: System fonts (SF Pro Display on iOS, Roboto on Android)

### Type Scales
- **H1**: 32px, Bold, Line height 40px
- **H2**: 24px, Bold, Line height 32px
- **H3**: 20px, SemiBold, Line height 28px
- **Body**: 16px, Regular, Line height 24px
- **Body Small**: 14px, Regular, Line height 20px
- **Caption**: 12px, Regular, Line height 16px

## Spacing System

- **XS**: 4px (very tight spacing)
- **SM**: 8px (tight spacing)
- **MD**: 12px (default padding)
- **LG**: 16px (comfortable spacing)
- **XL**: 24px (generous spacing)
- **XXL**: 32px (large sections)

## Border Radius

- **Small**: 4px (subtle corners)
- **Medium**: 8px (default)
- **Large**: 12px (prominent elements)
- **XL**: 16px (cards, modals)
- **Full**: 9999px (pills, circles)

## Shadows

### Small Shadow (Elevation 2)
- Offset: 0, 1
- Opacity: 0.2
- Radius: 1.41

### Medium Shadow (Elevation 5)
- Offset: 0, 2
- Opacity: 0.25
- Radius: 3.84

### Large Shadow (Elevation 8)
- Offset: 0, 4
- Opacity: 0.3
- Radius: 4.65

## Component Guidelines

### Buttons
- Minimum touch target: 44px height
- Primary: Solid background with brand color
- Secondary: Light background
- Outline: Border only style
- Disabled: Reduced opacity

### Cards
- Rounded corners (12px default)
- Medium shadow for depth
- Padding: 16px
- Used for list items, statistics, events

### Forms
- Input height: 48px
- Label: Body Small font
- Error messages: Caption, red text
- Help text: Caption, gray text

### Navigation
- Bottom tabs: 56px minimum height
- Icons + labels for clarity
- Active tab: Brand color highlight
- Drawer: Slide from left, 72dp width fraction

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Touch targets: Minimum 44x44 pts
- Focus indicators: Clear and visible
- Screen reader labels: Descriptive

## Responsive Design

### Breakpoints
- **Small**: < 400px
- **Medium**: 400px - 768px
- **Large**: > 768px

### Considerations
- Single column on small screens
- Multi-column on tablets
- Landscape orientation support
- Safe area insets (notches, home indicators)
