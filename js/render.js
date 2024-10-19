// Отобразить фотографии других пользователей.

// Заведите модуль, который будет отвечать за отрисовку миниатюр.

// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures.
// Для вставки элементов используйте DocumentFragment.

// Подключите модуль в проект.

const picturesData = [{
  url:'img1.jpg',
  description: 'Собачка писает на травке',
  likes:5,
  comments:50

},
{
  url:'img2.jpg',
  description: 'Кошечка спит на диване',
  likes:5,
  comments:50

},{
  url:'img3.jpg',
  description: 'Лошадка гуляет на лугу',
  likes:5,
  comments:50

}];

// 1. Получить ссылки на темплейт, див вывода картинок и фрагмент
// 2.вывод в цикле массиве картинок через фрагмент


function renderPictures(pictures){
  const templatePicture = document.querySelector('#picture').content;
  const picturesBox = document.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture)=>{
    const pictureElement = templatePicture.cloneNode(true);
    const imgElement = pictureElement.querySelector('.picture__img');
    imgElement.src = picture.url;
    imgElement.alt = picture.description;

    const likesElement = pictureElement.querySelector('.picture__likes');
    likesElement.textContent = picture.likes;

    const commentsElement = pictureElement.querySelector('.picture__comments');
    commentsElement.textContent = picture.comments;


    fragment.appendChild(pictureElement);

  });
  picturesBox.appendChild(fragment);
}

renderPictures(picturesData);

