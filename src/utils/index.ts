import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { BIG_INT_ONE, BIG_INT_ZERO } from "../constants";

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString("1");
  for (
    let i = BIG_INT_ZERO;
    i.lt(decimals as BigInt);
    i = i.plus(BIG_INT_ONE)
  ) {
    bd = bd.times(BigDecimal.fromString("10"));
  }
  return bd;
}

export function convertTokenToDecimal(
  tokenAmount: BigInt,
  exchangeDecimals: BigInt
): BigDecimal {
  if (exchangeDecimals == BIG_INT_ZERO) {
    return tokenAmount.toBigDecimal();
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals));
}
