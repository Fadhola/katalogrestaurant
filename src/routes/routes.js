import Detail from '../pages/detail';
import Favorite from '../pages/favorite';
import List from '../pages/list';

const routes = {
  '/': List,
  '/favorites': Favorite,
  '/restaurant/:id': Detail,
};

export default routes;
