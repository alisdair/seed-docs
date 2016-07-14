---
title: Scoping
description: Oh yes. Scoping is very much a thing in Sass. Do it.
---

Note: Proper docs coming soon.

### Scoping example with variables

```scss
// Input
$pink-hot: pink; // Declare the variable

.box {
  background: $pink-hot;
}

.post {
  $pink-hot: red; // Tweak the variable
  background: $pink-hot;
}

.footer {
  background: $pink-hot; // Is this pink… or red?
}

// Output
.box {
  background: pink;
}

.post {
  background: red;
}

.footer {
  background: pink; // Pink. Ah yeah.
}
```


### Scoping example with `@import`

**Unscoped `@import`**

```scss
@import "variables/a-thing";
// From this point forward,
// $thing will be available to EVERYTHING.
.box {
  background: $thing;
}
```

**Scoped `@import`**

```scss
.box {
  @import "variables/a-thing";
  // $thing is only available within .box
  background: $thing;
}
// $thing? What $thing? You crazy.
```
