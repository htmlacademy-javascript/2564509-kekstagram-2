function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const names = ['Слава','Гена','Оля','Света','Юра','Сергей','Алексей','Егор','Вова','Петя','Вася','Оксана', ];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function generateComments(numComments) {
  const comments = [];
  for (let i = 0; i < numComments; i++) {
    const comment = {
      id: getRandomInt(100, 999), // уникальный id для комментария
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: messages[getRandomInt(0, messages.length - 1)],
      name: names[getRandomInt(0, names.length - 1)]
    };
    comments.push(comment);
  }
  return comments;
}

function getPhotos() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    const photo = {
      id : i,
      url: `photos/${i}.jpg`,
      description:`Описание фотографии номер ${i}`,
      likes:getRandomInt(15, 200),
      comments:generateComments(getRandomInt(0, 30))
    };
    photos.push(photo);
  }
  return photos;

}


const photoArray = getPhotos();

// Вывод всех объектов в консоль в текстовом формате
photoArray.forEach(photo => {
  console.log(JSON.stringify(photo, null, 2));
});