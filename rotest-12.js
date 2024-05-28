document.addEventListener('DOMContentLoaded', function() {
    // מצא את שדה הבחירה לפי select2
    var selectField = document.querySelector('select[name="fld_2148_dup_g_257"]');
    // מצא את האלמנט שמציג את הבחירה
    var selectTextElement = document.querySelector('#select2-chosen-9');
    // מצא את ה-div שמכיל את האזור המותנה
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
