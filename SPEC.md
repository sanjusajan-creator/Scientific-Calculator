# Scientific Calculator

## 1. Project Overview
- **Project name**: Scientific Calculator
- **Type**: Single-page web application
- **Core functionality**: A responsive scientific calculator with standard and scientific operations
- **Target users**: Students, engineers, and anyone needing quick calculations

## 2. Visual Specification

### Layout
- Centered calculator card with rounded corners and subtle shadow
- Display screen at top showing current input and result
- Grid-based button layout adapting to screen size

### Color Palette
- Background: Deep charcoal (`#1a1a2e`)
- Calculator body: Dark slate (`#16213e`)
- Display: Semi-transparent dark (`rgba(0, 0, 0, 0.4)`)
- Number buttons: Muted blue (`#2d4a6f`)
- Operator buttons: Orange accent (`#e94560`)
- Function buttons: Teal (`#0f3460`)
- Clear/Delete: Red tint (`#c73e1d`)
- Text: Off-white (`#eaeaea`)
- Hover states: Slight brightness increase

### Typography
- Display: `JetBrains Mono` or `monospace` fallback
- Buttons: `Inter` or `system-ui` fallback
- Display size: Large for result, smaller for expression

### Responsive Breakpoints
- Mobile (< 400px): Compact buttons, smaller font
- Tablet (400-768px): Standard sizing
- Desktop (> 768px): Larger buttons, max-width 400px

## 3. Functionality Specification

### Buttons
**Numbers**: 0-9, decimal point
**Basic Operators**: +, -, ×, ÷
**Scientific Functions** (toggled or visible):
- Trigonometric: sin, cos, tan, asin, acos, atan
- Logarithmic: log, ln
- Power: x², xʸ, √x, 10ˣ
- Constants: π, e
- Other: %, ±, 1/x, |x| (abs), n!
**Controls**: =, C (clear), DEL (backspace)
**Brackets**: ( , )

### Features
- Chained operations support
- Expression display (shows full expression above result)
- Keyboard support for numbers and operators
- Error handling (divide by zero, invalid operations)
- Number formatting with commas for readability
- Degree/Radian toggle for trig functions

### Edge Cases
- Prevent multiple decimal points in same number
- Handle very large/small numbers in scientific notation
- Clear error messages for invalid operations

## 4. Acceptance Criteria
- [ ] Calculator displays and evaluates expressions correctly
- [ ] All basic operations work (add, subtract, multiply, divide)
- [ ] Scientific functions return accurate results
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] Keyboard input works for numbers and basic operators
- [ ] Clear button resets calculator state
- [ ] Error states display appropriate messages
