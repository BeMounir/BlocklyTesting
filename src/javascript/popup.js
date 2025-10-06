function showCustomPrompt(message, defaultValue, callback) {
    const overlay = document.getElementById('popupOverlay');
    const input = document.getElementById('popupInput');
    const okBtn = document.getElementById('popupOk');
    const cancelBtn = document.getElementById('popupCancel');
    const msg = document.getElementById('popupMessage');

    msg.textContent = message;
    input.value = defaultValue || '';

    overlay.style.display = 'flex';
    input.focus();

    function closePopup(result) {
        overlay.style.display = 'none';
        okBtn.removeEventListener('click', okHandler);
        cancelBtn.removeEventListener('click', cancelHandler);
        callback(result);
    }

    function okHandler() { closePopup(input.value.trim() || null); }
    function cancelHandler() { closePopup(null); }

    okBtn.addEventListener('click', okHandler);
    cancelBtn.addEventListener('click', cancelHandler);
}

function showCustomAlert(message, title = "Bericht") {
    const overlay = document.getElementById('popupOverlay');
    const popup = document.querySelector('.popup');
    const input = document.getElementById('popupInput');
    const okBtn = document.getElementById('popupOk');
    const cancelBtn = document.getElementById('popupCancel');
    const msg = document.getElementById('popupMessage');
    const titleEl = document.getElementById('popupTitle');

    input.style.display = "none";
    cancelBtn.style.display = "none";
    titleEl.textContent = title;
    msg.textContent = message;

    overlay.style.display = 'flex';

    okBtn.onclick = () => {
        overlay.style.display = 'none';
        input.style.display = "block";
        cancelBtn.style.display = "inline-block";
    };
}

function showCustomConfirm(message, callback, title = "Bevestigen") {
    const overlay = document.getElementById("popupOverlay");
    const titleElem = document.getElementById("popupTitle");
    const messageElem = document.getElementById("popupMessage");
    const inputElem = document.getElementById("popupInput");
    const okBtn = document.getElementById("popupOk");
    const cancelBtn = document.getElementById("popupCancel");

    titleElem.textContent = title;
    messageElem.textContent = message;
    inputElem.style.display = "none";
    overlay.style.display = "flex";

    okBtn.onclick = () => {
        overlay.style.display = "none";
        callback(true);
    };

    cancelBtn.onclick = () => {
        overlay.style.display = "none";
        callback(false);
    };
}

