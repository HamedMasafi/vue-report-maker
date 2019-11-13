import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,

  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#e91e63',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ff9800',
        info: '#03a9f4',
        success: '#4caf50'
      }
    }
  }
});

/*
import colors from 'vuetify/es5/util/colors'

      {
      primary: colors.indigo.base,
      secondary: colors.pink.base,
      accent: colors.purple.base,
      error: colors.red.base,
      warning: colors.orange.base,
      info: colors.light-blue.base,
      success: colors.green.base
      }*/

      /*      {
      primary: #3f51b5,
      secondary: #e91e63,
      accent: #9c27b0,
      error: #f44336,
      warning: #ff9800,
      info: #03a9f4,
      success: #4caf50
      }*/