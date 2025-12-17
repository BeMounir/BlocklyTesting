function resetPopup() {
    const overlay = document.getElementById('popupOverlay');
    const popupBox = overlay.querySelector('.popup');
    const input = document.getElementById('popupInput');
    const okBtn = document.getElementById('popupOk');
    const cancelBtn = document.getElementById('popupCancel');
    const titleEl = document.getElementById('popupTitle');
    const msg = document.getElementById('popupMessage');

    overlay.style.display = 'flex';
    input.value = '';
    titleEl.textContent = '';
    msg.textContent = '';

    popupBox?.classList.remove('preset-popup');

    overlay.querySelectorAll('.preset-container, .filter-bar').forEach(e => e.remove());

    const newOk = okBtn.cloneNode(true);
    const newCancel = cancelBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOk, okBtn);
    cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);

    return {overlay, popupBox, input, okBtn: newOk, cancelBtn: newCancel, titleEl, msg};
}

function showCustomPrompt(message, defaultValue = '', title = "Opslaan", callback) {
    const {overlay, input, okBtn, cancelBtn, titleEl, msg, popupBox} = resetPopup();

    popupBox.classList.remove('preset-popup');

    titleEl.textContent = title;
    msg.textContent = message;

    input.style.display = 'block';
    input.value = defaultValue;
    input.focus();

    okBtn.style.display = 'inline-block';
    cancelBtn.style.display = 'inline-block';

    okBtn.textContent = 'OK';
    cancelBtn.textContent = 'Cancel';

    okBtn.onclick = () => {
        overlay.style.display = 'none';
        callback(input.value.trim() || null);
    };
    cancelBtn.onclick = () => {
        overlay.style.display = 'none';
        callback(null);
    };
}

function showCustomAlert(message, title = "Bericht") {
    const {overlay, okBtn, cancelBtn, titleEl, msg, popupBox, input} = resetPopup();

    popupBox.classList.remove('preset-popup');

    titleEl.textContent = title;
    msg.textContent = message;

    input.style.display = 'none';
    okBtn.style.display = 'inline-block';
    cancelBtn.style.display = 'none';

    okBtn.textContent = 'OK';

    okBtn.onclick = () => overlay.style.display = 'none';
}

function showCustomConfirm(message, callback, title = "Bevestigen") {
    const {overlay, okBtn, cancelBtn, titleEl, msg, popupBox, input} = resetPopup();

    popupBox.classList.remove('preset-popup');

    titleEl.textContent = title;
    msg.textContent = message;

    input.style.display = 'none';
    okBtn.style.display = 'inline-block';
    cancelBtn.style.display = 'inline-block';

    okBtn.textContent = 'OK';
    cancelBtn.textContent = 'Cancel';


    okBtn.onclick = () => {
        overlay.style.display = 'none';
        callback(true);
    };
    cancelBtn.onclick = () => {
        overlay.style.display = 'none';
        callback(false);
    };
}

function showPresetPicker(presetCallback, title = "Kies een voorbeeldprogamma.") {
    const { overlay, popupBox, input, cancelBtn, titleEl, msg } = resetPopup();
    popupBox.classList.add('preset-popup');
    input.style.display = 'none';
    titleEl.textContent = title;
    msg.textContent = "Kies één van de volgende voorbeeldprogamma's:";

    cancelBtn.style.display = 'inline-block';
    cancelBtn.textContent = 'Close';
    cancelBtn.onclick = () => {
        overlay.style.display = 'none';
        presetCallback(null);
    };

    const filterBar = document.createElement('div');
    filterBar.className = 'filter-bar';
    msg.insertAdjacentElement('afterend', filterBar);

    const presetContainer = document.createElement('div');
    presetContainer.className = 'preset-container';
    filterBar.insertAdjacentElement('afterend', presetContainer);

    let activeFilter = 'all';
    const tags = ['all', ...new Set(presets.flatMap(p => p.tags))];

    tags.forEach(tag => {
        const btn = document.createElement('button');
        btn.textContent = tag.toUpperCase();
        btn.dataset.tag = tag;
        if (tag === 'all') btn.classList.add('active');
        btn.onclick = () => {
            activeFilter = tag;
            filterBar.querySelectorAll('button').forEach(b =>
                b.classList.toggle('active', b.dataset.tag === tag)
            );
            renderPresets();
        };
        filterBar.appendChild(btn);
    });

    function renderPresets() {
        presetContainer.innerHTML = '';
        presets
            .filter(p => activeFilter === 'all' || p.tags.includes(activeFilter))
            .forEach(p => {
                const btn = document.createElement('button');
                btn.className = 'preset-btn';

                const img = document.createElement('div');
                img.className = 'preset-image';
                img.style.backgroundImage = `url(src/image/presets/${p.id}.jpeg)`;

                const name = document.createElement('div');
                name.className = 'preset-name';
                name.textContent = p.name;

                btn.appendChild(img);
                btn.appendChild(name);

                btn.onclick = () => {
                    overlay.style.display = 'none';
                    presetCallback(p.id);
                };

                presetContainer.appendChild(btn);
            });
    }

    renderPresets();
}
