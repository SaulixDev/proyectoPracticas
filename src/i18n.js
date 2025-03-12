import { createI18n } from 'vue-i18n';


// Crear la instancia de i18n
const i18n = createI18n({
    locale: 'esp',
    fallbackLocale: 'eng',
    messages: {
      eng: {
        message: {
            bttn: {
                new: 'Looking for something new?',
                cat: 'Categories',
                search: 'Search',
                alc: 'Alcoholic Drinks',
                noAlc: 'Non Alcoholic Drinks',
                lang: '🇪🇸',
            },
            nav: {
                food: 'Meal',
                fav: 'Favorites',
            },
            fav: {
                drink: 'There is no favorite cocktail',
                food: 'There is no favorite meal',
            },
            info: {
                more: 'More info',
                less: 'Less info',
            },
            input: {
                search: 'Search cocktail',
            },
          hello: 'hello world',
        },
      },
      esp: {
        message: {
            bttn: {
                new: '¿Buscas algo nuevo?',
                cat: 'Categorías',
                search: 'Buscar',
                alc: 'Bebidas alcohólicas',
                noAlc: 'Bebidas no alcohólicas',
                lang: '🇬🇧',
            },
            nav: {
                food: 'Comida',
                fav: 'Favoritos',
            },
            fav: {
                drink: 'No hay cóckteles favoritos',
                food: 'No hay comidas favoritas',
            },
            info: {
                more: 'Más info',
                less: 'Menos info',
            },
            input: {
                search: 'Buscar cocktail',
            },
          hello: 'Hola mundo',
        },
      },
    },
  });

  export const changeLanguage = (lang, i18n) => {
    i18n.global.locale = lang;
    localStorage.setItem("lang", lang); // Guardar el idioma en localStorage
  };

export default i18n;