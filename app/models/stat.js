import DS from 'ember-data';

export default DS.Model.extend({
    weeks: DS.attr('number'),
    storiesWithoutPoints: DS.attr('number'),
    storiesWithPoints: DS.attr('number'),
    totalSamplePoints: DS.attr('number'),
    avgPoints: DS.attr('number'),
    stdDevPoints: DS.attr('number'),
    totalTix: DS.attr('number'),
    stdDeviationNoTix: DS.attr('number'),
    avgNoTixPerWeek: DS.attr('number'),
});
