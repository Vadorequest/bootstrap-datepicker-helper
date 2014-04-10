/**
 * Use bootstrap datepicker.
 * This script run when the DOM is loaded and change all elements that contains the datepicker class.
 * For all elements, it will apply a datepicker that will merge both default options and custom options.
 * Default options are defined in this script while custom options are defined as HTML5 data attributes.
 *
 * All data attributes are usable. They have either our custom default value or the bootstrap default values.
 *
 * @example
 * f.input :birthday, input_html: {class: 'datepicker', 'data-date-startView' => 'decade', 'data-date-format' => 'yyyy/mm/dd'}
 *
 * @see http://www.eyecon.ro/bootstrap-datepicker/
 */
$(function(){
  // Html5 data attribute namespace. Ex: data-date-autoclose => 'date' is the namespace.
  var namespace = 'date';

  // Default options for the whole application.
  var datepickerOptions = {
    autoclose: true,
    calendarWeeks: true,
    daysOfWeekDisabled: false,
    endDate: false,
    forceParse: true,
    format: 'dd/mm/yyyy',
    keyboardNavigation: true,
    language: 'en',
    minViewMode: 'days',
    multidate: false,
    multidateSeparator: ',',
    orientation: 'auto',
    startDate: false,
    startView: 'month',
    todayBtn: 'linked',
    todayHighlight: true
  };

  _.map($('.datepicker'), function(element){
    // Will contain the custom options (defined by css for the input itself).
    var customOptions = {};

    // For each attributes use the data-{attr} value if defined.
    _.map(_.keys(datepickerOptions), function(attr){
      // Use the namespace if defined. Html5 data attributes don't use Upper case, but keys could.
      var attr_name = ((namespace ? namespace + '-' : '') + attr).toLowerCase();
      if(typeof $(element).data(attr_name) !== 'undefined') customOptions[attr] = $(element).data(attr_name);
    });

    // Merge default and custom options and apply the tooltip.
    $(element).datepicker(object_merge(datepickerOptions, customOptions));
  });
});