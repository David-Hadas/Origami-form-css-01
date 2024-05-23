<script>
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.field_name');
    elements.forEach(function(element) {
        if (element.textContent.includes('טקסט קישור לישות ביקורים')) {
            element.style.display = 'none';
        }
    });
});
</script>
