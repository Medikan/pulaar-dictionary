import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('verbs');
  this.route('edit-term-template');
  this.route('batch-upload');
  this.route('nouns');
  this.route('term-template');
  this.route('add-verb');
  this.route('edit-verb', { path: '/:verb_id/edit-verb'});
  this.route('add-noun');
  this.route('edit-noun', { path: '/:verb_id/edit-noun'});
});

export default Router;
