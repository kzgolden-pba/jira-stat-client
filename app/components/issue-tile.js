import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNameBindings: ['isPointless', 'isClosed', 'isHidden'],
    classNames: ['issue-tile'],

    issue: null,
    maxPoints: null,

    url: computed.alias('issue.url'),
    points: computed.alias('issue.storyPoints'),
    name: computed.alias('issue.key'),

    isPointless: computed.empty('points'),
    isClosed: computed.equal('issue.status.name','Closed'),
    isHidden: computed.and('hideClosed', 'isClosed')
});
