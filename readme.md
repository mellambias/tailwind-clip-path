# Tailwind CSS Clip-Path

The **clip-path CSS property** creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

This plugin adds utilities to use `clip-path` properties with Tailwind CSS described on [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

## Installation

Add this plugin to your project:

```bash
# Install using npm
npm install --save-dev tailwind-clip-path
```

### Add the plugin to file config

```js
// tailwind.config.js
{
  plugins: [
    require('tailwind-clip-path'),
  ],
}
```

## clip-path

The **clip-path** class

| Class                  | Properties                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| clip-path-none         | clip-path:none                                                                                                   |
| clip-path-margin       | clip-path:margin-box                                                                                             |
| clip-path-padding      | clip-path:padding-box                                                                                            |
| clip-path-content      | clip-path:content-box                                                                                            |
| clip-path-fill         | clip-path:fill-box                                                                                               |
| clip-path-stroke       | clip-path:stroke-box                                                                                             |
| clip-path-view         | clip-path:view-box                                                                                               |
| clip-path-inset        | clip-path:inset(100px 50px)                                                                                      |
| clip-path-circle       | clip-path:circle(50px at 0 100px)                                                                                |
| clip-path-ellipse      | clip-path:ellipse(50px 60px at 0 10% 20%)                                                                        |
| clip-path-polygon      | clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)                                                            |
| clip-path              | clip-path:path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z') |
| clip-path-inherit      | clip-path:inherit                                                                                                |
| clip-path-initial      | clip-path:initial                                                                                                |
| clip-path-revert       | clip-path:revert                                                                                                 |
| clip-path-revert-layer | clip-path:revert-layer                                                                                           |
| clip-path-unset        | clip-path:unset                                                                                                  |

### Applying conditionally

You let conditionally apply utility classes in different states using [variant modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states).

```html
<div class="hover:clip-path-ellipse">
  <!-- ... -->
</div>
```

### Breakpoints and media queries

You can also use variant modifiers to target [media queries](https://tailwindcss.com/docs/hover-focus-and-other-states#media-queries)

```html
<div class="md:clip-path-revert">
  <!-- ... -->
</div>
```

### Customizing your theme

You change, add, or remove utilities by editing the **theme.clipPath** section of your Tailwind config.

```js
// tailwind.config.js
{
  theme: {
    clipPath: {
        mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem))",
    },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
```

And use:

```html
<img src="" class="clip-path-mypolygon" />
```

### Arbitrary values

If you need to use a value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any [arbitrary value](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values).

This plugin provide arbitrary values for this clases

| Class             | values                                                                         |
| ----------------- | ------------------------------------------------------------------------------ |
| clip-path         |
| clip-path-inset   | Defines an inset rectangle.                                                    |
| clip-path-circle  | Defines a circle using a radius and a position.                                |
| clip-path-ellipse | Defines an ellipse using two radii and a position.                             |
| clip-path-polygon | Defines a polygon using an SVG filling rule and a set of vertices.             |
| clip-path-url     | Defines a shape using an optional SVG filling rule and an SVG path definition. |

```html
<div
  class="h-20 clip-path-polygon-[0_0,_100%_0,_100%_100%,_0_calc(100%_-_1rem)]"
>
  <!-- ... -->
</div>
```
