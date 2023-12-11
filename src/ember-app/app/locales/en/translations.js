import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvavavСогласиеLForm from './forms/i-i-s-avavav-согласие-l';
import IISAvavavСотрудникиLForm from './forms/i-i-s-avavav-сотрудники-l';
import IISAvavavСогласиеEForm from './forms/i-i-s-avavav-согласие-e';
import IISAvavavСотрудникиEForm from './forms/i-i-s-avavav-сотрудники-e';
import IISAvavavСогласиеModel from './models/i-i-s-avavav-согласие';
import IISAvavavСотрудникиModel from './models/i-i-s-avavav-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avavav-согласие': IISAvavavСогласиеModel,
    'i-i-s-avavav-сотрудники': IISAvavavСотрудникиModel
  },

  'application-name': 'Avavav',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avavav',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avavav',
          title: 'Avavav'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        avavav: {
          caption: 'Avavav',
          title: 'Avavav',
          'i-i-s-avavav-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-avavav-согласие-l': {
            caption: 'Согласие',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avavav-согласие-l': IISAvavavСогласиеLForm,
    'i-i-s-avavav-сотрудники-l': IISAvavavСотрудникиLForm,
    'i-i-s-avavav-согласие-e': IISAvavavСогласиеEForm,
    'i-i-s-avavav-сотрудники-e': IISAvavavСотрудникиEForm
  },

});

export default translations;
