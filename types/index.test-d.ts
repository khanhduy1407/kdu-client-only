import { expectType } from 'tsd';
import { CreateElement, Component, FunctionalComponentOptions } from 'kdu';
import ClientOnly, { ClientOnlyProps } from 'kdu-client-only';

const createElement: CreateElement = null as unknown as CreateElement;

createElement(ClientOnly);

expectType<Component>(ClientOnly);
expectType<FunctionalComponentOptions>(ClientOnly);
expectType<FunctionalComponentOptions<ClientOnlyProps>>(ClientOnly);
