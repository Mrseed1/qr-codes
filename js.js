document.getElementById('qrForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const linkInput = document.getElementById('linkInput');
    const qrCanvas = document.getElementById('qrCanvas');
    const qrText = document.getElementById('qrText');

    // Получаем данные из поля ввода
    const data = linkInput.value.trim();

    if (!data) {
        alert('Пожалуйста, введите ссылку.');
        return;
    }

    // Генерируем QR-код
    QRCode.toCanvas(qrCanvas, data, { width: 200 }, function (error) {
        if (error) {
            console.error('Ошибка при создании QR-кода:', error);
            qrText.textContent = 'Ошибка при генерации QR-кода.';
        } else {
            qrText.textContent = ''; // Очищаем текстовое сообщение
        }
    });
});
