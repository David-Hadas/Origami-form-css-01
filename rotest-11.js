document.addEventListener('DOMContentLoaded', function() {
    // מצא את האלמנט שמציג את הבחירה
    var selectTextElement = document.querySelector('#select2-chosen-9');
    // מצא את ה-div שמכיל את האזור המותנה
    var conditionalField = document.querySelector('.field_group.ng-scope.field_group_even');

    if (selectTextElement && conditionalField) {
        function checkFieldVisibility() {
            if (selectTextElement.textContent.trim() && selectTextElement.textContent.trim() !== '- בחר -') {
                conditionalField.style.display = 'block';
            } else {
                conditionalField.style.display = 'none';
            }
        }

        // בדוק את המצב ההתחלתי בעת טעינת הדף
        checkFieldVisibility();

        // הוסף מאזין לאירוע שינוי למקרה שהערך משתנה
        document.querySelector('.select2-choice').addEventListener('DOMSubtreeModified', function() {
            checkFieldVisibility();
        });
    }
});
