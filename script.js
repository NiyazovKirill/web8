document.addEventListener('DOMContentLoaded', function(){
    var openFormBtn = document.getElementById('openFormBtn');
    var popupWrapper = document.getElementById('popupWrapper');
    var feedbackForm = document.getElementById('feedbackForm');

    // Проверяем, есть ли сохраненные данные в LocalStorage
    var savedFormData = localStorage.getItem('feedbackFormData');
    if (savedFormData) {
        feedbackForm.elements.name.value = JSON.parse(savedFormData).name;
        feedbackForm.elements.email.value = JSON.parse(savedFormData).email;
        feedbackForm.elements.phone.value = JSON.parse(savedFormData).phone;
        feedbackForm.elements.organization.value = JSON.parse(savedFormData).organization;
        feedbackForm.elements.message.value = JSON.parse(savedFormData).message;
    }

    // Открытие формы при клике на кнопку
    openFormBtn.addEventListener('click', function () {
        popupWrapper.style.display = 'flex';
        history.pushState(null, null, '#open');
    });

    // Закрытие формы при нажатии "Назад" в браузере
    window.addEventListener('popstate', function () {
        if (popupWrapper.style.display === 'flex') {
            popupWrapper.style.display = 'none';
        }
    });

    // Отправка формы
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://formcarry.com/s/exampleFormId');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
        }
    })

})


