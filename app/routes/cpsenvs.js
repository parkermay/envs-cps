import Ember from 'ember';

let envsModel = [{
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
		envName: 'txndcq3',
		displayName: 'QA30',
		version: '6.1.0.1',
		isCorpRoot: false,
		storeOverrides: [
				{ "facilityId": "07500" },
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
}];

export default Ember.Route.extend({
	model() {
		return envsModel;
	}
});
