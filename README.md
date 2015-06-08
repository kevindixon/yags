# Yet Another Grid System (YAGS)
A semantic grid system using pure [LESS](http://lesscss.org) or [SASS](http://sass-lang.com).
## Why?
There are plenty of responsive grid systems out there, so why create another? Well, in the course of a new  project we needed a grid that was:
* Semantic in nature - we wanted to avoid polluting the HTML with styling classes as many grid systems seem to do (such as Bootstrap)
* Supports [SASS](http://sass-lang.com) and [LESS](http://lesscss.org)
* Supports 3 responsive layouts
* The ability to set the number of columns and margin/gutter on a per-layout basis
* Supports fixed margins and column gutter with fluid content

Having looked at a number of grid systems ([semantic.gs](http://semantic.gs/), [pocketgrid](http://arnaudleray.github.io/pocketgrid/), [Unsemantic](http://unsemantic.com/demo-responsive), [Profound Grid](https://github.com/artofrawr/profoundgrid/), [Neat](https://github.com/thoughtbot/neat), [Proportional](https://github.com/mattberridge/Proportional-Grids/), [Golden](http://goldengridsystem.com/), [Inuit](http://terabytenz.github.io/inuit.css-kitchensink/#grids) and [Flawless](https://github.com/laughingwithu/flawless-semantics-grid)) none fulfilled all the requirements for the project.
So, we went ahead and wrote our own.

YAGS is based on [pocketgrid](http://arnaudleray.github.io/pocketgrid/) with a number of modifications (including LESS/SASS support).
## Usage
Content is wrapped in a 'row' block element, which in turn contain 'cell' block elements that can take up a variable number of columns in the grid. Rows and cells can be any block element (not just ```<div>```).

A row is created using ```.row()``` (```@include row()``` for SASS), and a cell element is created using ```.col(@large_cols, @medium_cols, @small_cols)``` (```@include col(...)``` for SASS) where ```@large_cols``` is the number columns for the 'large' layout, ```@medium_cols``` the number of columns for the 'medium' layout and ```@small_cols``` the number of columns for the 'small' layout.

In order to support fixed gutters, the content should then be wrapped in a inned block element using ```.col-inner()```.

If you wish a cell to bleed into the gutter, you can do this with ```.bleed()```.

For example:

```html
<div class="my-row">
	<div class="my-cell">
		<div class="my-inner-cell">
		</div>
	<div class="my-cell my-bleed">
		<div class="my-inner-cell">
		</div>
	</div>
</div>
```
```less
/* LESS */
@import "less/yags.less";
@breakpoint_medium_layout: 1024px; 	/* Over-ride config */

.my-row {
	.row();
}
.my-cell {
	.col(@large_cols: 12, @medium_cols: 10, @small_cols: 6);
}
.my-bleed {
	.bleed();
}
.my-inner-cell {
	.col-inner();
}
```
```sass
/* SASS */
@import "sass/yags.scss";
$breakpoint_medium_layout: 1024px; 	/* Over-ride config */

.my-row {
	@include row();
}
.my-cell {
	@include col($large_cols: 12, $medium_cols: 10, $small_cols: 6);
}
.my-bleed {
	@include bleed();
}
.my-inner-cell {
	@include col-inner();
}
```

###Row()
This mixin adds a row, and takes two parameters which specify whether margin should be included on the left and right respectively. Both default to 'false'.
```sass
.my-row {
	// Include no margin in the row
	@include row($margin-left: false, $margin-right: false);
}
```
```less
.my-row {
	// Include no margin in the row
	@include row(@margin-left: false, @margin-right: false);
}
```

##Configuration
For each configuration variable, a default is provided. Over-ride the default by defining the configuration variable after you include ```yags.less``` or ```yags.scss```.

The grid supports two breakpoints (three layouts), which are defined as (LESS):
```
@breakpoint_medium_layout: 1024px;
@breakpoint_small_layout: 762px;
```

The number of columns in the grid are controlled on a per-layout basis (LESS):
```
@columns_large_layout: 12;
@columns_medium_layout: 12;
@columns_small_layout: 6;
```

The gutter size in the grid are controlled on a per-layout basis (LESS):
```
@gutter_large_layout: 40px;
@gutter_medium_layout: 30px;
@gutter_small_layout: 20px;
```

Note that is assumed the left/right margin of the grid is the same as the gutter.

##Examples
There is a pre-compiled example in ```example.html```. In order to create the example CSS, [Grunt](http://gruntjs.com) is used - you can compile the CSS with ```grunt example-less``` or ```grunt example-sass```.