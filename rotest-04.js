document.addEventListener('DOMContentLoaded', function() {
    // מצא את ה-select field לפי ה-name
    var selectField = document.querySelector('select[name="fld_2148_dup_g_257"]');
    // מצא את ה-div שמכיל את השדה המותנה
    var conditionalField = document.querySelector('.field_group.ng-scope.field_group_even');

    if (selectField && conditionalField) {
        // הוסף מאזין לאירוע change
        selectField.addEventListener('change', function() {
            if (this.value !== '' && this.value !== '- בחר -') {
                conditionalField.style.display = 'block';
            } else {
                conditionalField.style.display = 'none';
            }
        });

        // בדוק את המצב ההתחלתי בעת טעינת הדף
        if (selectField.value !== '' && selectField.value !== '- בחר -') {
            conditionalField.style.display = 'block';
        } else {
            conditionalField.style.display = 'none';
        }
    }
});
