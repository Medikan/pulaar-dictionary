import editTermTemplate from 'pulaar-dictionary-project/routes/edit-term-template';

export default editTermTemplate.extend({

    model() {
        return this.store.createRecord('verb');
    },

    setupController(controller, model) {
        this._super(controller, model);
    
        controller.set('title', 'Add a Term');
        controller.set('buttonLabel', 'Add to List');
        controller.set('responseMessage', '');
    },
});
