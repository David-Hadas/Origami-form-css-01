document.addEventListener('DOMContentLoaded', function() {
    // מצא את שדה הבחירה לפי name
    var selectField = document.querySelector('select[name="fld_2148_dup_g_257"]');
    // מצא את ה-div שמכיל את האזור המותנה
    var conditionalField = document.querySelector('div.ng-scope.field_group_body');

    if (selectField && conditionalField) {
        function checkFieldVisibility() {
            if (selectField.value && selectField.value !== '- בחר -') {
                conditionalField.style.display = 'block';
            } else {
                conditionalField.style.display = 'none';
            }
        }

        // בדוק את המצב ההתחלתי בעת טעינת הדף
        checkFieldVisibility();

        // הוסף מאזין לאירוע change
        selectField.addEventListener('change', function() {
            checkFieldVisibility();
        });
    }
});
