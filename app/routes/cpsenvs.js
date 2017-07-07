import Ember from 'ember';

let envsModel = {
	showStoreOverrides: false,
	envs: 
[{
	name: 'QA NG',
	version: '1.4.0-1234',
	pmsenvs: [{
		envName: 'txqasp4',
		displayName: 'QASP4',
		version: '7.0.0.1',
		isCorpRoot: true,
		storeOverrides: []
		}, {
		envName: 'txndcq20',
		displayName: 'QA20',
		version: '7.0.0.1',
		isCorpRoot: true,
		storeOverrides: []
		}, {
		envName: 'txndcq30',
		displayName: 'QA30',
		version: '6.1.0.1',
		isCorpRoot: false,
		storeOverrides: [
				{ "facilityId": "07500" },
				{ "facilityId": "1130" },
			]
		}, {
		envName: 'txndcq31',
		displayName: 'QA31',
		version: '6.1.0.1',
		isCorpRoot: true,
		storeOverrides: [
				{ "facilityId": "07500" },
				{ "facilityId": "1130" },
			]
		}
	],
}, {
	name: 'SB NG',
	version: '1.4.0-1234',
}, {
	name: 'QA GA',
	version: '1.4.0-1234',
}, {
	name: 'SB GA',
	version: '1.4.0-1234',
}]
};

export default Ember.Route.extend({
	model() {
		return envsModel;
	},

    actions: {
        settingChanged(settingName, settingValue) {
            console.log(`cpsenvs: settingChanged invoked:  boxId = ${settingName}, isChecked = ${settingValue}`);
            //Cookies.set(settingName, settingValue);

			const model = this.model();
			console.log('model = ' + model);
			Ember.set(model, 'showStoreOverrides', settingValue);

		// apiTaskq.getTasks(
		// 		Cookies.get('cps-store-id'),
		// 		Cookies.get('cps-taskq-sort'),
		// 		searchType, searchTerm
		// 	).then(taskData => {
		// 		Ember.set(taskqModel, 'tasks', taskData.tasks);

        }
    }
});
