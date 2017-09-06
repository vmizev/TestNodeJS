import bulma from './bulma';
import * as GalleryItemM  from './galleryItem';

bulma();

function firstScreen() {
    let parent = document.getElementById('parent'),
        btnWrapper = document.getElementById('btn-wrapper');

    for (let i = 0; i < 3; i++){
        let divColumn = document.createElement('div');
        divColumn.classList.add('columns');

        for (let j = 0; j < 3; j++) {
            let gItem = new GalleryItemM.GalleryItem();
            gItem.updateImage();
            divColumn.appendChild(gItem.getDivItem());
        }
        parent.insertBefore(divColumn, btnWrapper);
    }
}
document.getElementById('more').onclick = function () {
    let parent = document.getElementById('parent'),
        btnWrapper = document.getElementById('btn-wrapper'),
        more = document.getElementById('more'),
        divColumn = document.createElement('div');

    divColumn.classList.add('columns');

    for (let i = 0; i < 3; i++){
        let gItem = new GalleryItemM.GalleryItem();
        gItem.updateImage();
        divColumn.appendChild(gItem.getDivItem());
    }
    parent.insertBefore(divColumn, btnWrapper);
}

firstScreen();