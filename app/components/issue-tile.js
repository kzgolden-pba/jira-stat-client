import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNameBindings: ['isPointless', 'isClosed', 'isHidden'],
    classNames: ['issue-tile'],

    issue: null,
    maxPoints: null,
    closedStatuses: null,

    url: computed.alias('issue.url'),
    points: computed.alias('issue.storyPoints'),
    name: computed.alias('issue.key'),

    isPointless: computed.empty('points'),
    isHidden: computed.and('hideClosed', 'isClosed'),
    isClosed: computed('closedStatuses', 'issue.status.id', function(){
        return this.get('closedStatuses').includes(this.get('issue.status.id'));
    })
});
