import DS from 'ember-data';
import Em from 'ember';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'api',
    pathForType(type) {
        return pluralize(Em.String.camelize(type));
    }
});
