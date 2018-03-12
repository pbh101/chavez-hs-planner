import HSReqFilter from "shared/types/hs-req-filter";
import SuccessChance from "shared/enums/success-chance";

export const accept = (filter: HSReqFilter): HSRequirementFunction => {
  return (student, program) => {
    if (filter(student, program)) {
      return {outcome: SuccessChance.CERTAIN};
    } else {
      return {outcome: SuccessChance.NONE};
    }
  }
}
