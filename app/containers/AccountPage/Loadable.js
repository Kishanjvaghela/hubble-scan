/**
 * Asynchronously loads the component for AccountPage
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'components/atoms/LoadingIndicator';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingIndicator,
});
