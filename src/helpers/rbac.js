import RBAC from "easy-rbac";
import options from "./policy/options.js";

const rbac = new RBAC(options);

export default rbac;
