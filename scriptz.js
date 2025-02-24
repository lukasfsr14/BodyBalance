// Drag-and-Drop Events
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

// Drag starten
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.style.opacity = '0.5';
    });

    draggable.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
    });
});

// Dropzonen konfigurieren
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'green';
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.style.borderColor = '#ccc';
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);

        // Überprüfung der Zuordnung
        if (draggedId === `term-${dropzone.id}`) {
            dropzone.textContent = draggedElement.textContent; // Begriff hinzufügen
            draggedElement.style.display = 'none'; // Begriff aus Liste entfernen
            alert('Richtig zugeordnet!');
        } else {
            alert('Falsche Zuordnung!');
        }
        
        dropzone.style.borderColor = '#ccc';
    });
});
