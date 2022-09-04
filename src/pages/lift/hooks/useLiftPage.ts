import { lazy } from 'react';
import { gql } from 'urql';

import { AllLiftsNameFields } from '@/components/models/lift/AllLifts';
import { useAllLiftsPageQuery } from '@/pages/lift/hooks/useLiftPage.generated';

gql`
  ${AllLiftsNameFields}
  query AllLiftsPage {
    allLifts {
      ...AllLiftsNameFields
    }
  }
`;

export const useLiftPage = () => {
  const [{ data }, executeQuery] = useAllLiftsPageQuery();

  // React.lazy example
  const AllLiftsComponent = lazy(() => import('@/components/models/lift/LazyAllLifts'));

  return { AllLiftsComponent, data, executeQuery };
};
