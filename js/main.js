// Функция для подгрузки HTML-файлов
async function loadHTML(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Ошибка загрузки ${filePath}`);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

// Загружаем части страницы
loadHTML("header", "header.html");
loadHTML("content", "content.html");
loadHTML("footer", "footer.html");
