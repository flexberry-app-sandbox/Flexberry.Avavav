import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.avavav.caption'),
          title: i18n.t('forms.application.sitemap.avavav.title'),
          children: [{
            link: 'i-i-s-avavav-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.avavav.i-i-s-avavav-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.avavav.i-i-s-avavav-сотрудники-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-avavav-согласие-l',
            caption: i18n.t('forms.application.sitemap.avavav.i-i-s-avavav-согласие-l.caption'),
            title: i18n.t('forms.application.sitemap.avavav.i-i-s-avavav-согласие-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})