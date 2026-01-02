import { FunctionalComponentOptions } from 'kdu';

export interface ClientOnlyProps {
  placeholder?: string;
  placeholderTag?: string;
}

declare const ClientOnly: FunctionalComponentOptions<ClientOnlyProps>;

export default ClientOnly;
