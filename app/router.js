import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('verbs');
  this.route('add-term');
  this.route('edit-term-template');
  this.route('edit-term', { path: '/:verb_id/edit-term'});
  this.route('batch-upload');
  this.route('nouns');
  this.route('term-template');
});

export default Router;
