import avatar from './assets/images/avatar.png';
import countries from './assets/images/projects/countries.png';
import music from './assets/images/projects/music.png';
import heroes from './assets/images/projects/heroes.png';
import pigGame from './assets/images/projects/pig-game.png';

const data = [
  {
    title: 'About me',
    description:
      'Hola! Soy Jordy, actualmente me desarrollo como Full Stack Web Developer más orientado al Front-end con capacidad de realizar proyectos escalables para poder construir en equipo. Me apasiona la programación y tener la oportunidad de crear soluciones a los diferentes problemas o necesidades de una empresa.',
    image: `${avatar}`,
    textButton: 'Go to portfolio',
    urlButton: 'portfolio',
  },
  {
    title: 'Countries App',
    description:
      'El proyecto consta en mostrar todos los países del mundo traídos desde una API externa, para así manipularlos, ya sea ordenarlos por nombre, población, filtrar por continente, etc. Se pueden agregar actividades y asociarlas a países dependiendo de quién posea esa actividad.',
    image: `${countries}`,
    textButton: 'View Project',
    hrefButton: 'https://countries-app-blush-kappa.vercel.app/',
  },
  {
    title: 'Music App',
    description:
      'Este proyecto requirio a crear una página totalmente receptiva a los diseños proporcionados. Usé HTML5, junto con CSS Grid y JavaScript con la libreria React para las áreas que requerían interactividad, La App lista canciones o álbumes por su nombre, utilizando la api de Deezer.',
    image: `${music}`,
    textButton: 'View Project',
    hrefButton: 'https://proyecto-music.vercel.app/',
  },
  {
    title: 'Heroes App',
    description:
      'El Proyecto consta en mostrar heroes de Marvel y DC, asi tambien como buscar un heroe, la app hace una autenticación local. Se observan temas como hooks(useReducer, useContext, useEffect, etc), routers y estilos con Bootstrap',
    image: `${heroes}`,
    textButton: 'View Project',
    hrefButton: 'https://heroes-app-eeuvsfrs0-jordytiradotorres.vercel.app/',
  },
  {
    title: 'The Pig Game',
    description:
      'Este proyecto requirio crear un pequeño juego llamado Pig Game, usé HTML5, junto con CSS y Javascript',
    image: `${pigGame}`,
    textButton: 'View Project',
    hrefButton: 'https://the-pig-game-git-master-jordytiradotorres.vercel.app/',
  },
];

export default data;
