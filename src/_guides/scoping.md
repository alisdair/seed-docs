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

## Scoping + Inheritance

This is where things get *really* deliciously wonderful. It is recommended that you check out our guide on [inheritance](/seed-docs/guide/inheritance) before continuing (or not, it's up to you).

Let's say, we have 2 classes that are very similar to one another. We don't want to have to unnecessarily repeat code (there's that [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) again!). Here's how we would approach it by combining scoping and inheritance.

Below is a `_condiment-base.scss` file that contains properties that the two classes will be sharing:

```scss
// _condiment-base.scss
& {
  background: $color;
  border-radius: 50%;
  padding: 10px;
}
```

(If you're super confused with the `&` selector, I really recommend taking a look at our [inheritance guide](/seed-docs/guide/inheritance).)

Let's bring that sucker into our two classes in our `main.scss` file:

```scss
// main.scss

// Variables
// Purple is a cool colour. We'll probably use it
// somewhere in our code.
$color: purple;

.ketchup {
  $color: red; // change $color just for .ketchup
  @import "./condiment-base"; // inherit the base styles
}

.mustard {
  $color: yellow; // change $color just for .mustard
  @import "./condiment-base"; // inherit the base styles
}
```

Check out our compiled `main.css` file:

```scss
.ketchup {
  background: red;
  border-radius: 50%;
  padding: 10px;
}

.mustard {
  background: yellow;
  border-radius: 50%;
  padding: 10px;
}
```

Hold up. A lot just happened. Let us break it down.

```scss
.ketchup {
  $color: red; // change $color just for .ketchup
  @import "./condiment-base"; // inherit the base styles
}
```

In the above snippet, we change the value of the `$color` variable in the scope of `.ketchup`. `$color`, which was once orange is now red  (at least in the context of `.ketchup`). Because [purple ketchup](http://the-foods-we-loved.wikia.com/wiki/Heinz_EZ_Squirt)? Gross.

Next, we import the `_conditment-base.scss` styles within `.ketchup`.

```scss
// _condiment-base.scss
& {
  background: $color;
  border-radius: 50%;
  padding: 10px;
}
```

Normally, `$color` would be replaced by purple once the code compiles. However, in this particular case, it be replaced with red due to our tweak in `.ketchup`.
This results in our `.ketchup` class looking like this:


```scss
.ketchup {
  background: red;
  border-radius: 50%;
  padding: 10px;
}
```

The same thing happens with our `.mustard` class, except instead of the `$color` being red, it will be yellow.

```scss
.mustard {
  background: yellow;
  border-radius: 50%;
  padding: 10px;
}
```

After the scope adjustments in `.ketchup` and `.mustard`, `$color` is back to being purple - ready to colourize other classes like, I don't know, [`.hamburger-bun`](https://www.reddit.com/r/tipofmytongue/comments/443uvi/tomt_multi_colored_hot_dog_buns_from_wonder_bread/).
