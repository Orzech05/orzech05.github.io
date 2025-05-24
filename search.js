document.querySelectorAll('.searchInput').forEach(input => {
    input.addEventListener('input', function () {
        const filter = this.value.toLowerCase();
        const items = document.querySelectorAll('.searchOutput .searchable');

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "grid" : "none";
        });
    });
});