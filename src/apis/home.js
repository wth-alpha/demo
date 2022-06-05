import request from "@/utils/request"

export const test = (data) => {
  return request({
    url: `/api/test`,
    header: {
			'Content-Type': 'application/json'
		},
    data,
    method: 'post',
  })
}