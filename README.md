# Yet Another Grid System (YAGS)
A semantic grid system using pure [SASS](http://sass-lang.com).
## Why?
There are plenty of responsive grid systems out there, so why create another? Well, in the course of a new  project we needed a grid that was:
* Semantic in nature - we wanted to avoid polluting the HTML with styling classes as many grid systems seem to do (such as Bootstrap)
* Supports [SASS](http://sass-lang.com)
* Supports 3 responsive layouts
* The ability to set the number of columns and margin/gutter on a per-layout basis
* Supports fixed margins and column gutter with fluid content

Having looked at a number of grid systems ([semantic.gs](http://semantic.gs/), [pocketgrid](http://arnaudleray.github.io/pocketgrid/), [Unsemantic](http://unsemantic.com/demo-responsive), [Profound Grid](https://github.com/artofrawr/profoundgrid/), [Neat](https://github.com/thoughtbot/neat), [Proportional](https://github.com/mattberridge/Proportional-Grids/), [Golden](http://goldengridsystem.com/), [Inuit](http://terabytenz.github.io/inuit.css-kitchensink/#grids) and [Flawless](https://github.com/laughingwithu/flawless-semantics-grid)) none fulfilled all the requirements for the project.
So, we went ahead and wrote our own.

YAGS is based on [pocketgrid](http://arnaudleray.github.io/pocketgrid/) with a number of modifications (including SASS support).
## Usage
Content is wrapped in a 'row' block element, which in turn contain 'cell' block elements that can take up a variable number of columns in the grid. Rows and cells can be any block element (not just ```<div>```).

A row to include cells in is created using ```@extend .row```. By default, a row has a margin added to left and right that matches 1/2 of the gutter between cells. In this way the left and right margins match the gutters between cells. 
If you wish to have a row without such margins use ```@extend .row-without-gutter```

A cell element to include in a row is created using ```@include col($large_cols, $medium_cols, $small_cols)``` where ```$large_cols``` is the number columns for the 'large' layout, ```$medium_cols``` the number of columns for the 'medium' layout and ```$small_cols``` the number of columns for the 'small' layout.

###Fixed gutters
In order to support fixed gutters, the content should then be wrapped in a inned block element by extending ```.col-gutter```. Note that this is achieved with margins.

###Gutter bleed
If you wish a cell to bleed into the gutter (set with ```.col-gutter```, you can do this with ```@extend .bleed-left``` and ```@extend .bleed-right```.

###Push and pull
If you wish to swap order of cells, use ```@include push($large_cols, $medium_cols, $small_cols)``` to move one cell the right, and move the other to the left with ```@include pull($large_cols, $medium_cols, $small_cols)```. 

For example:

```html
<div class="my-row">
	<div class="my-cell">
		<div class="my-inner-cell">
		</div>
	</div>
	<div class="my-cell my-bleed">
		<div class="my-inner-cell">
		</div>
	</div>
</div>
<div class="my-row">
	<div class="my-cell second">
	</div>
	<div class="my-cell first">
	</div>
</div>
```
```sass
/* SASS */
@import "sass/yags.scss";
$breakpoint_medium_layout: 1024px; 	/* Over-ride config */

.my-row {
	@extend .row;
}
.my-cell {
	@include col($large_cols: 6, $medium_cols: 6, $small_cols: 2);
}
.my-bleed {
	@extend .bleed-left;
	@extend .bleed-right;
}
.my-inner-cell {
	@extend .col-inner;
}

/*
Swap order of cells with push() and pull()
*/
.first {
	/* Pull to left */
	@include pull($large_cols: 6, $medium_cols: 6, $small_cols: 2);
}
.second {
	/* Push to right */
	@include push($large_cols: 6, $medium_cols: 6, $small_cols: 2);
}
```
If you specify the number of columns as 0, push/pull will be reset so in the relevant layout, the block isn't moved.

##Configuration
For each configuration variable, a default is provided. Over-ride the default by defining the configuration variable after you include ```yags.scss```.

The grid supports two breakpoints (three layouts), which are defined as:
```
$breakpoint_medium_layout: 1024px;
$breakpoint_small_layout: 762px;
```

The number of columns in the grid are controlled on a per-layout basis:
```
$columns_large_layout: 12;
$columns_medium_layout: 12;
$columns_small_layout: 6;
```

The gutter size in the grid are controlled on a per-layout basis:
```
$gutter_large_layout: 40px;
$gutter_medium_layout: 30px;
$gutter_small_layout: 20px;
```

Note that is assumed the left/right margin of the grid is the same as the gutter.

##Examples
There is a pre-compiled example in ```example.html```. In order to create the example CSS, [Grunt](http://gruntjs.com) is used - you can compile the CSS with ``grunt```.