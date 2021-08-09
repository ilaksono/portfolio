import { Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';

const LazyWrapper = ({ children }) => {

  return (
    <Suspense
      fallback={
        <CircularProgress />
      }
    >
      {children}
    </Suspense>

  )
}
export default LazyWrapper;