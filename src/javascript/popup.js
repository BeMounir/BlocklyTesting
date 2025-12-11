function resetPopup() {
    const overlay = document.getElementById('popupOverlay');
    const popupBox = overlay.querySelector('*');
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

    if (popupBox) {
        popupBox.style.maxWidth = '';
    } else {
        console.error("Popup Box element not found inside the overlay!");
    }
    overlay.querySelectorAll('.preset-container').forEach(el => el.remove());

    const newOk = okBtn.cloneNode(true);
    const newCancel = cancelBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOk, okBtn);
    cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);

    return { overlay, popupBox, input, okBtn: newOk, cancelBtn: newCancel, titleEl, msg };
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

function showPresetPicker(presetCallback, title = "Kies een voorbeeldprogamma.") {
    const { overlay, popupBox, input, okBtn, cancelBtn, titleEl, msg } = resetPopup();

    popupBox.style.maxWidth = '900px';
    input.style.display = "none";
    titleEl.textContent = title;
    msg.textContent = "Kies één van de volgende voorbeeldprogamma's:";

    let presetContainer = overlay.querySelector(".preset-container");
    if (!presetContainer) {
        presetContainer = document.createElement("div");
        presetContainer.className = "preset-container";

        presetContainer.style.display = "flex";
        presetContainer.style.flexWrap = "wrap";
        presetContainer.style.gap = "12px";
        presetContainer.style.marginTop = "15px";
        presetContainer.style.justifyContent = "center";

        msg.insertAdjacentElement("afterend", presetContainer);
    } else {
        presetContainer.innerHTML = "";
    }

    const presets = [
        { id: 1, name: "Preset 1" },
        { id: 2, name: "Preset 2" },
        { id: 3, name: "Preset 3" },
        { id: 4, name: "Preset 4" },
        { id: 5, name: "Preset 5" },
    ];

    presets.forEach(p => {
        const btn = document.createElement("button");
        btn.textContent = p.name;

        btn.style.width = "100px";
        btn.style.height = "100px";
        btn.style.display = "flex";
        btn.style.alignItems = "center";
        btn.style.justifyContent = "center";
        btn.style.fontSize = "16px";
        btn.style.border = "1px solid #555";
        btn.style.background = "#2b2b2b";
        btn.style.color = "white";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";
        btn.style.transition = "0.2s";
        btn.onmouseenter = () => btn.style.background = "#444";
        btn.onmouseleave = () => btn.style.background = "#2b2b2b";

        btn.addEventListener("click", () => {
            overlay.style.display = "none";
            presetCallback(p.id);
        });

        presetContainer.appendChild(btn);
    });

    const newCancel = cancelBtn.cloneNode(true);
    cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);
    newCancel.addEventListener("click", () => {
        overlay.style.display = "none";
        presetCallback(null);
    });

    okBtn.style.display = "inline-block";
}
