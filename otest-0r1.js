document.addEventListener('DOMContentLoaded', function() {
    var selectField = document.querySelector('select[name="fld_2148_dup_g_257"]');
    var conditionalField = document.getElementById('conditional-field');

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
