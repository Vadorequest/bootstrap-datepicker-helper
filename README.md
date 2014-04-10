Bootstrap datepicker helper
===========================

*Helper for Bootstrap 3 DatePicker.*
https://github.com/eternicode/bootstrap-datepicker

> Note that this helper can be used by other datepicker such as jQuery datepicker, but the configuration array `datepickerOptions` should modified to fit its need.


# Summary

The script applies the `datepicker` to all `.datepicker` elements in the page once the DOM is loaded.
It takes care to merge both the default options (`js`) and the custom options (`html5 data attributes`).

## Example

`<div class="datepicker" data-date-format="dd/mm/yyyy"></div>`

> Will apply the `datepicker()` function to the div, and override the `format`option by using the `dd/mm/yyyy` format. 
> All other data attributes works the same way.
 
## Dependencies

- **Underscore.js**: Wonderful library that helps a lot to manage `arrays` and `collections` in `javascript`. http://underscorejs.org/
- **Objects merger**: Merge objects. Priority to the last object. (Erase values if same keys) https://github.com/Vadorequest/javascript-helpers/blob/master/object-merger/object_merge.js

# Features

- **Namespace**: The default chosen namespace is `date`, because it's the one used by the `bootstrap-datepicker` plugin. This means that all data attributes will be contained in `data-date` namespace to avoid conflicts.
- **Case**: The case of the options doesn't matter since we `toLowerCase()` the keys, it's not possible to have html5 data attribute element with an upper character. (*but it's possible to have a key with it*)

# Data attributes

Basically the script contains all `data-attribute` in an `javascript` object with default values. All options **must** be present in this object since the script uses the keys to search in the data attributes. If a key is not present in this default config object the data-attribute associated won't be found.

# Customize

Of course, this helper could not fill entirely your needs, don't hesitate to customize it for your application. *If you think that youre changes are useful, please share/discuss/PR. 

# Contributing

This script doesn't need to evolve too much, but if the `bootstrap-datepicker` evolves and add new options then we'll need to update this helper too. You're welcome to make a **PR**, I will take a look at it as soon as possible. 

# Roadmap

1. Don't use the `object_merge` function but use `underscore` instead.
2. Make a version that doesn't require `underscore`. (*I won't, but if someone want to, feel free!*)