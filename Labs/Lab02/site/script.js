document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const agree = document.getElementById('agree').checked;

            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все обязательные поля!');
                return;
            }

            if (!agree) {
                alert('Пожалуйста, согласитесь с политикой конфиденциальности!');
                return;
            }

            alert('Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.');
            form.reset();
        });
    }

    const detailsBtns = document.querySelectorAll('.details-btn');
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Подробная информация об услуге будет добавлена в будущем обновлении.');
        });
    });

    const searchForms = document.querySelectorAll('.search-form');
    searchForms.forEach(searchForm => {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = this.querySelector('input').value.trim();
            if (query) {
                alert(`Поиск по запросу: "${query}" (функция поиска в разработке).`);
            }
        });
    });
});