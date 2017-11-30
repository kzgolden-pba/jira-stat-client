import DS from 'ember-data';
import Ember from 'ember';

var camelize = Ember.String.camelize;

export default DS.JSONAPISerializer.extend({
  keyForAttribute(key) {
    return camelize(key);
  }
});