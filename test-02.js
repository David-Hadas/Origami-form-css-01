document.addEventListener("DOMContentLoaded", function() {
    // איתור הכפתור
    var submitButton = document.querySelector(".submitButton");
    // איתור תיבת הבחירה
    var selectElement = document.querySelector(".statusSelect");

    if (submitButton && selectElement) {
        submitButton.addEventListener("click", function() {
            var selectedValue = selectElement.value;

            if (selectedValue === "נבדקתי") {
                // איתור והחלפת תגובת ברירת המחדל
                var defaultResponseElement = document.querySelector("#responseMessage");
                if (defaultResponseElement) {
                    defaultResponseElement.innerText = "מעולה, נמתין לתגובת חברת הביטוח.";
                    defaultResponseElement.style.fontSize = "1em";
                    defaultResponseElement.style.fontWeight = "normal";
                } else {
                    alert("מעולה, נמתין לתגובת חברת הביטוח."); // fallback אם לא נמצא האלמנט
                }
            }
        });
    }
});
