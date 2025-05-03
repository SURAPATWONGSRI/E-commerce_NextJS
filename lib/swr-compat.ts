/**
 * SWR compatibility layer for use with Clerk and React 19
 *
 * This file provides compatibility between SWR's exported module structure
 * and what @clerk/nextjs expects when importing from SWR.
 */

import * as baseSWR from "swr";
import * as infiniteSWR from "swr/infinite";

// Re-export the original module
export * from "swr";

// Create a default export that Clerk expects
const swrDefault = Object.assign({}, baseSWR);
export default swrDefault;

// Export an infinite module with a default export
export const infinite = {
  ...infiniteSWR,
  // Add a default property to the exports
  default: Object.assign({}, infiniteSWR),
};
