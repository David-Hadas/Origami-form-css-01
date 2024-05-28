document.addEventListener('DOMContentLoaded', function() {
    // מצא את שדה הבחירה לפי name
    var selectField = document.querySelector('select[name="fld_2148_dup_g_257"]');
    // מצא את ה-div שמכיל את השדה המותנה
    var conditionalField = document.querySelector('.field_group.ng-scope.field_group_even');

    // וודא שמצאנו את האלמנטים
    if (selectField && conditionalField) {
        // בדוק את המצב ההתחלתי בעת טעינת הדף
        function checkInitialValue() {
            if (selectField.value && selectField.value !== '- בחר -') {
                conditionalField.style.display = 'block';
            } else {
                conditionalField.style.display = 'none';
            }
        }

        checkInitialValue();

        // הוסף מאזין לאירוע change
        selectField.addEventListener('change', function() {
            if (this.value && this.value !== '- בחר -') {
                conditionalField.style.display = 'block';
            } else {
                conditionalField.style.display = 'none';
            }
        });
    }
});
