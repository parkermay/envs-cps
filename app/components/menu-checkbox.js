import Ember from 'ember';

export default Ember.Component.extend({
    click() {
        console.log('menu-checkbox: click invoked');
        // console.log('boxId = ' + this.get('boxId'));
        // console.log('name = ' + this.get('name'));
        // console.log('value = ' + this.get('value'));
        // const checkBox = this.$('.menu-checkbox-input')[0];
        // console.log('checkBox = ' + checkBox);
        // console.log('checkBox.checked = ' + checkBox.checked);
        const isChecked = this.$('.menu-checkbox-input')[0].checked;
        this.get('onStateChange')(this.get('boxId'), isChecked);
    },

    actions: {
        changeCheckState() {
            console.log('menu-checkbox: changeCheckState invoked');
            this.get('onStateChange')();
        }
    }
});
