import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        checkboxChecked(boxId, isChecked) {
            console.log('flyout-menu: checkboxChecked invoked');
            console.log(`  boxId = ${boxId}, isChecked = ${isChecked}`);
        }
    }
});
