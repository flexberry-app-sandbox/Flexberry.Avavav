import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avavav-сотрудники', 'Unit | Model | i-i-s-avavav-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-avavav-согласие',
    'model:i-i-s-avavav-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
