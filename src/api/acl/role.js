import request from "@/utils/request";

export function getMenuList(data) {
  return request("/admin/acl/index/menu");
}
