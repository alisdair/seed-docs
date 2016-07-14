---
title: Inheritance
description: Proper inheritance where you can extend code without breaking all the things.
---

### Simple inheritance example

Let's start with an example `_base.scss` file.

```scss
// _base.scss
& {
  background-color: blue;
}
```

Wait. The selector is an `&`. This is the entire file? Yes, and yes. This might seem insane, but bear with me.

Next, in our `box.scss` file, we're going to `@import` the `_base.scss` file from within the class. (Check out our guide on [scoping](/seed-docs/guide/scoping)).

```scss
// box.scss
.box {
  @import "./base";
}
```

By `@import`ing the `_base.scss` file within the `.box` class, the `&` selector inherits it's parent selector. So `&` *becomes* `.box`. Crazy right?


Compiled `box.css` file:

```scss
// box.css
.box {
  background-color: blue;
}
```

### Let's make this interesting

Take the same `box.scss` file as before:

```scss
// box.scss
.box {
  @import "./base";
}
```

Let's BEM up `_base.scss`:

```scss
// _base.scss
& {
  background-color: blue;

  &__item {
    background-color: red;
  }
}
```

Whoa whoa! Double `&`?! Heck yes double `&`!

Once this file is `@import`ed into `box.scss`, the first `&` inherits the parent, which transforms it to `.box`. The second `&` inherits it's parent, which also makes it `.box`.

The new compiled `box.css` file:

```scss
// box.css
.box {
  background-color: blue;
}
.box__item {
  background-color: red;
}
```

### Now this is how you extend.


Here is our BEM'ed up `_base.scss`:

```scss
// _base.scss
& {
  background-color: blue;

  &__item {
    background-color: red;
  }
}
```


Let's say we want to use this structure for multiple classes, without having to rewrite the same code (cause keeping things DRY is super cool). `@extend` doesn't work, as it doesn't extend nested styles. Also, `@extend` doesn't work on a `&`.

Here's how you would do it:

`components.scss` file:

```scss
// components.scss
.box {
  @import "./base";
}

.panel {
  @import "./base";
}
```

The compiled `components.css` file:

```scss
// components.css
.box {
  background-color: blue;
}
.box__item {
  background-color: red;
}

.panel {
  background-color: blue;
}
.panel__item {
  background-color: red;
}
```
