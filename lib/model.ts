// lib/model.ts — implied value calc (skeleton)

export interface TokenInfo {
  symbol: string;
  priceUsd: number;
  liquidityUsd: number;
  volume24hUsd?: number;
}

/**
 * Implied value of a token.
 * TODO: replace stub with the real implied-value formula from the kit spec.
 */
export function impliedValue(token: TokenInfo): number {
  if (!token || token.priceUsd < 0 || token.liquidityUsd < 0) {
    return 0;
  }
  return token.priceUsd * token.liquidityUsd;
}
