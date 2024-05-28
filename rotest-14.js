document.addEventListener('DOMContentLoaded', function() {
    // ודא שהדף נטען
    var selectField = document.querySelector('select[name="fld_2148_dup_g_257"]');
    var selectTextElement = document.querySelector('#select2-chosen-9');
    var conditionalField = document.querySelector('.field_group.ng-scope.field_group_even');

    if (selectField && selectTextElement && conditionalField) {
        function checkFieldVisibility() {
            var selectedText = selectTextElement.textContent.trim();
            if (selectedText && selectedText !== '- בחר -') {
                conditionalField.style.display = 'block';
            } else {
                conditionalField.style.display = 'none';
            }
        }

        // בדוק את המצב ההתחלתי בעת טעינת הדף
        checkFieldVisibility();

        // הוסף מאזין לאירוע שינוי של select2
        selectField.addEventListener('change', function() {
            checkFieldVisibility();
        });
    }
});
