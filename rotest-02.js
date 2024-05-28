document.addEventListener('DOMContentLoaded', function() {
    // מצא את שדה הבחירה המדויק
    var selectField = document.querySelector('.select2-container[id="s2id_autogen3"] select[name="fld_2148_dup_g_257"]');
    // מצא את השדה המותנה המדויק
    var conditionalField = document.querySelector('.field_group.ng-scope.field_group_even');

    selectField.addEventListener('change', function() {
        if (this.value !== '' && this.value !== '- בחר -') {
            conditionalField.style.display = 'block';
        } else {
            conditionalField.style.display = 'none';
        }
    });

    // לבדוק את המצב ההתחלתי בעת טעינת הדף
    if (selectField.value !== '' && selectField.value !== '- בחר -') {
        conditionalField.style.display = 'block';
    } else {
        conditionalField.style.display = 'none';
    }
});
