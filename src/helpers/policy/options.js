import roles from "../roles.js";
import adminPolicy from "./admin.policy.js";
import sellerPolicy from "./seller.policy.js";
import customerPolicy from "./customer.policy.js";

const options = {
  [roles.ADMIN]: { can: adminPolicy },
  [roles.SELLER]: { can: sellerPolicy },
  [roles.CUSTOMER]: { can: customerPolicy },
};

export default options;
