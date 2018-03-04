import TermTemplate from 'pulaar-dictionary-project/routes/term-template';

export default TermTemplate.extend({

    model() {
        return this.store.findAll('noun');
    },

    templateName: 'term-template',
    controllerName: 'verbs',
    
    setupController(controller, model) {
        this._super(controller, model);

        controller.set('pageHeader', 'Nouns');
    }
});
