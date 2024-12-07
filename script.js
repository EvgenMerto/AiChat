function sendQuestion() {
    const question = document.getElementById('questionInput').value.trim();

    if (!question) {
        alert("Пожалуйста, введите вопрос.");
        return;
    }

    // Отправка запроса на сервер
    fetch('/api/answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseArea').innerHTML = data.answer;
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке вопроса.');
    });
}
