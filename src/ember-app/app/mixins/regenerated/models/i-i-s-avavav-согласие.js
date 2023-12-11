import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-avavav-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-avavav-согласие.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-avavav-согласие.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СогласиеE', 'i-i-s-avavav-согласие', {
    номер: attr('Номер', { index: 0 }),
    сотрудники: belongsTo('i-i-s-avavav-сотрудники', 'Сотрудники', {
      фио: attr('Фио', { index: 2, hidden: true }),
      телефон: attr('Телефон', { index: 3 }),
      номер: attr('Номер сотрудника', { index: 4 })
    }, { index: 1, displayMemberPath: 'фио' })
  });

  modelClass.defineProjection('СогласиеL', 'i-i-s-avavav-согласие', {
    номер: attr('Номер', { index: 0 }),
    сотрудники: belongsTo('i-i-s-avavav-сотрудники', 'Фио', {
      фио: attr('Фио', { index: 1 }),
      номер: attr('Номер сотрудника', { index: 2 }),
      телефон: attr('Телефон сотрудника', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
