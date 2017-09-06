export class GalleryItem {
    constructor(){
        this.divItem = document.createElement('div');
        this.divItem.classList.add('column', 'is-4');
        this.divItem.innerHTML = '<div class="card">\n' +
            '          <header class="card-header">\n' +
            '            <p class="card-header-title">\n' +
            '              <img src="https://placehold.it/64x64" class="avatar">\n' +
            '              &commat;username\n' +
            '            </p>\n' +
            '            <span class="card-header-icon timestamp">\n' +
            '              2m\n' +
            '            </span>\n' +
            '          </header>\n' +
            '          <div class="card-image">\n' +
            '            <figure class="image is-4by3">\n' +
            '              <img src="https://placehold.it/1280x960" alt="Image">\n' +
            '            </figure>\n' +
            '          </div>\n' +
            '          <div class="card-content">\n' +
            '            <div class="panel-block-item">\n' +
            '              <span class="likes">\n' +
            '                <span class="icon">\n' +
            '                  <i class="fa fa-heart"></i>\n' +
            '                </span>\n' +
            '                303k Likes\n' +
            '              </span>\n' +
            '              <span class="comments">\n' +
            '                <span class="icon">\n' +
            '                  <i class="fa fa-comment"></i>\n' +
            '                </span>\n' +
            '                12k Comments\n' +
            '              </span>\n' +
            '            </div>\n' +
            '          </div>\n' +
            '        </div>';
    }
    updateImage() {
        let di = this.divItem;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://source.unsplash.com/random/1280x960&noCache=' + (new Date().getTime()) + Math.random());
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let img = di.querySelectorAll('figure img');
                img[0].src = xhr.responseURL;
            }
        });
        xhr.send();
    };

    getDivItem() {
        return this.divItem;
    };
}


