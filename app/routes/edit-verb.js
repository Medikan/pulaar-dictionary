import editTermTemplate from 'pulaar-dictionary-project/routes/edit-term-template';

export default editTermTemplate.extend({

    model(params) {
        return this.store.findRecord('verb', params.verb_id);
    },

    setupController(controller, model) {
        this._super(controller, model);
    
        controller.set('title', 'Edit a Term');
        controller.set('buttonLabel', 'Update');
        controller.set('responseMessage', '');
    },

    templateName: "edit-term-template",

});