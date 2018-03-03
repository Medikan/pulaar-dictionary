import Route from '@ember/routing/route';

const editTermTemplate =  Route.extend({

    actions: {

        addTerm(newTerm){
            
            newTerm.save().then( response => {
                this.controller.set('responseMessage', `The list has been updated!`);
                this.controller.set('model.term', '');
                this.controller.set('model.definition', '');
            })
        },

        willTransition(transition) {

            let model = this.controller.get('model');

            if(model.get('hasDirtyAttributes')) {
                let confirmation = confirm('Your changes have not been saved. Would you like to leave this form?');

                if (confirmation) {
                    model.rollbackAttributes();
                }
                else {
                    transition.abort();
                }
            }
        }
    }
});

export default editTermTemplate;