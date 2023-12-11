import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avavav-согласие-l');
  this.route('i-i-s-avavav-согласие-e',
  { path: 'i-i-s-avavav-согласие-e/:id' });
  this.route('i-i-s-avavav-согласие-e.new',
  { path: 'i-i-s-avavav-согласие-e/new' });
  this.route('i-i-s-avavav-сотрудники-l');
  this.route('i-i-s-avavav-сотрудники-e',
  { path: 'i-i-s-avavav-сотрудники-e/:id' });
  this.route('i-i-s-avavav-сотрудники-e.new',
  { path: 'i-i-s-avavav-сотрудники-e/new' });
});

export default Router;
