/*
 * WHAT IS THIS FILE?
 *
 * It's the  entry point for netlify-edge when building for production.
 *
 * Learn more about the cloudflare integration here:
 * - https://qwik.builder.io/deployments/netlify-edge/
 *
 */
import {
  createQwikRouter,
  type PlatformNetlify,
} from '@qwik.dev/router/middleware/netlify-edge';
import qwikCityPlan from '@qwik-city-plan';
import { manifest } from '@qwik-client-manifest';
import render from './entry.ssr';

declare global {
  interface QwikCityPlatform extends PlatformNetlify {}
}

export default createQwikRouter({ render, qwikCityPlan, manifest });
