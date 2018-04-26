import { entries } from '../components/student/menuEntries';

/*
 * actions types
 */

export const CHANGE_ACTIVE = 'CHANGE_ACTIVE';

/*
 * action creators
 */

export const changeActive = id => ({
  type: CHANGE_ACTIVE,
  id: id >= 0 && id < entries.length ? id : 0,
});
