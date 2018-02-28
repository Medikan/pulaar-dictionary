import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.findAll('verb');
    },

    actions: {
        
        deleteTerm(term) {

            let confirmation = confirm('Are you sure you want to delete the term?');

            if (confirmation)
                term.destroyRecord();
        }
    }
});
