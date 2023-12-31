// Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:

// Ознакомься с документацией библиотеки Vimeo плеера.
// Добавь библиотеку как зависимость проекта через npm.
// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен 
// как npm пакет,а не через CDN.
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение 
// с сохраненной позиции.
// Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище 
// не чаще чем раз в секунду.
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// console.log(iframe)
    const player = new Player(iframe);
    const PLAYER_STORAGE_KEY = 'videoplayer-current-time';
    player.on('timeupdate', throttle(onPlay, 1000));
    
    function onPlay (data) {
        const playedTime = data.seconds;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(playedTime));
    };

    player.setCurrentTime(JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || 0);