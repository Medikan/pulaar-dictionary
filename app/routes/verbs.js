import TermTemplate from 'pulaar-dictionary-project/routes/term-template';

export default TermTemplate.extend({

    model() {
        return this.store.findAll('verb');
    },

    templateName: 'term-template',

    setupController(controller, model) {
        this._super(controller, model);

        controller.set('pageHeader', 'Verbs');
        controller.set('addTerm', 'add-verb');
        controller.set('editTerm', 'edit-verb');
    }
});
