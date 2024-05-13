import requests from "@/utils/requests";

export function reqOrderList(data: any) {
    return requests({
        url: "/order/list",
        method: "POST",
        data
    })
}