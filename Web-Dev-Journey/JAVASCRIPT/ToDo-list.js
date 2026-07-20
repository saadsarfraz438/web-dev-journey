document.addEventListener('DOMContentLoaded', () => {
    // Select all checkboxes inside the to-do list
    const checkboxes = document.querySelectorAll('.todo-list input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            // Find the label associated with this checkbox
            const label = document.querySelector(`label[for="${event.target.id}"]`);
            
            if (label) {
                if (event.target.checked) {
                    label.classList.add('completed');
                } else {
                    label.classList.remove('completed');
                }
            }
        });
    });
});
