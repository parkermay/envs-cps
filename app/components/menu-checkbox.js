import Ember from 'ember';

export default Ember.Component.extend({
    click() {
//        console.log('menu-checkbox: click invoked');
        const isChecked = this.$('.menu-checkbox-input')[0].checked;
        this.get('onStateChange')(this.get('boxId'), isChecked);
    },
/*
    actions: {
        //  As of this writing, this can be removed. The click is sufficient to catch
        //   the event. Adding an explicit action to the input checkbox only has
        //   negative impact of keeping the check from actually appearing
        changeCheckState() {
            console.log('menu-checkbox: changeCheckState invoked');
            this.get('onStateChange')();
        }
    }
*/
});
