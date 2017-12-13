import DS from 'ember-data';

export default DS.Model.extend({
    key: DS.attr('string'),
    storyPoints: DS.attr('number'),
    summary: DS.attr('string'),
    url: DS.attr('string'),
    targetVersions: DS.attr()
});
