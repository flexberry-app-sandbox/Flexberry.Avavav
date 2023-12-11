import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Avavav',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avavav',
          title: 'Avavav'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-avavav-согласие-l': IISAvavavСогласиеLForm,
    'i-i-s-avavav-сотрудники-l': IISAvavavСотрудникиLForm,
    'i-i-s-avavav-согласие-e': IISAvavavСогласиеEForm,
    'i-i-s-avavav-сотрудники-e': IISAvavavСотрудникиEForm
  },

});

export default translations;
