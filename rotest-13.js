document.addEventListener('DOMContentLoaded', function() {
    // מצא את ה-iframe
    var iframe = document.querySelector('#iframe_div iframe');
    
    // וודא שה-iframe נטען
    iframe.onload = function() {
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // מצא את שדה הבחירה בתוך ה-iframe
        var selectField = iframeDocument.querySelector('select[name="fld_2148_dup_g_257"]');
        // מצא את האלמנט שמציג את הבחירה בתוך ה-iframe
        var selectTextElement = iframeDocument.querySelector('#select2-chosen-9');
        // מצא את ה-div שמכיל את האזור המותנה בתוך ה-iframe
        var conditionalField = iframeDocument.querySelector('.field_group.ng-scope.field_group_even');

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

            // הוסף מאזין לאירוע שינוי של select2 בתוך ה-iframe
            selectField.addEventListener('change', function() {
                checkFieldVisibility();
            });
        }
    };
});
