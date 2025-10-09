function resetPopup() {
    const overlay = document.getElementById('popupOverlay');
    const input = document.getElementById('popupInput');
    const okBtn = document.getElementById('popupOk');
    const cancelBtn = document.getElementById('popupCancel');
    const titleEl = document.getElementById('popupTitle');
    const msg = document.getElementById('popupMessage');

    overlay.style.display = 'flex';
    input.style.display = 'block';
    cancelBtn.style.display = 'inline-block';
    input.value = '';
    titleEl.textContent = '';
    msg.textContent = '';

    const newOk = okBtn.cloneNode(true);
    const newCancel = cancelBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOk, okBtn);
    cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);

    return { overlay, input, okBtn: newOk, cancelBtn: newCancel, titleEl, msg };
}

function showCustomPrompt(message, defaultValue = '', title = "Opslaan", callback) {
    const { overlay, input, okBtn, cancelBtn, titleEl, msg } = resetPopup();

    titleEl.textContent = title;
    msg.textContent = message;
    input.value = defaultValue;
    input.focus();

    okBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        callback(input.value.trim() || null);
    });

    cancelBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        callback(null);
    });
}

function showCustomAlert(message, title = "Bericht") {
    const { overlay, input, okBtn, cancelBtn, titleEl, msg } = resetPopup();

    input.style.display = 'none';
    cancelBtn.style.display = 'none';
    titleEl.textContent = title;
    msg.textContent = message;

    okBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
}

function showCustomConfirm(message, callback, title = "Bevestigen") {
    const { overlay, input, okBtn, cancelBtn, titleEl, msg } = resetPopup();

    input.style.display = 'none';
    titleEl.textContent = title;
    msg.textContent = message;

    okBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        callback(true);
    });

    cancelBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        callback(false);
    });
}
