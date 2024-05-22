document.addEventListener('DOMContentLoaded', function() {
  var options = [
    { value: "מעונין בתזכורת", text: "מעונין בתזכורת" },
    { value: "כבר קבעתי תור לרופא", text: "כבר קבעתי תור לרופא" },
    { value: "סיימתי הכל", text: "סיימתי הכל" },
    { value: "מעונין לסגור את התיק", text: "מעונין לסגור את התיק" },
    { value: "לא מעונין ללכת לרופא", text: "לא מעונין ללכת לרופא" }
  ];

  var container = document.createElement('div');
  container.className = 'custom-buttons-container';

  options.forEach(function(option) {
    var button = document.createElement('button');
    button.className = 'custom-button';
    button.innerText = option.text;
    button.addEventListener('click', function() {
      var select = document.querySelector('select[name="fld_2098"]');
      select.value = option.value;
      var event = new Event('change');
      select.dispatchEvent(event);
    });
    container.appendChild(button);
  });

  var fieldWrapper = document.querySelector('.field_name_wrapper');
  fieldWrapper.innerHTML = '';
  fieldWrapper.appendChild(container);
});
