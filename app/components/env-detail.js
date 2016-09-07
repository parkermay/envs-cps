import Ember from 'ember';

export default Ember.Component.extend({
	env: null,
//	showStoreOverrides: false,
	hasStoreOverrides: Ember.computed('env', function() {
		let override = false;
		const thisEnv = this.get('env');
		if (thisEnv != null && thisEnv.pmsenvs != null) {
			override = thisEnv.pmsenvs.some(pms => 
				pms.storeOverrides != null && pms.storeOverrides.length);
		}
		return override;
	}),
});
