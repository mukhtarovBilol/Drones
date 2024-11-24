function toggleMenu() {
    const mobileMenu = document.querySelector('.nav__list--mobile');
    mobileMenu.classList.toggle('active');
}

// Закрытие меню при клике вне его области
document.addEventListener('click', function (event) {
    const mobileMenu = document.querySelector('.nav__list--mobile');
    const burger = document.querySelector('.nav__burger');
    
    // Проверяем, был ли клик вне меню и вне бургер-меню
    if (!mobileMenu.contains(event.target) && !burger.contains(event.target)) {
        mobileMenu.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Состояние меню (открыто/закрыто)
    let isMenuOpen = false;

    // Обработчик клика по кнопке
    dropdownButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        dropdownMenu.style.display = isMenuOpen ? 'block' : 'none';
    });

    // Закрытие меню при клике вне области меню
    document.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            isMenuOpen = false;
            dropdownMenu.style.display = 'none';
        }
    });
});
