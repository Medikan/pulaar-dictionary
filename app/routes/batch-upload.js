import Route from '@ember/routing/route';

export default Route.extend({

    actions: {

        uploadAll(termBlob) {
    
            var termArray = termBlob.split('\n');
            var finalArray = [];
            
            //move data to array
            for(var i = 1; i < termArray.length; i++) {
                
                finalArray.push([termArray[i].split(/,(.+)/)[0], termArray[i].split(/,(.+)/)[1]]);
            }

            //cleaning up data 
            for(i = 0; i < finalArray.length; i++) {
                for(var c = 0; c <finalArray[i].length; c++) {
                    finalArray[i][c] = finalArray[i][c].replace(/,/g, '');
                    finalArray[i][c] = finalArray[i][c].replace(/"/g, '');
                }
            }

            //committing to firebase
            finalArray.forEach( element => {
                var model = this.store.createRecord('noun');

                model.term = element[0];
                model.definition = element[1];

                model.save().then(response => {
                    // console.log(response);
                })

            })

            // console.log("Finished uploading");
        }
    }
});
