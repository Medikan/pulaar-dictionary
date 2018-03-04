import Route from '@ember/routing/route';

export default Route.extend({

    setupController(controller, model) {
        this._super(controller, model);

        controller.set('numberOfTerms', this.controller.get('model.length'));
    },

    actions: {
        
        deleteTerm(term) {

            let confirmation = confirm('Are you sure you want to delete the term?');

            if (confirmation)
                term.destroyRecord();
        }
    }
});
