document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = {
        'effects': document.getElementById('effects'),
        'scrolling-text': document.getElementById('scrolling-text'),
        'interactive': document.getElementById('interactive')
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('tab-active'));
            Object.values(tabContents).forEach(content => content.classList.add('hidden'));
            this.classList.add('tab-active');
            const tabName = this.getAttribute('data-tab');
            tabContents[tabName].classList.remove('hidden');
        });
    });
});

function changeScrollDirection() {
    let direction = document.getElementById('scrollDirection').textContent;
    if (direction === 'Right') {
        document.getElementById('scrollDirection').textContent = 'Left';
    } else {
        document.getElementById('scrollDirection').textContent = 'Right';
    }
}

function applyVisualiser() {
    let visualisationEffect = document.getElementById('visualisationEffect').value;
    let visualisationSpeed = document.getElementById('visualisationSpeed').value;

    const data = {
        effect: visualisationEffect,
        speed: visualisationSpeed
    };

    console.log("[+] Applying visualiser with: ", data);
}

function applyText() {
    let textContent = document.getElementById('textContent').value;
    let textScrollSpeed = document.getElementById('textScrollSpeed').value;
    let scrollDirection = document.getElementById('scrollDirection').textContent;

    const data = {
        text: textContent,
        speed: textScrollSpeed,
        direction: scrollDirection
    };

    console.log("[+] Applying scrolling text with: ", data);
}

function applyInteractive() {
    let interactiveEffect = document.getElementById('interactiveEffect').value;
    let interactiveTrigger = document.getElementById('interactiveTrigger').value;

    const data = {
        effect: interactiveEffect,
        trigger: interactiveTrigger
    };

    console.log("[+] Applying interactive effect with: ", data);
}