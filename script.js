// Переключение языка
function setLang(lang) {
  if(lang === 'ru') {
    document.getElementById('ramen-title').innerText = '🍜 Рамен';
    document.getElementById('ramen1-name').innerText = 'Острый рамен';
    document.getElementById('ramen1-desc').innerText = 'Бульон, лапша, яйцо';
    document.getElementById('ramen2-name').innerText = 'Кимчи рамен';
    document.getElementById('ramen2-desc').innerText = 'Кимчи, мясо';
    document.getElementById('snacks-title').innerText = '🍡 Закуски';
    document.getElementById('tokpokki-name').innerText = 'Токпокки';
    document.getElementById('tokpokki-desc').innerText = 'Рисовые клецки';
  } else {
    document.getElementById('ramen-title').innerText = '🍜 Рамен';
    document.getElementById('ramen1-name').innerText = 'Ащы рамен';
    document.getElementById('ramen1-desc').innerText = 'Сорпа, кеспе, жұмыртқа';
    document.getElementById('ramen2-name').innerText = 'Кимчи рамен';
    document.getElementById('ramen2-desc').innerText = 'Кимчи, ет';
    document.getElementById('snacks-title').innerText = '🍡 Тіске тағамдар';
    document.getElementById('tokpokki-name').innerText = 'Токпокки';
    document.getElementById('tokpokki-desc').innerText = 'Күріш кеспесі';
  }
}

// Кнопка "Позвать официанта" — сразу WhatsApp
document.querySelector('.call').addEventListener('click', function() {
  const params = new URLSearchParams(window.location.search);
  const table = params.get("table") || "не указан";

  const phone = "77086684632"; // ← ЗАМЕНИ НА СВОЙ НОМЕР WhatsApp
  const text = encodeURIComponent(`Здравствуйте! Стол №${table} вызывает официанта 🍽️`);
  
  // сразу открываем WhatsApp
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});
