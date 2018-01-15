import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({

    //TODO: add indicator to show current column sort thingy
    //TODO: search logic (observer to make only matching results appear)
    //TODO: FIGURE OUT CLEANER WAY TO SHOW VERBS!!! Draw is taking too much time
    
    sortProps: ['searchableTerm:asc'],

    sortedTerm: sort('model', 'sortProps'),

    actions: {

        //Changes sort of terms based on previous alignment and which column user clicked on
        changeSort(parent) {
            
            var updatedSortProps = this.get('sortProps');

            if (parent == 'term') {

                if (updatedSortProps.indexOf('searchableTerm:asc') >= 0)
                    updatedSortProps = ['searchableTerm:desc'];
                else
                    updatedSortProps = ['searchableTerm:asc'];
            }
            else {
                if (updatedSortProps.indexOf('definition:asc') >= 0)
                    updatedSortProps = ['definition:desc'];
                else
                    updatedSortProps = ['definition:asc'];
            }

            this.set('sortProps', updatedSortProps);
        }
    }
});
