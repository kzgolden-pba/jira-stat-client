import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    name: null,
    url: null,
    points: null,
    classNameBindings: ['isPointless'],
    classNames: ['link-priority-card'],
    isPointless: computed.empty('points')
});
