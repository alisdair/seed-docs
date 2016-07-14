---
title: Extending
description: "Our humble opinion on Sass's @extend function."
---

<p class="t-headline-4 t-lh-heading t-300">Don't use @extend.</p>

_This is just our humble opinion. You are 100% totally free to use `@extend` if you wish._

### Powerful, but unpredictable

`@extend` is an undeniably powerful function in the sass/scss arsenal. For simpler use cases (example below), `@extend` _should_ work as expected.

**A simple example of `@extend`**

```scss
// Input
.c-panel {
  padding: 20px;
}

.c-box {
  @extend .c-panel;
}

// Output
.c-panel, .c-box {
  padding: 20px;
}
```

`.c-box` inheriting the properties of `.c-panel` is expected. However, the grouping of the classes together is not.

If `.c-panel` was somewhere up higher on the stylesheet, and `.c-box` was somewhere lower, this `@extend` effect magically shifts things around. This little detail is especially important if you **needed** `.c-box` to be lower on your stylesheet.


### Extend doesn't extend everything

`@extend` only extends the top level properties of the class. A great use case would be with sass/scss written with the BEM structure. In the below example, we can see where `@extend` falls short.

**A more complicated example of `@extend`**

```scss
// Input
.c-panel {
  border-radius: 3px;

  &__body {
    padding: 10px;
  }
}

.c-box {
  @extend .c-panel;
}

// Output
.c-panel, .c-box {
  border-radius: 3px;
}

.c-panel__body {
  padding: 10px;
}
```

Based on how `.c-panel` is structured, utilizing the `&` to inherit the parent selector, you would _think_ that `@extend` would respect the nested class of `&__body`. But nope.
