// Script für interaktive Elemente und Hover-Effekte
    const skeletonBones = [
        { id: 'skull', name: 'Schädel', description: 'Der Schädel ist der knöcherne Schutz des Gehirns und besteht aus mehreren miteinander verbundenen Knochen. Er bildet die Struktur des Kopfes und schützt die darunter liegenden empfindlichen Organe.', image: '../Kopf.jpg' },
        { id: 'mandible', name: 'Oberarmknochen', description: 'Der Oberarmknochen, auch Humerus genannt, verbindet die Schulter mit dem Ellenbogen. Er ist der längste Knochen der oberen Extremität und spielt eine entscheidende Rolle bei der Armbewegung.', image: './mandible.jpg' },
        { id: 'Schulter', name: 'Schulter', description: 'Die Schulter besteht aus dem Oberarmknochen, dem Schulterblatt und dem Schlüsselbein. Sie ist das beweglichste Gelenk im menschlichen Körper und ermöglicht eine Vielzahl von Armbewegungen', image: './shoulder.jpg' },
        { id: 'clavicle', name: 'Oberarmknochen', description: 'Das Schlüsselbein, oder Clavicula, ist ein langer, dünner Knochen, der das Brustbein mit dem Schulterblatt verbindet. Es dient als Stütze für die Schulter und hilft, den Arm vom Körper fernzuhalten, um Bewegungsfreiheit zu ermöglichen.', image: './clavicle.jpg' },
        { id: 'humerus', name: 'Oberarmknochen', description: 'Der Oberarmknochen, oder Humerus, ist der lange Knochen des Oberarms, der die Schulter mit dem Ellenbogen verbindet. Er spielt eine entscheidende Rolle in der Armbewegung und ist der größte Knochen der oberen Extremität.', image: './humerus.jpg' },
        { id: 'Brustbein', name: 'Brustbein', description: 'Das Brustbein, oder Sternum, ist ein langer, flacher Knochen in der Mitte des Brustkorbs. Es verbindet sich mit den Rippen und dem Schlüsselbein und schützt das Herz und die Lungen.', image: './sternum.jpg' },
        { id: 'Rippen', name: 'Rippen', description: 'Die Rippen sind gebogene Knochen, die den Brustkorb bilden. Sie schützen die inneren Organe wie Herz und Lungen und unterstützen die Atmung.', image: './ribs.jpg' },
        { id: 'Ellenbogen', name: 'Ellenbogen', description: 'Der Ellenbogen ist kein einzelner Knochen, sondern ein Gelenk, das den Humerus mit den beiden Unterarmknochen Elle und Speiche verbindet.', image: './elbow.jpg' },
        { id: 'Wirbelsäule', name: 'Wirbelsäule', description: 'Die Wirbelsäule besteht aus 33 Wirbeln und bildet die zentrale Stützstruktur des Körpers. Sie schützt das Rückenmark und ermöglicht Flexibilität und Bewegung.', image: './spine.jpg' },
        { id: 'elle', name: 'Elle', description: 'Die Elle ist einer der beiden langen Knochen im Unterarm. Sie verläuft parallel zur Speiche und ermöglicht zusammen mit ihr die Bewegung des Unterarms.', image: './ulna.jpg' },
        { id: 'Po', name: 'Gesäß/ Hintern', description: 'Das Gesäß besteht aus Muskeln und Fettgewebe über dem Beckenbereich und enthält keine spezifischen Knochen wie in der Liste angegeben.', image: './butt.jpg' },
        { id: 'unterarm', name: 'Unterarm', description: 'Der Unterarm besteht aus zwei Knochen: Elle (Ulna) und Speiche (Radius). Diese ermöglichen die Drehung des Handgelenks sowie Flexion und Extension des Arms.', image: './forearm.jpg' },
        { id: 'Hand', name: 'Hand', description: 'Die Hand besteht aus 27 Knochen: 8 Handwurzelknochen, 5 Mittelhandknochen und 14 Fingerknochen oder Phalangen. Diese ermöglichen eine Vielzahl von Bewegungen und Funktionen wie Greifen und Feinmotorik.', image: './hand.jpg' }
    ];
    

const infoDetail = document.querySelector('.info-detail');

function showBoneInfo(bone) {
    infoDetail.innerHTML = `<h3>${bone.name}</h3><p>${bone.description}</p>`;
} 

skeletonBones.forEach(bone => {
    const boneElement = document.getElementById(bone.id);
    
    if (boneElement) {
        boneElement.addEventListener('mouseover', () => showBoneInfo(bone));
        boneElement.addEventListener('mouseout', () => infoDetail.innerHTML = '');
    }
});