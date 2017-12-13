import DS from 'ember-data';
import Em from 'ember';

export default DS.JSONAPIAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'api',
    pathForType(type) {
        return Em.String.pluralize(Em.String.camelize(type));
    }
});
