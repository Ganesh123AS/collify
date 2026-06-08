import { QueryClientProvider as RQProvider } from '@tanstack/react-query';
import type { QueryProviderProps } from './types/query-client-types';
import { queryClient } from '../../libs/react-query/queryClient';


const ShellQueryClientProvider = ({ children }: QueryProviderProps) => {
  return <RQProvider client={queryClient}>{children}</RQProvider>;
};

export default ShellQueryClientProvider;
