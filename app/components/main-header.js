import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        optionChanged(boxId, isChecked) {
            console.log('main-header: optionChanged invoked');
            console.log(`  boxId = ${boxId}, isChecked = ${isChecked}`);
        }
    }
});
