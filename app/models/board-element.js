import DS from 'ember-data';

export default DS.Model.extend({
    columns: DS.attr(),
    swimlanes: DS.attr(),
    issuesOnBoard: DS.attr('number'),
});
