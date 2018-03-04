import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({

    term:DS.attr("string"),
    definition:DS.attr("string"),
    tags:DS.attr("string"),

    searchableTerm: computed('term', function() {
        var updatedTerm = this.get('term');

        updatedTerm = updatedTerm.replace(/ɓ/g, 'b');
        updatedTerm = updatedTerm.replace(/ɗ/g, 'd');
        updatedTerm = updatedTerm.replace(/ñ/g, 'n');
        updatedTerm = updatedTerm.replace(/ŋ/g, 'n');
        updatedTerm = updatedTerm.replace(/ƴ/g, 'y');

        return updatedTerm;
    }),

    isHidden: '',
});
