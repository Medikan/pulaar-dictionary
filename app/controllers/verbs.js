import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { observer } from '@ember/object';

export default Controller.extend({

    //TODO: add indicator to show current column sort thingy
    //TODO: FIGURE OUT CLEANER WAY TO SHOW VERBS!!! Draw is taking too much time
    //TODO: Throw loader on
    
    sortProps: ['searchableTerm:asc'],

    sortedTerm: sort('model', 'sortProps'),

    searchTerm: '',
    termCaret: 'arrow-down',
    definitionCaret: '',

    searchTermChanged: observer('searchTerm', function () {
        this.get('model').forEach((term) => {
            if (term.get('searchableTerm').indexOf(this.searchTerm) >= 0 || term.get('definition').indexOf(this.searchTerm) >= 0) {
                term.set('isHidden', '');
            }
            else {
                term.set('isHidden', 'hidden');
            }
        });
    }),

    actions: {

        //Changes sort of terms based on previous alignment and which column user clicked on
        changeSort(parent) {
            
            var updatedSortProps = this.get('sortProps');

            if (parent == 'term') {
                
                this.set('definitionCaret', '');

                if (updatedSortProps.indexOf('searchableTerm:asc') >= 0) {
                    updatedSortProps = ['searchableTerm:desc'];
                    this.set('termCaret', 'arrow-up');
                }
                else {
                    updatedSortProps = ['searchableTerm:asc'];
                    this.set('termCaret', 'arrow-down');
                }
            }
            else {

                this.set('termCaret', '');

                if (updatedSortProps.indexOf('definition:asc') >= 0) {
                    updatedSortProps = ['definition:desc'];
                    this.set('definitionCaret', 'arrow-up');
                }
                else {
                    updatedSortProps = ['definition:asc'];
                    this.set('definitionCaret', 'arrow-down');
                }
            }

            this.set('sortProps', updatedSortProps);
        }
    }
});
